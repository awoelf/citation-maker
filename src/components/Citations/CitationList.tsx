import { Citations } from '../../utils/citationStorage';
import { form } from '@/@types/form';

// Components
import DeleteButton from './Input/DeleteButton';
import CopyButton from './Input/CopyButton';
import SourceDropdown from '../Form/Input/StyleDropdown';
import MLAStyle from './MLA/MLAStyle';

function CitationList() {
  const { citations } = Citations();

  return (
    <div>
      {citations ? (
        <div className='grid gap-2'>
          <div className='flex justify-between'>
            <div className='flex gap-2'>
              <CopyButton />
              <SourceDropdown />
            </div>
            <DeleteButton />
          </div>
          {citations.map((item: form) => (
            <MLAStyle form={item} key={item.lastName} />
          ))}
        </div>
      ) : (
        <p className='text-center'>Return to the home page to start creating citations!</p>
      )}
    </div>
  );
}

export default CitationList;
