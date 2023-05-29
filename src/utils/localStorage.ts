import useLocalStorageState from 'use-local-storage-state';

export const themeStorage = (themePreference: string) => {
  const [theme, setTheme] = useLocalStorageState('theme', {
    defaultValue: themePreference,
  });

  return {theme, setTheme}
}
