import React, { useMemo, useState } from 'react';
import { Dropdown } from '@nextui-org/react';

function SourceDropdown() {
  const [selected, setSelected] = useState('');

  const selectedValue = useMemo(
    () => Array.from(selected).join(', ').replaceAll('_', ' '),
    [selected]
  );

  return (
    <div>
      <Dropdown>
        <Dropdown.Button light css={{ tt: 'capitalize' }}>
          {selected ? selected : 'Source'}
        </Dropdown.Button>
        <Dropdown.Menu
          aria-label='Sources'
          variant='light'
          disallowEmptySelection
          selectionMode='single'
          selectedKeys={selected}
          onSelectionChange={() => setSelected}
        >
          <Dropdown.Item key='website'>Website</Dropdown.Item>
          <Dropdown.Item key='book'>Book</Dropdown.Item>
          <Dropdown.Item key='journal'>Journal</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default SourceDropdown;
