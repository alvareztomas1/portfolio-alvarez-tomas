import React from 'react';

import type { Theme } from '@/types/theme.types';

export const useTheme = () => {
  const [theme, setTheme] = React.useState<Theme>('light');

  React.useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null;
    const preferred = stored || 'light';

    setTheme(preferred);

    document.body.className = `${preferred} bg-background`;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';

    setTheme(newTheme);

    localStorage.setItem('theme', newTheme);

    document.body.className = `${newTheme} bg-background`;
  };

  return {
    theme,
    toggleTheme,
  };
};
