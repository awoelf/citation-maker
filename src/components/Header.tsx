import React, { useEffect, useState } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import { MoonStars, Sun, BlockquoteRight } from 'react-bootstrap-icons';

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
      <div className='grid grid-cols-3 border-b py-3 mb-3'>
        <div />
        <Link href={'/'} className='text-4xl header flex-grow text-center'>Citation Maker</Link>
        <div className='place-self-end flex align-center'>
          <Link href={'/citations'}>
            <Button
              onPress={() => setTheme('light')}
              icon={<BlockquoteRight className='h-6 w-auto' />}
              auto
              light
            />
          </Link>
          &nbsp;
          {theme === 'dark' ? (
            <Button
              onPress={() => setTheme('light')}
              icon={<MoonStars className='h-6 w-auto' />}
              auto
              light
            />
          ) : (
            <Button
              onPress={() => setTheme('dark')}
              icon={<Sun className='h-6 w-auto' />}
              auto
              light
            />
          )}
        </div>
      </div>
    </div>
  ) : null;
}

export default Header;
