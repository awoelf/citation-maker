import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MoonStars, Sun, BlockquoteRight, House } from 'react-bootstrap-icons';
import { Citations } from '../storage/citationStorage';
import { useTheme } from 'next-themes';
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
        <div className='justify-between py-3 flex sm:grid sm:grid-cols-6 sm:justify-normal header'>
            <div className='col-span-1 hidden sm:grid' />
            <Link
                href={'/'}
                className='text-3xl pl-2 sm:pl-1 sm:text-4xl header text-inherit sm:text-center sm:col-span-4'
            >
                Citation Maker
            </Link>
            <div className='flex sm:col-span-1 sm:gap-1 sm:justify-end'>
                {router.route === '/citations' ? (
                    <Link href={'/'}>
                        <Button
                            className='home-button'
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
                        className='theme-button-moon'
                        onPress={() => setTheme('light')}
                        icon={
                            <MoonStars className='h-6 w-auto transition ease-in-out hover:-translate-y-1 hover:scale-110' />
                        }
                        auto
                        light
                    />
                ) : (
                    <Button
                        className='theme-button-sun'
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
    ) : null;
}

export default Header;
