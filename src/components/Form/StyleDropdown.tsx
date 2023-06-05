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
          {selected ? selected : 'Style'}
        </Dropdown.Button>
        <Dropdown.Menu
          aria-label='Styles'
          variant='light'
          disallowEmptySelection
          selectionMode='single'
          selectedKeys={selected}
          onSelectionChange={() => setSelected}
        >
          <Dropdown.Item key='mla'>MLA</Dropdown.Item>
          <Dropdown.Item key='apa'>APA</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default SourceDropdown;
