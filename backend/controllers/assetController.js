const { streamUpload, cloudinary } = require('../middleware/upload');
const Project = require('../models/Project');

/**
 * POST /api/assets/upload/:projectId
 * Uploads a texture or 3D model to Cloudinary, stores the URL in the project.
 */
exports.uploadAsset = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file provided' });
    }

    const { projectId } = req.params;
    const userId = req.user.id;

    // Verify project ownership
    const project = await Project.findOne({ _id: projectId, userId });
    if (!project) {
      return res.status(404).json({ error: 'Project not found or unauthorized' });
    }

    // Determine resource type for Cloudinary
    const isModel = req.file.mimetype.includes('gltf') || 
                    req.file.mimetype === 'application/octet-stream';

    const result = await streamUpload(req.file.buffer, {
      folder: `voxel/projects/${projectId}`,
      resource_type: isModel ? 'raw' : 'image',
      public_id: `${Date.now()}_${req.file.originalname.replace(/\s+/g, '_')}`,
    });

    // Append the URL to the project's uploadedTextures array
    project.sceneData.uploadedTextures.push(result.secure_url);
    project.markModified('sceneData');
    await project.save();

    res.status(201).json({
      message: 'Asset uploaded',
      asset: {
        url: result.secure_url,
        publicId: result.public_id,
        format: result.format,
        bytes: result.bytes,
        resourceType: result.resource_type,
      },
    });
  } catch (err) {
    console.error('Upload error:', err);
    res.status(500).json({ error: err.message || 'Upload failed' });
  }
};

/**
 * DELETE /api/assets/:projectId/:publicId
 * Removes an asset from Cloudinary and the project's texture list.
 */
exports.deleteAsset = async (req, res) => {
  try {
    const { projectId, publicId } = req.params;
    const userId = req.user.id;

    const project = await Project.findOne({ _id: projectId, userId });
    if (!project) {
      return res.status(404).json({ error: 'Project not found or unauthorized' });
    }

    // Delete from Cloudinary
    await cloudinary.uploader.destroy(publicId);

    // Remove matching URL from project
    project.sceneData.uploadedTextures = project.sceneData.uploadedTextures.filter(
      (url) => !url.includes(publicId)
    );
    project.markModified('sceneData');
    await project.save();

    res.json({ message: 'Asset deleted' });
  } catch (err) {
    console.error('Delete error:', err);
    res.status(500).json({ error: 'Delete failed' });
  }
};

/**
 * GET /api/assets/:projectId
 * Lists all uploaded asset URLs for a project.
 */
exports.listAssets = async (req, res) => {
  try {
    const { projectId } = req.params;
    const userId = req.user.id;

    const project = await Project.findOne({ _id: projectId, userId });
    if (!project) {
      return res.status(404).json({ error: 'Project not found or unauthorized' });
    }

    res.json({ assets: project.sceneData.uploadedTextures || [] });
  } catch (err) {
    res.status(500).json({ error: 'Failed to list assets' });
  }
};
