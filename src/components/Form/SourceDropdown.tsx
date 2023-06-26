import React, { useMemo, useState, Key } from 'react';
import { Dropdown } from '@nextui-org/react';
import { LayoutTextWindow, Book, Journal } from 'react-bootstrap-icons';

function SourceDropdown() {
  const [selected, setSelected] = useState('');

  const setSelectedValue = (keys: 'all' | Set<Key>): any => {
    const value = keys as string;
    setSelected(value);
  };

  const selectedValue = useMemo(
    () => Array.from(selected).join(', ').replaceAll('_', ' '),
    [selected]
  );

  return (
    <Dropdown>
      <Dropdown.Button css={{ tt: 'capitalize'}}>
        {selected ? selected : 'Source'}
      </Dropdown.Button>
      <Dropdown.Menu
        aria-label='Sources'
        variant='light'
        disallowEmptySelection
        selectionMode='single'
        selectedKeys={selected}
        onSelectionChange={setSelectedValue}
      >
        <Dropdown.Item key='website'>
          <div className='flex items-center'>
            <LayoutTextWindow className='h-6 w-auto mr-2' />
            Website
          </div>
        </Dropdown.Item>
        <Dropdown.Item key='book'>
          <div className='flex items-center'>
            <Book className='h-6 w-auto mr-2' />
            Book
          </div>
        </Dropdown.Item>
        <Dropdown.Item key='journal'>
          <div className='flex items-center'>
            <Journal className='h-6 w-auto mr-2' />
            Journal
          </div>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SourceDropdown;
