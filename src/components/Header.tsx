import React, { useEffect, ServerContextJSONValue, useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';
import useLocalStorageState from 'use-local-storage-state';

import { MoonStars, Sun } from 'react-bootstrap-icons';
import { Switch } from 'antd';

function Header() {
  const themePreference: ServerContextJSONValue = useMediaQuery(
    {
      query: '(prefers-color-scheme: dark)',
    },
    undefined
  )
    ? 'dark'
    : 'light';

  const [theme, setTheme] = useLocalStorageState('theme', {
    defaultValue: themePreference,
  });

  const value = useMemo(
    () => (theme === undefined ? themePreference : theme),
    [theme, themePreference]
  );

  useEffect(() => {
    value === 'dark'
      ? document.body.classList.add('theme-dark')
      : document.body.classList.remove('theme-dark');
  }, [value]);

  return (
    <>
      <Switch
        checked={theme === 'dark'}
        onChange={(e) => {
          setTheme(e.valueOf() ? 'dark' : 'light');
        }}
        checkedChildren={<MoonStars className='h-6 w-6' />}
        unCheckedChildren={<Sun className='h-6 w-6' />}
      />
    </>
  );
}

export default Header;
