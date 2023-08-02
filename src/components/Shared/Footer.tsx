import Link from 'next/link';
import { Github, Dot } from 'react-bootstrap-icons';
import { Text } from '@nextui-org/react';

function Footer() {
  return (
    <div>
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
          href={'https://qfreeaccountssjc1.az1.qualtrics.com/jfe/form/SV_4OwTY3UxhL6Ti1U'}
          target='_blank'
          className='text-inherit'
        >
          Submit Feedback
        </Link>
        <Dot className='h-6 w-auto' />
        <Link
          href={'https://owl.purdue.edu/owl/index.html'}
          target='_blank'
          className='text-inherit'
        >
          Purdue Online Writing Lab
        </Link>
        <Dot className='h-6 w-auto' />
        <Link
          href={'https://ko-fi.com/awoelf'}
          target='_blank'
          className='text-inherit'
        >
          Support me on Ko-fi
        </Link>
      </div>
    </div>
  );
}

export default Footer;
