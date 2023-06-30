import React, { Key } from 'react';
import { Dropdown } from '@nextui-org/react';
import { CitationFormatted } from '@/utils/CitationStorage';

function SourceDropdown() {
  const { citationFormat, setCitationFormat } = CitationFormatted();

  const setSelectedValue = (keys: 'all' | Set<Key>): any => {
    // Not sure if this is the best way to get string value from set, but it works
    setCitationFormat(Array.from(keys)[0] as string);
  };

  return (
    <Dropdown>
      {citationFormat !== '' ? (
        <Dropdown.Button css={{ tt: 'uppercase' }}>{citationFormat}</Dropdown.Button>
      ) : (
        <Dropdown.Button>Style</Dropdown.Button>
      )}

      <Dropdown.Menu
        aria-label='Styles'
        variant='light'
        disallowEmptySelection
        selectionMode='single'
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
