const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const auth = require('../middleware/auth');

router.get('/', auth, projectController.getAllProjects);
router.post('/', auth, projectController.createProject);
router.put('/:id/scene', auth, projectController.updateSceneData);
router.get('/:id/export', auth, projectController.exportProjectCode);

module.exports = router;
