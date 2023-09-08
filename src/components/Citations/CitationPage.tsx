import { Citations } from '../../utils/citationStorage';
import { form } from '@/@types/form';
import { ThreeDots } from 'react-bootstrap-icons';

// Components
import DeleteButton from './Input/DeleteButton';
import CopyButton from './Input/CopyButton';
import StyleDropdown from '../Form/Input/StyleDropdown';
import { Card, Popover } from '@nextui-org/react';
import MLAStyle from './MLA/MLAStyle';

function CitationPage() {
  const { citations } = Citations();
  return (
    <div>
      {citations ? (
        <div className='grid gap-2'>
          <div className='flex justify-between'>
            <div className='flex gap-2 pb-2'>
              {/* TO DO: Buttons will be hidden until features are supported. */}
              {/* <CopyButton /> */}
              {/* <StyleDropdown /> */}
            </div>
            <DeleteButton />
          </div>
          {citations.map((item: form) => (
            <Card variant='flat' className='flex' key={item.id}>

              <MLAStyle data={item} />
            </Card>
          ))}
        </div>
      ) : (
        <p className='text-center'>Return to the home page to start creating citations!</p>
      )}
    </div>
  );
}

export default CitationPage;