import { useEffect, useState } from 'react';
import type { Theme } from '../types';

const STORAGE_KEY = 'portfolio-theme';
const getInitialTheme = (): Theme => {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'light' ? 'light' : 'dark';
  } catch {
    return 'dark';
  }
};

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#07111f' : '#f7f8fa');
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* Storage may be unavailable. */
    }
  }, [theme]);

  const toggleTheme = () => {
    const update = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const transitionDocument = document as Document & {
      startViewTransition?: (callback: () => void) => unknown;
    };

    if (!reducedMotion && transitionDocument.startViewTransition) {
      transitionDocument.startViewTransition(update);
    } else {
      update();
    }
  };

  return {
    theme,
    toggleTheme,
  };
}
