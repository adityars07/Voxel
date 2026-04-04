'use client';

import { useEffect, useRef, useCallback } from 'react';
import { useEditorStore } from '@/store/useEditorStore';
import { projectApi } from '@/lib/api';

export const useAutoSave = () => {
  const activeProject = useEditorStore((state) => state.activeProject);
  const lastSavedHash = useRef('');
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const save = useCallback(async (projectId: string, sceneData: any) => {
    try {
      const hash = JSON.stringify(sceneData);
      if (hash === lastSavedHash.current) return;

      console.log('Auto-saving scene data...');
      await projectApi.updateScene(projectId, sceneData);
      lastSavedHash.current = hash;
    } catch (err) {
      console.error('Auto-save failed:', err);
    }
  }, []);

  // Subscribe to store changes with manual debounce (no lodash dependency)
  useEffect(() => {
    const unsubscribe = useEditorStore.subscribe((state) => {
      const { id, sceneData } = state.activeProject;
      if (!id || id === 'placeholder-1') return;

      // Clear previous timer
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      // Debounce: save 1.5s after last change
      timeoutRef.current = setTimeout(() => {
        save(id, sceneData);
      }, 1500);
    });

    return () => {
      unsubscribe();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [save]);

  return null;
};
