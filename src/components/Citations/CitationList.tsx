import CitationStorage from '@/utils/CitationStorage';

// Components
import { Text } from '@nextui-org/react';
import DeleteButton from './DeleteButton';
import CopyButton from './CopyButton';

function CitationList() {
  const { citationList } = CitationStorage();

  return (
    <div className='grid'>
      <div className='flex justify-between'>
        <CopyButton />
        <DeleteButton />
      </div>

      {citationList ? (
        <div className=''>
          {citationList.map((item) => (
            <p>{item.firstName}</p>
          ))}
        </div>
      ) : (
        <p>Return to the home page to start creating citations!</p>
      )}
    </div>
  );
}

export default CitationList;
