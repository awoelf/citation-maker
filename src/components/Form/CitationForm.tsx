import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import FormStorage from '../../utils/formStorage';
import { Citations, CitationStyle } from '../../utils/citationStorage';

// Components
import { Grid, Button, Loading, Tooltip } from '@nextui-org/react';
import StyleDropdown from '../Form/Input/StyleDropdown';
import SourceDropdown from './Input/SourceDropdown';
import ClearButton from './Input/ClearButton';
import SourceSwitcher from './Sources/SourceSwitcher';

function CitationForm() {
  const [mounted, setMounted] = useState(false);
  const { form, removeItem } = FormStorage();
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
        // Add new citation to citation list
        // Push data only to existing array citation list might be undefined if cleared.
        // const citations = [];
        // if (citations) citations.push(...citations);
        // citations.push(form);
        // setCitations(citations as Citations);

        // if (!citations) {
        //   setCitations([form]);
        // } else {
          
        // }

        // Clear form contents
        removeItem();

        // Route to citation dashboard
        router.push('/citations');
      } catch (error) {
        console.error('Error: ', error);
      }
    } else {
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
    <Loading />
  );
}

export default CitationForm;
