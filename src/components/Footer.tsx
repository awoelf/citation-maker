import Link from 'next/link';
import { Github, Dot } from 'react-bootstrap-icons';
import { Text } from '@nextui-org/react';

function Footer() {
    return (
        <div className='flex flex-col pt-3 footer' data-test='footer'>
            <div className='flex justify-center'>
                <Text>Created by</Text>
                <Link
                    className='flex text-inherit gap-2'
                    href={'https://github.com/awoelf'}
                    target='_blank'
                >
                    <Text>&nbsp;awoelf</Text>
                    <Github className='h-6 w-auto' />
                </Link>
            </div>
            <div className='flex justify-center align-center'>
                <Link
                    href={'https://github.com/awoelf/citation-maker/issues'}
                    target='_blank'
                    className='text-inherit text-center'
                >
                    Submit an issue
                </Link>
                <Dot className='h-6 w-auto' />
                <Link
                    href={'https://ko-fi.com/awoelf'}
                    target='_blank'
                    className='text-inherit text-center'
                >
                    Support me on Ko-fi
                </Link>
            </div>
        </div>
    );
}

export default Footer;
