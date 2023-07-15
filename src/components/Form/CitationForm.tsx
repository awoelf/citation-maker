import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Citations } from '@/@types/form';
import FormStorage from '../../utils/formStorage';
import { CitationRaw } from '../../utils/citationStorage';

// Components
import { Grid, Button, Loading } from '@nextui-org/react';
import StyleDropdown from './StyleDropdown';
import SourceDropdown from './SourceDropdown';
import ClearButton from './ClearButton';
import SourceSwitcher from './Sources/SourceSwitcher';

function CitationForm() {
  const [mounted, setMounted] = useState(false);
  const { form, removeItem } = FormStorage();
  const { citationRaw, setCitationRaw } = CitationRaw();
  const router = useRouter();

  // Prevent hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);

  function handleSubmit() {
    try {
      // Add new citation to citation list
      // Push data only to existing array citation list might be undefined if cleared.
      const citations = [];
      if (citationRaw) citations.push(...citationRaw);
      citations.push(form);
      setCitationRaw(citations as Citations);

      // Clear form contents
      removeItem();

      // Route to citation dashboard
      router.push('/citations');
    } catch (error) {
      console.error('Error: ', error);
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
          <Button onPress={handleSubmit}>Create Citation</Button>
        </Grid>
      </Grid.Container>
    </div>
  ) : <Loading />;
}

export default CitationForm;
