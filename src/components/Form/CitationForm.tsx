import { useState } from 'react';
import { Grid, Input, Tooltip, Text, Button } from '@nextui-org/react';
import { formEvent, form } from '@/@types/form';
import { QuestionSquare, PlusSquare } from 'react-bootstrap-icons';

// Components
import StyleDropdown from './StyleDropdown';
import SourceDropdown from './SourceDropdown';

function CitationForm() {
  const [form, setForm] = useState<form>({
    author: '',
    title: '',
    source: '',
    otherContributors: [''],
    edition: '',
    number: '',
    publisher: '',
    location: '',
    datePublished: '',
    dateAccessed: ''
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
        {/* Title */}
        <Grid xs={12} direction='column'>
          <Text className='flex items-center'>
            Title
            <Tooltip
              color='invert'
              className='pl-2'
              trigger='hover'
              content={'The name of the book, website, or journal.'}
            >
              <QuestionSquare />
            </Tooltip>
          </Text>
          <Input
            name={'title'}
            value={form.title}
            onChange={updateForm}
            fullWidth={true}
            clearable
            bordered
          />
        </Grid>

        {/* Author */}
        <Grid xs={12} direction='column'>
          <Text>Author</Text>
          <Input
            name={'author'}
            value={form.author}
            onChange={updateForm}
            fullWidth={true}
            clearable
            bordered
          />
        </Grid>

        {/* Source */}
        <Grid xs={12} direction='column'>
          <Text className='flex items-center'>
            Source
            <Tooltip
              color='invert'
              className='pl-2'
              trigger='hover'
              content={'The source from which the website, book, or journal belongs to.'}
            >
              <QuestionSquare />
            </Tooltip>
          </Text>
          <Input
            name={'source'}
            value={form.source}
            onChange={updateForm}
            fullWidth={true}
            clearable
            bordered
          />
        </Grid>

        {/* Other contributors */}
        <Grid xs={12} direction='column'>
          <Text className='flex items-center'>
            Other Contributors
            <Tooltip
              color='invert'
              className='pl-2'
              trigger='hover'
              content={'Additional contributors to the source material.'}
            >
              <QuestionSquare />
            </Tooltip>
          </Text>
          <Input
            name={'source'}
            value={form.source}
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
          />
        </Grid>

        {/* Edition and volume number */}
        <Grid xs={6} direction='column'>
          <Text className='flex items-center'>
            Version
            <Tooltip
              color='invert'
              className='pl-2'
              trigger='hover'
              content={'The source from which the website, book, or journal belongs to.'}
            >
              <QuestionSquare />
            </Tooltip>
          </Text>
          <Input
            name={'edition'}
            value={form.edition}
            type='number'
            onChange={updateForm}
            fullWidth={true}
            clearable
            bordered
          />
        </Grid>
        <Grid xs={6} direction='column'>
          <Text className='flex items-center'>
            Volume Number
            <Tooltip
              color='invert'
              className='pl-2'
              trigger='hover'
              content={'The source from which the website, book, or journal belongs to.'}
            >
              <QuestionSquare />
            </Tooltip>
          </Text>
          <Input
            name={'number'}
            value={form.number}
            type='number'
            onChange={updateForm}
            fullWidth={true}
            clearable
            bordered
          />
        </Grid>

        {/* Publisher */}
        <Grid xs={12} direction='column'>
          <Text className='flex items-center'>
            Publisher
            <Tooltip
              color='invert'
              className='pl-2'
              trigger='hover'
              content={'Additional contributors to the source material.'}
            >
              <QuestionSquare />
            </Tooltip>
          </Text>
          <Input
            name={'publisher'}
            value={form.publisher}
            onChange={updateForm}
            clearable
            bordered
            fullWidth={true}
          />
        </Grid>

        {/* Date published  and date accessed*/}
        <Grid xs={6} direction='column'>
          <Text className='flex items-center'>
            Date Published
            <Tooltip
              color='invert'
              className='pl-2'
              trigger='hover'
              content={'Additional contributors to the source material.'}
            >
              <QuestionSquare />
            </Tooltip>
          </Text>
          <Input
            name={'datePublished'}
            value={form.datePublished}
            onChange={updateForm}
            type='date'
            clearable
            bordered
            fullWidth={true}
          />
        </Grid>
        <Grid xs={6} direction='column'>
          <Text className='flex items-center'>
            Date Accessed
            <Tooltip
              color='invert'
              className='pl-2'
              trigger='hover'
              content={'Additional contributors to the source material.'}
            >
              <QuestionSquare />
            </Tooltip>
          </Text>
          <Input
            name={'dateAccessed'}
            value={form.dateAccessed}
            onChange={updateForm}
            type='date'
            clearable
            bordered
            fullWidth={true}
          />
        </Grid>
      </Grid.Container>
    </div>
  );
}

export default CitationForm;
