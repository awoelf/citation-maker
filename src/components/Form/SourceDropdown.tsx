import React, { Key } from 'react';
import { Dropdown } from '@nextui-org/react';
import { LayoutTextWindow, Book, Journal } from 'react-bootstrap-icons';
import { CitationSource } from '../../utils/citationStorage';

function SourceDropdown() {
  const { citationSource, setCitationSource } = CitationSource();

  const setSelectedValue = (keys: 'all' | Set<Key>): any => {
    // Not sure if this is the best way to get string value from set, but it works
    setCitationSource(Array.from(keys)[0] as string);
  };

  return (
    <Dropdown>
      <Dropdown.Button css={{ tt: 'capitalize' }}>{citationSource ? citationSource : 'Source'}</Dropdown.Button>
      <Dropdown.Menu
        aria-label='Sources'
        variant='light'
        selectionMode='single'
        onSelectionChange={setSelectedValue}
      >
        <Dropdown.Item
          key='website'
          textValue='Website'
          icon={<LayoutTextWindow className='h-6 w-auto mr-2' />}
        >
          Website
        </Dropdown.Item>
        <Dropdown.Item key='book' textValue='Book' icon={<Book className='h-6 w-auto mr-2' />}>
          Book
        </Dropdown.Item>
        <Dropdown.Item
          key='journal'
          textValue='Journal'
          icon={<Journal className='h-6 w-auto mr-2' />}
        >
          Journal
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SourceDropdown;
