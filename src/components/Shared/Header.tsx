import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MoonStars, Sun, BlockquoteRight, House } from 'react-bootstrap-icons';
import { CitationRaw } from '../../utils/citationStorage';
import { useTheme } from 'next-themes';

// Components
import { Button, Badge } from '@nextui-org/react';

function Header() {
  const [mounted, setMounted] = useState(false);
  const { citationRaw } = CitationRaw();
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  // const handleTheme = useCallback((newTheme: string) => {
  // }, []);

  // useEffect(() => {
  //   if (typeof theme === 'string') setThemeState(theme);
  // }, [theme]);

  // Prevent hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? (
    <div>
      <div className='md:grid md:grid-cols-6 max-sm:flex border-b-2 py-3 mb-3'>
        <div className='col-span-1 max-sm:hidden'/>
        <Link href={'/'} className='text-4xl header text-inherit text-center col-span-4'>
          Citation Maker
        </Link>
        <div className='justify-end flex align-center gap-1 col-span-1'>
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
            <Link
              href={'/citations'}
              className='transition ease-in-out hover:-translate-y-1 hover:scale-110'
            >
              <Badge
                color='primary'
                size='md'
                content={citationRaw?.length ? citationRaw?.length : ''}
              >
                <Button icon={<BlockquoteRight className='h-6 w-auto ' />} auto light />
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
