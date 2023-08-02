import React, { Key } from 'react';
import { Dropdown } from '@nextui-org/react';
import { LayoutTextWindow, Book, Journal, Files } from 'react-bootstrap-icons';
import FormStorage from '@/utils/formStorage';

// Dropdown selector for the source of the citation (eg. website, book, journal, or misc)
function SourceDropdown() {
  const { form, updateCitationSource } = FormStorage();

  const setSelectedValue = (keys: 'all' | Set<Key>): any => {
    // Not sure if this is the best way to get string value from set, but it works
    updateCitationSource(Array.from(keys)[0] as string);
  };

  return (
    <Dropdown>
      <Dropdown.Button css={{ tt: 'capitalize' }}>
        {form.citationSource ? form.citationSource : 'Source'}
      </Dropdown.Button>
      <Dropdown.Menu
        aria-label='Sources'
        variant='light'
        selectionMode='single'
        onSelectionChange={setSelectedValue}
        // TO DO: Delete once other sources are available
        defaultValue={'website'}
        disabledKeys={['book', 'journal', 'misc']}
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
        <Dropdown.Item key='misc' textValue='Misc' icon={<Files className='h-6 w-auto mr-2' />}>
          Miscellaneous
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SourceDropdown;
