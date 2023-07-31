import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MoonStars, Sun, BlockquoteRight, House } from 'react-bootstrap-icons';
import { Citations } from '../../utils/citationStorage';
import { useTheme } from 'next-themes';

// Components
import { Button, Badge } from '@nextui-org/react';

function Header() {
  const [mounted, setMounted] = useState(false);
  const { citations } = Citations();
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  // Prevent hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? (
    <div>
      <div className='flex justify-between py-3 sm:grid sm:grid-cols-6 sm:flex-none sm:justify-normal'>
        <div className='col-span-1 hidden sm:grid'/>
        <Link href={'/'} className='text-4xl header text-inherit sm:text-center sm:col-span-4'>
          Citation Maker
        </Link>
        <div className='flex col-span-1 sm:gap-1 sm:justify-end '>
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
                content={citations?.length ? citations?.length : <></>}
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
