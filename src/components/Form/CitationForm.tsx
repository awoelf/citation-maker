import { useState, useEffect } from 'react';
import { Grid, Button } from '@nextui-org/react';
import { formEvent, form } from '@/@types/form';
import FormStorage from '@/utils/FormStorage';

// Components
import StyleDropdown from './StyleDropdown';
import SourceDropdown from './SourceDropdown';
import TextInput from './Input/TextInput';
import OtherContributors from './Input/OtherContributors';
import ClearButton from './ClearButton';

function CitationForm() {
  const [mounted, setMounted] = useState(false);
  const { form, setForm } = FormStorage();

  // Prevent hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);

  function updateForm(e: formEvent) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit() {}

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

        {/* || Author */}
        <TextInput formValue={form.author} inputName={'author'} updateForm={updateForm} />

        {/* || Source */}
        <TextInput formValue={form.source} inputName={'source'} updateForm={updateForm} />

        {/* || Other contributors */}
        <OtherContributors
          formValue={form.otherContributors}
          inputName='otherContributors'
        />

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

        <Grid xs={12} className='place-content-center'>
          <Button>Create Citation</Button>
        </Grid>
      </Grid.Container>
    </div>
  ) : null;
}

export default CitationForm;
