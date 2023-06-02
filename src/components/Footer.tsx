import Link from 'next/link';
import { Github } from 'react-bootstrap-icons';
import { Breadcrumb } from 'antd';

function Footer() {
  return (
    <div>
      <div className='flex justify-center'>
        <p>Created by</p>
        <Link className='flex' href={'https://github.com/awoelf'}>
          &nbsp;
          <p>awoelf</p>
          &nbsp;
          <Github className='h-6 w-auto icon' />
        </Link>
      </div>
      <Breadcrumb className='flex justify-center' items={[
        {
          title: <Link href={'https://qfreeaccountssjc1.az1.qualtrics.com/jfe/form/SV_4OwTY3UxhL6Ti1U'}>Submit Feedback</Link>
        },
        {
          title: <Link href={'https://owl.purdue.edu/owl/index.html'}>Purdue Online Writing Lab</Link>
        }
      ]}/>
    </div>
  );
}

export default Footer;
