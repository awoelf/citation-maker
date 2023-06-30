import { CitationRaw } from '@/utils/citationStorage';
import { form } from '@/@types/form';

// Components
import DeleteButton from './DeleteButton';
import CopyButton from './CopyButton';
import SourceDropdown from '../Form/StyleDropdown';
import MLAStyle from './MLAStyle';

function CitationList() {
  const { citationRaw } = CitationRaw();

  return (
    <div>
      {citationRaw ? (
        <div className='grid gap-2'>
          <div className='flex justify-between'>
            <div className='flex gap-2'>
              <CopyButton />
              <SourceDropdown />
            </div>
            <DeleteButton />
          </div>
          {citationRaw.map((item: form) => (
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
