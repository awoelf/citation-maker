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
    <Dropdown>
      {selected ? (
        <Dropdown.Button css={{ tt: 'uppercase' }}>{selected}</Dropdown.Button>
      ) : (
        <Dropdown.Button >Style</Dropdown.Button>
      )}

      <Dropdown.Menu
        aria-label='Styles'
        variant='light'
        disallowEmptySelection
        selectionMode='single'
        selectedKeys={selected}
        onSelectionChange={setSelectedValue}
        disabledKeys={['apa']}
      >
        <Dropdown.Item key='mla'>MLA</Dropdown.Item>
        <Dropdown.Item key='apa'>APA - Coming soon</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SourceDropdown;
