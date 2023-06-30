import { CitationRaw } from '@/utils/CitationStorage';
import { form } from '@/@types/Form';

// Components
import { Card, Text } from '@nextui-org/react';
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
          {citationRaw.map((item: form) => (
            <Card variant='flat'>
              <Card.Body>
                <Text>{item.firstName}</Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      ) : (
        <p className='text-center'>Return to the home page to start creating citations!</p>
      )}
    </div>
  );
}

export default CitationList;
