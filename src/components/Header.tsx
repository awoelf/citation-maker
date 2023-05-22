import React, { useEffect, useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';

import useLocalStorageState from 'use-local-storage-state';

import { MoonStars, Sun } from 'react-bootstrap-icons';
import { Switch } from 'antd';

function Header() {
  const [isDark, setIsDark] = useLocalStorageState('isDark', {
    defaultValue: true,
  });

  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined
  );
  
  const value = useMemo(
    () => (isDark === undefined ? !!systemPrefersDark : isDark),
    [isDark, systemPrefersDark]
  );

  useEffect(() => {
    if (value) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [value]);

  const onChange = (e: boolean) => {
    setIsDark(e);
  };

  return (
    <>
      <Switch
        checked={isDark}
        onChange={onChange}
        checkedChildren={<MoonStars className='h-6 w-6' />}
        unCheckedChildren={<Sun className='h-6 w-6' />}
      />
    </>
  );
}

export default Header;
