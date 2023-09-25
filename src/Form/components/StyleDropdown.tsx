import React, { Key } from 'react';
import { CitationStyle } from '../../storage/citationStorage';

// Components
import { Dropdown } from '@nextui-org/react';

// Dropdown selector for citation styles like MLA and APA. More styles will be added upon user request.
function StyleDropdown() {
  const { citationStyle, setCitationStyle } = CitationStyle();

  const setSelectedValue = (keys: 'all' | Set<Key>): any => {
    setCitationStyle(Array.from(keys)[0] as string);
  };

  return (
    <Dropdown>
      {citationStyle !== '' ? (
        <Dropdown.Button css={{ tt: 'uppercase' }}>{citationStyle}</Dropdown.Button>
      ) : (
        <Dropdown.Button>Style</Dropdown.Button>
      )}
      {/* TO DO: Add more styles later */}
      <Dropdown.Menu
        aria-label='Styles'
        variant='light'
        disallowEmptySelection
        selectionMode='single'
        onSelectionChange={setSelectedValue}
        disabledKeys={['apa']}
        defaultValue={['mla']}
      >
        <Dropdown.Item key='mla'>MLA</Dropdown.Item>
        <Dropdown.Item key='apa'>APA</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default StyleDropdown;
