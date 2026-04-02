const Project = require('../models/Project');

/**
 * GET /api/projects
 * List all projects for current user.
 */
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find({ userId: req.user.id }).sort({ updatedAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
};

/**
 * POST /api/projects
 * Create a new project.
 */
exports.createProject = async (req, res) => {
  try {
    const { title } = req.body;
    const newProject = new Project({
      userId: req.user.id,
      title: title || 'Untitled Project'
    });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create project' });
  }
};

/**
 * PUT /api/projects/:id/scene
 * Updates the scene data for a specific project.
 */
exports.updateSceneData = async (req, res) => {
  try {
    const { id } = req.params;
    const { sceneData } = req.body;
    const userId = req.user.id;

    const project = await Project.findOne({ _id: id, userId });
    if (!project) {
      return res.status(404).json({ error: 'Project not found/unauthorized' });
    }

    // Overwrite or selectively merge uniforms
    project.sceneData = sceneData;
    await project.save();

    res.json({ message: 'Scene saved', project });
  } catch (err) {
    console.error('Save error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

/**
 * GET /api/projects/:id/export
 * Generates raw R3F code from SceneData JSON.
 */
exports.exportProjectCode = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findById(id);
    if (!project) return res.status(404).json({ error: 'Not found' });

    const { sceneData } = project;
    
    // Simplistic mockup generation
    const code = `
      import React from 'react';
      import { Canvas } from '@react-three/fiber';
      import { shaderMaterial } from '@react-three/drei';
      import * as THREE from 'three';

      // Shader logic here based on baseEffect: ${sceneData.baseEffect}
      // Uniforms applied: ${JSON.stringify(sceneData.uniforms, null, 2)}
      
      export default function CompiledScene() {
        return (
          <Canvas>
            <mesh>
              <planeGeometry args={[5, 5]} />
              <meshBasicMaterial color="${sceneData.uniforms.u_color || '#ffffff'}" />
            </mesh>
          </Canvas>
        );
      }
    `;
    res.json({ code });
  } catch (err) {
    res.status(500).json({ error: 'Export failed' });
  }
};
