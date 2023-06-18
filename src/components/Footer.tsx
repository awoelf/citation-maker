import Link from 'next/link';
import { Github, Dot } from 'react-bootstrap-icons';
import { Text } from '@nextui-org/react';

function Footer() {
  return (
    <div>
      <div className='flex justify-center'>
        <Text>Created by</Text>
        <Link className='flex' href={'https://github.com/awoelf'} target='_blank'>
          &nbsp;
          <Text>awoelf</Text>
          &nbsp;
          <Github className='h-6 w-auto' />
        </Link>
      </div>
      <div className='flex justify-center align-center'>
          <Link
            href={'https://qfreeaccountssjc1.az1.qualtrics.com/jfe/form/SV_4OwTY3UxhL6Ti1U'}
            target='_blank'
          >
            Submit Feedback
          </Link>
          <Dot className='h-6 w-auto' />
          <Link href={'https://owl.purdue.edu/owl/index.html'} target='_blank'>
            Purdue Online Writing Lab
          </Link>
        </div>
    </div>
  );
}

export default Footer;
