import React, { useEffect, useState } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import { useTheme } from 'next-themes';
import Link from 'next/link';

import { MoonStars, Sun, BlockquoteRight } from 'react-bootstrap-icons';
import { Button } from 'antd';

function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Save user theme preference in local storage
  const [themeState, setThemeState] = useLocalStorageState('theme', {
    defaultValue: `${theme}`,
  });

  // Prevent hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (typeof theme === 'string') setThemeState(theme);
  }, [theme]);

  return mounted ? (
    <div>
      <div>
        <p className='text-4xl header'>Citation Maker</p>
        <Link href={'/citations'}><Button
            onClick={() => setTheme('light')}
            icon={<BlockquoteRight className='h-6 w-auto icon' />}
            type='text'
            shape='circle'
          /></Link>
        {theme === 'dark' ? (
          <Button
            onClick={() => setTheme('light')}
            icon={<MoonStars className='h-6 w-auto icon' />}
            type='text'
            shape='circle'
          />
        ) : (
          <Button
            onClick={() => setTheme('dark')}
            icon={<Sun className='h-6 w-auto icon' />}
            type='text'
            shape='circle'
          />
        )}
      </div>
      <div>
        <p>A simple citation generator.</p>
      </div>
    </div>
  ) : null;
}

export default Header;
