import { create } from 'zustand';

interface EditorState {
  // Scene Data
  activeProject: {
    id: string;
    title: string;
    sceneData: {
      baseEffect: string;
      uniforms: {
        u_color: string;
        u_speed: number;
        u_distortion: number;
        u_noise_scale: number;
      };
    };
  };
  
  // Actions
  setUniform: (name: string, value: any) => void;
  setProject: (project: any) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  activeProject: {
    id: 'placeholder-1',
    title: 'New Voxel Project',
    sceneData: {
      baseEffect: 'noise',
      uniforms: {
        u_color: '#3b82f6',
        u_speed: 1.0,
        u_distortion: 0.5,
        u_noise_scale: 2.5,
      },
    },
  },

  setUniform: (name, value) => set((state) => ({
    activeProject: {
      ...state.activeProject,
      sceneData: {
        ...state.activeProject.sceneData,
        uniforms: {
          ...state.activeProject.sceneData.uniforms,
          [name]: value,
        },
      },
    },
  })),

  setProject: (project) => set({ activeProject: project }),
}));
