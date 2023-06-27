import { useState, useEffect } from 'react';
import { Grid, Button } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { formEvent } from '@/@types/Form';
import { Citations } from '@/@types/Citation';
import FormStorage from '@/utils/FormStorage';
import { CitationRaw } from '@/utils/CitationStorage';

// Components
import StyleDropdown from './StyleDropdown';
import SourceDropdown from './SourceDropdown';
import TextInput from './Input/TextInput';
import OtherContributors from './Input/OtherContributors';
import ClearButton from './ClearButton';

function CitationForm() {
  const [mounted, setMounted] = useState(false);
  const { form, setForm, removeItem } = FormStorage();
  const { citationRaw, setCitationRaw } = CitationRaw();
  const router = useRouter();

  // Prevent hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);

  function updateForm(e: formEvent) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit() {
    try {
      // Add new citation to citation list
      // Push data only to existing array citation list might be undefined if cleared.
      const citations = [];
      if (citationRaw) citations.push(citationRaw);
      citations.push(form)
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
        {/* || Title */}
        <TextInput formValue={form.title} inputName={'title'} updateForm={updateForm} />

        {/* || Author first name, last name, middle initial, and suffix */}
        <TextInput
          formValue={form.firstName}
          inputName={'firstName'}
          updateForm={updateForm}
          cols={4}
        />
        <TextInput
          formValue={form.lastName}
          inputName={'lastName'}
          updateForm={updateForm}
          cols={4}
        />
        <TextInput
          formValue={form.middleInitial}
          inputName={'middleInitial'}
          updateForm={updateForm}
          cols={2}
        />
        <TextInput formValue={form.suffix} inputName={'suffix'} updateForm={updateForm} cols={2} />

        {/* || Source */}
        <TextInput formValue={form.source} inputName={'source'} updateForm={updateForm} />

        {/* || Other contributors */}
        <OtherContributors formValue={form.otherContributors} inputName='otherContributors' />

        {/* || Version */}
        <TextInput
          formValue={form.version}
          inputName={'version'}
          cols={6}
          fullWidth={false}
          type='number'
          updateForm={updateForm}
        />

        {/* || Volume */}
        <TextInput
          formValue={form.volume}
          inputName={'volume'}
          cols={6}
          fullWidth={false}
          type='number'
          updateForm={updateForm}
        />

        {/* || Publisher */}
        <TextInput formValue={form.publisher} inputName={'publisher'} updateForm={updateForm} />

        {/* || Date published */}
        <TextInput
          formValue={form.datePublished}
          inputName={'datePublished'}
          cols={6}
          fullWidth={false}
          type='date'
          updateForm={updateForm}
        />

        {/* || Date accessed */}
        <TextInput
          formValue={form.dateAccessed}
          inputName={'dateAccessed'}
          cols={6}
          fullWidth={false}
          type='date'
          updateForm={updateForm}
        />

        {/* Submission button */}
        <Grid xs={12} className='place-content-center'>
          <Button onPress={handleSubmit}>Create Citation</Button>
        </Grid>
      </Grid.Container>
    </div>
  ) : null;
}

export default CitationForm;
