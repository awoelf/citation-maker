import React, { Key } from 'react';
import { CitationStyle } from '../../storage/citationStorage';
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
                <Dropdown.Button css={{ tt: 'uppercase' }} data-test='citation-style-dropdown'>
                    {citationStyle}
                </Dropdown.Button>
            ) : (
                <Dropdown.Button data-test='citation-style-dropdown'>Style</Dropdown.Button>
            )}
            <Dropdown.Menu
                aria-label='Styles'
                variant='light'
                disallowEmptySelection
                selectionMode='single'
                onSelectionChange={setSelectedValue}
                defaultValue={['mla']}
            >
                <Dropdown.Item key='mla'>MLA</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default StyleDropdown;
