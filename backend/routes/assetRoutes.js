const express = require('express');
const router = express.Router();
const assetController = require('../controllers/assetController');
const auth = require('../middleware/auth');
const { upload } = require('../middleware/upload');

// Upload a texture or 3D model
router.post('/upload/:projectId', auth, upload.single('file'), assetController.uploadAsset);

// List all assets for a project
router.get('/:projectId', auth, assetController.listAssets);

// Delete an asset
router.delete('/:projectId/:publicId', auth, assetController.deleteAsset);

module.exports = router;
