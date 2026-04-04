'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { shaderMaterial, OrbitControls, Center, Float } from '@react-three/drei';
import * as THREE from 'three';
import { useEditorStore } from '@/store/useEditorStore';

// 1. Defining the custom GLSL shader material
const VoxelShaderMaterial = shaderMaterial(
  {
    u_time: 0,
    u_color: new THREE.Color('#3b82f6'),
    u_speed: 1.0,
    u_distortion: 0.5,
    u_noise_scale: 2.5,
  },
  // Vertex Shader
  `
    varying vec2 vUv;
    varying vec3 vPosition;
    uniform float u_time;
    uniform float u_speed;
    uniform float u_distortion;

    void main() {
      vUv = uv;
      vPosition = position;
      
      // Basic wave displacement
      vec3 pos = position;
      pos.z += sin(pos.x * 5.0 + u_time * u_speed) * u_distortion * 0.1;
      pos.z += cos(pos.y * 5.0 + u_time * u_speed) * u_distortion * 0.1;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  // Fragment Shader
  `
    uniform float u_time;
    uniform vec3 u_color;
    uniform float u_speed;
    uniform float u_noise_scale;
    varying vec2 vUv;

    // Simplex Noise (simplified for demo)
    float noise(vec2 p) {
      return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
    }

    void main() {
      float n = noise(vUv * u_noise_scale + u_time * 0.1 * u_speed);
      vec3 color = mix(u_color * 0.5, u_color, n);
      
      // Vignette effect
      float dist = distance(vUv, vec2(0.5));
      color *= 1.0 - smoothstep(0.4, 0.7, dist);
      
      gl_FragColor = vec4(color, 1.0);
    }
  `
);

// Register with R3F
extend({ VoxelShaderMaterial });

// Internal mesh component that reacts to Zustand store
const SceneMesh = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<any>(null);
  
  useFrame((state) => {
    if (!materialRef.current) return;
    
    // Read directly from Zustand store for transient (non-React-render) perf
    const uniforms = useEditorStore.getState().activeProject.sceneData.uniforms;
    
    materialRef.current.u_time = state.clock.elapsedTime;
    
    // Smoothly interpolate material uniforms from the store
    materialRef.current.u_color.lerp(new THREE.Color(uniforms.u_color), 0.1);
    materialRef.current.u_speed = THREE.MathUtils.lerp(materialRef.current.u_speed, uniforms.u_speed, 0.1);
    materialRef.current.u_distortion = THREE.MathUtils.lerp(materialRef.current.u_distortion, uniforms.u_distortion, 0.1);
    materialRef.current.u_noise_scale = THREE.MathUtils.lerp(materialRef.current.u_noise_scale, uniforms.u_noise_scale, 0.1);
    
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} castShadow receiveShadow>
        <planeGeometry args={[4, 4, 128, 128]} />
        {/* @ts-ignore */}
        <voxelShaderMaterial ref={materialRef} side={THREE.DoubleSide} />
      </mesh>
    </Float>
  );
};

export default function EditorCanvas() {
  return (
    <div className="w-full h-full bg-zinc-950 flex items-center justify-center cursor-crosshair">
      <Canvas
        shadows
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['#09090b']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} castShadow />
        
        <Center>
          <SceneMesh />
        </Center>
        
        <OrbitControls 
          enableDamping 
          dampingFactor={0.05}
          maxDistance={10}
          minDistance={2}
          makeDefault
        />
      </Canvas>
    </div>
  );
}
