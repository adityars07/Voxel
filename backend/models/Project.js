const mongoose = require('mongoose');

const sceneDataSchema = new mongoose.Schema({
  baseEffect: { type: String, default: 'noise' },
  // Mixed type allows dynamic uniform keys (e.g., u_color, u_speed)
  uniforms: { type: mongoose.Schema.Types.Mixed, default: {} },
  uploadedTextures: [{ type: String }], // Array of URLs (S3/Cloudinary)
  cameraPosition: {
    x: { type: Number, default: 0 },
    y: { type: Number, default: 0 },
    z: { type: Number, default: 5 }
  }
}, { _id: false });

const projectSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  title: { type: String, default: 'Untitled Project' },
  isPublic: { type: Boolean, default: false },
  sceneData: { type: sceneDataSchema, default: () => ({}) }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
