import React, { useEffect, useState } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MoonStars, Sun, BlockquoteRight, House } from 'react-bootstrap-icons';
import { CitationRaw } from '../../utils/citationStorage';

// Components
import { Button, Badge } from '@nextui-org/react';

function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { citationRaw } = CitationRaw();
  const router = useRouter();

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
      <div className='grid grid-cols-3 border-b-2 py-3 mb-3'>
        <div />
        <Link href={'/'} className='text-4xl header flex-grow text-center text-inherit'>
          Citation Maker
        </Link>
        <div className='place-self-end flex align-center gap-2'>
          {router.route === '/citations' ? (
            <Link href={'/'}>
              <Button
                icon={
                  <House className='h-6 w-auto transition ease-in-out hover:-translate-y-1 hover:scale-110' />
                }
                auto
                light
              />
            </Link>
          ) : (
            <Link href={'/citations'}  className='transition ease-in-out hover:-translate-y-1 hover:scale-110'>
              <Badge color='primary' size='md' content={citationRaw?.length ? citationRaw?.length : ''}>
                <Button
                  icon={
                    <BlockquoteRight className='h-6 w-auto ' />
                  }
                  auto
                  light
                />
              </Badge>
            </Link>
          )}
          {theme === 'dark' ? (
            <Button
              onPress={() => setTheme('light')}
              icon={
                <MoonStars className='h-6 w-auto transition ease-in-out hover:-translate-y-1 hover:scale-110' />
              }
              auto
              light
            />
          ) : (
            <Button
              onPress={() => setTheme('dark')}
              icon={
                <Sun className='h-6 w-auto transition ease-in-out hover:-translate-y-1 hover:scale-110' />
              }
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
