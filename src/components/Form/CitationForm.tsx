import { useState } from 'react';
import { Grid, Input, Tooltip, Button } from '@nextui-org/react';
import { formEvent, form } from '@/@types/form';
import { QuestionSquare, PlusSquare } from 'react-bootstrap-icons';

// Components
import StyleDropdown from './StyleDropdown';
import SourceDropdown from './SourceDropdown';
import TextInput from './Input/TextInput';

// Issues: Hydration errors because client and server ids of components do not match.
// Does not affect page functionality.
// Will continue to work on document and see if issue continues when built for GitHub Pages.

function CitationForm() {
  const [form, setForm] = useState<form>({
    author: '',
    title: '',
    source: '',
    otherContributors: [''],
    version: '',
    volume: '',
    publisher: '',
    location: '',
    datePublished: '',
    dateAccessed: '',
  });

  function updateForm(e: formEvent) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  return (
    <div className='grid'>
      <div className='flex justify-between'>
        <StyleDropdown />
        <SourceDropdown />
      </div>
      <Grid.Container gap={2}>
        {/* || Title */}
        <TextInput formValue={form.title} inputName={'title'} updateForm={updateForm} />

        {/* || Author */}
        <TextInput formValue={form.author} inputName={'author'} updateForm={updateForm} />

        {/* || Source */}
        <TextInput formValue={form.source} inputName={'source'} updateForm={updateForm} />

        {/* || Other contributors */}
        <Grid xs={12} direction='column' aria-label='other-contributors'>
          <Input
            label='Other Contributors'
            name={'otherContributors'}
            value={form.otherContributors}
            onChange={updateForm}
            clearable
            bordered
            fullWidth={true}
            // TO DO: Create list that can be modified by user
            contentClickable={true}
            contentRightStyling={false}
            contentRight={
              <Button light auto>
                <PlusSquare className='h-4 w-auto' />
              </Button>
            }
            contentLeftStyling={false}
            contentLeft={
              <Tooltip
                color='invert'
                className='pl-4'
                trigger='hover'
                content={'The name of the book, website, or journal.'}
              >
                <QuestionSquare />
              </Tooltip>
            }
          />
        </Grid>

        {/* || Version */}
        <TextInput formValue={form.version} inputName={'version'} cols={6} fullWidth={false} type='number' updateForm={updateForm} />

        {/* || Volume */}
        <TextInput formValue={form.volume} inputName={'volume'} cols={6} fullWidth={false} type='number' updateForm={updateForm} />

        {/* || Publisher */}
        <TextInput formValue={form.publisher} inputName={'publisher'} updateForm={updateForm} />


        {/* || Date published */}
        <TextInput formValue={form.datePublished} inputName={'datePublished'} cols={6} fullWidth={false} type='date' updateForm={updateForm} />


        {/* || Date accessed */}
        <Grid xs={6} direction='column' aria-label='date-accessed'>
          <Input
            label='Date Accessed'
            name={'dateAccessed'}
            value={form.dateAccessed}
            onChange={updateForm}
            type='date'
            clearable
            bordered
            fullWidth={true}
            contentLeftStyling={false}
            contentLeft={
              <Tooltip
                color='invert'
                className='pl-4'
                trigger='hover'
                content={'The name of the book, website, or journal.'}
              >
                <QuestionSquare />
              </Tooltip>
            }
          />
        </Grid>
        <Grid xs={12} className='place-content-center'>
          <Button>Create Citation</Button>
        </Grid>
      </Grid.Container>
    </div>
  );
}

export default CitationForm;
