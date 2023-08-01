import React, { Key } from 'react';
import { CitationStyle } from '../../../utils/citationStorage';

// Components
import { Dropdown } from '@nextui-org/react';

// Dropdown selector for citation styles like MLA and APA. More styles will be added upon user request.
function StyleDropdown() {
  const { citationStyle, setCitationStyle } = CitationStyle();

  const setSelectedValue = (keys: 'all' | Set<Key>): any => {
    // Not sure if this is the best way to get string value from set, but it works.
    setCitationStyle(Array.from(keys)[0] as string);
  };

  return (
    <Dropdown>
      {citationStyle !== '' ? (
        <Dropdown.Button css={{ tt: 'uppercase' }}>{citationStyle}</Dropdown.Button>
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

export default StyleDropdown;
