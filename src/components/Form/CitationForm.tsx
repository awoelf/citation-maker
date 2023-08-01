import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import FormStorage from '../../utils/formStorage';
import { Citations, CitationStyle, CitationSource } from '../../utils/citationStorage';
import { form } from '@/@types/form';
import { nanoid } from 'nanoid';

// Components
import { Grid, Button, Loading, Tooltip } from '@nextui-org/react';
import StyleDropdown from '../Form/Input/StyleDropdown';
import SourceDropdown from './Input/SourceDropdown';
import ClearButton from './Input/ClearButton';
import SourceSwitcher from './Sources/SourceSwitcher';

function CitationForm() {
  const [mounted, setMounted] = useState(false);
  const { form, removeItem, createId } = FormStorage();
  const { citationStyle } = CitationStyle();
  const { citations, setCitations } = Citations();
  const router = useRouter();

  // Prevent hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);

  function handleSubmit() {
    if (citationStyle) {
      try {
        // TO DO: add this to formStorage.ts
        createId()

        // Add new citation to citation list
        // Push data only to existing array citation list might be undefined if cleared.
        const citationsList: Array<form> = [];
        if (citations) citationsList.push(...citations);
        citationsList.push(form);
        setCitations(citationsList);

        // Clear form contents
        removeItem();

        // Route to citation dashboard
        setMounted(false);
        router.push('/citations');
      } catch (error) {
        console.error('Error: ', error);
      }
    } else {
      // TO DO: Put something here
    }
  }

  return mounted ? (
    <div className='grid'>
      <div className='flex justify-between px-3'>
        <div className='flex gap-2'>
          <StyleDropdown />
          <SourceDropdown />
        </div>
        <ClearButton />
      </div>
      <Grid.Container gap={2}>
        <SourceSwitcher />
        {/* Submission button */}
        <Grid xs={12} className='place-content-center'>
          <Tooltip
            color='invert'
            content={'Citation style is required to create a citation.'}
            isDisabled={!!citationStyle}
          >
            <Button onPress={handleSubmit} disabled={!citationStyle}>
              Create Citation
            </Button>
          </Tooltip>
        </Grid>
      </Grid.Container>
    </div>
  ) : (
    <Loading type='points-opacity' />
  );
}

export default CitationForm;
