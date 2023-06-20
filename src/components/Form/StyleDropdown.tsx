import React, { useMemo, useState, Key } from 'react';
import { Dropdown } from '@nextui-org/react';

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
    <div>
      <Dropdown>
        {selected ? (
          <Dropdown.Button light css={{ tt: 'uppercase' }}>
            {selected}
          </Dropdown.Button>
        ) : (
          <Dropdown.Button light>Style</Dropdown.Button>
        )}

        <Dropdown.Menu
          aria-label='Styles'
          variant='light'
          disallowEmptySelection
          selectionMode='single'
          selectedKeys={selected}
          onSelectionChange={setSelectedValue}
        >
          <Dropdown.Item key='mla'>MLA</Dropdown.Item>
          <Dropdown.Item key='apa'>APA</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default SourceDropdown;
