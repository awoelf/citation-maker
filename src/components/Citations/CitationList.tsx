import { CitationRaw } from '@/utils/CitationStorage';
import { form } from '@/@types/Form';

// Components
import { Text } from '@nextui-org/react';
import DeleteButton from './DeleteButton';
import CopyButton from './CopyButton';

function CitationList() {
  const { citationRaw } = CitationRaw();

  return (
    <div className='grid'>
      {citationRaw ? (
        <div>
          <div className='flex justify-between'>
            <CopyButton />
            <DeleteButton />
          </div>
          <div className=''>
            {citationRaw.map((item: form) => (
              <p>{item.firstName}</p>
            ))}
          </div>
        </div>
      ) : (
        <p className='text-center'>Return to the home page to start creating citations!</p>
      )}
    </div>
  );
}

export default CitationList;
