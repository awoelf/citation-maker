import FormStorage from '../../storage/formStorage';
import TextInput from './TextInput';
import OtherContributors from './OtherContributors';
import DropdownInput from './DropdownInput';
import UseTodayDate from './UseTodayDate';
import TooltipInput from './TooltipInput';

// Displays appropriate form contents based on selected source (eg. website, book, journal, misc)
function SourceHandler() {
  const { form, updateForm, updateFormDate } = FormStorage();
  const citationSource = form.citationSource;

  const sourceLabels: { [key: string]: any } = {
    website: {
      title: 'Article Title',
      source: 'Website Name',
      sourceTooltipMessage: '',
      locationTooltipMessage: '',
      number: '',
      version: '',
    },
    journal: {
      title: 'Journal Article Title',
      source: 'Source',
      sourceTooltipMessage:
        'The larger whole in which the source is located, such as a collection, database, or book title if citing a chapter.',
      locationTooltipMessage: '',
      number: 'Volume',
      version: '',
    },
    book: {
      title: 'Book Title',
      source: 'Source',
      sourceTooltipMessage:
        'The larger whole in which the source is located, such as a collection, database, or book title if citing a chapter.',
      locationTooltipMessage:
        'The location of publication should only be used if the book was published before 1900.',
      number: 'Number',
      version: 'Edition',
    },
    misc: {
      title: 'Title',
      source: 'Source',
      sourceTooltipMessage:
        'The larger whole in which the source is located, such as a collection, database, or book title if citing a chapter.',

      locationTooltipMessage: '',
      number: 'Number',
      version: 'Version',
    },
  };

  return (
    <>
      {/* || Title */}
      <TextInput
        formValue={form.title}
        inputName={'title'}
        label={sourceLabels[citationSource].title}
        updateForm={updateForm}
      />

      {/* || URL */}
      {citationSource === 'book' ? null : (
        <TextInput formValue={form.url} inputName={'url'} label={'URL'} updateForm={updateForm} />
      )}

      {/* || DOI */}
      {citationSource === 'journal' ? (
        <TextInput formValue={form.doi} inputName={'doi'} label={'DOI'} updateForm={updateForm} />
      ) : null}

      {/* || Source */}
      <TextInput
        formValue={form.source}
        inputName={'source'}
        label={sourceLabels[citationSource].source}
        updateForm={updateForm}
        contentLeft={
          sourceLabels[citationSource].sourceTooltipMessage ? (
            <TooltipInput tooltipMessage={sourceLabels[citationSource].sourceTooltipMessage} />
          ) : null
        }
      />

      {/* || Author first name, last name, middle initial, and suffix */}
      <TextInput
        formValue={form.firstName}
        inputName={'firstName'}
        label={'Author First Name'}
        updateForm={updateForm}
        cols={4}
        mobileCols={6}
      />
      <TextInput
        formValue={form.middleInitial}
        inputName={'middleInitial'}
        updateForm={updateForm}
        cols={2}
        mobileCols={6}
      />
      <TextInput
        formValue={form.lastName}
        inputName={'lastName'}
        updateForm={updateForm}
        cols={4}
        mobileCols={6}
      />
      <TextInput
        formValue={form.suffix}
        inputName={'suffix'}
        updateForm={updateForm}
        cols={2}
        mobileCols={6}
        contentLeft={
          <TooltipInput tooltipMessage='Do not list titles (Dr., Sir, Saint, etc.) or degrees (PhD, MA, DDS, etc.) with names. Do include suffixes like "Jr." or "II."' />
        }
      />

      {/* || Other contributors */}
      <OtherContributors inputName='otherContributors' />

      {citationSource === 'book' || citationSource === 'journal' ? (
        <>
          {/* || Page start */}
          <TextInput
            formValue={form.pageStart}
            inputName={'pageStart'}
            cols={6}
            fullWidth={false}
            updateForm={updateForm}
          />

          {/* || Page end */}
          <TextInput
            formValue={form.pageEnd}
            inputName={'pageEnd'}
            cols={6}
            fullWidth={false}
            updateForm={updateForm}
          />
        </>
      ) : null}

      {/* || Version */}
      {citationSource === 'book' || citationSource === 'misc' ? (
        <TextInput
          formValue={form.version}
          inputName={sourceLabels[citationSource].version}
          cols={6}
          fullWidth={false}
          type='number'
          updateForm={updateForm}
        />
      ) : null}

      {/* || Number */}
      {citationSource === 'website' ? null : (
        <TextInput
          formValue={form.number}
          inputName={sourceLabels[citationSource].number}
          cols={6}
          fullWidth={false}
          type='number'
          updateForm={updateForm}
        />
      )}

      {/* || Issue */}
      {citationSource === 'journal' ? (
        <TextInput
          formValue={form.issue}
          inputName={'issue'}
          cols={6}
          fullWidth={false}
          type='number'
          updateForm={updateForm}
        />
      ) : null}

      {/* || Publisher */}
      <TextInput formValue={form.publisher} inputName={'publisher'} updateForm={updateForm} />

      {/* || Location */}
      {citationSource === 'website' ? null : (
        <TextInput
          formValue={form.location}
          inputName={'location'}
          updateForm={updateForm}
          contentLeft={
            sourceLabels[citationSource].locationTooltipMessage ? (
              <TooltipInput tooltipMessage={sourceLabels[citationSource].locationTooltipMessage} />
            ) : null
          }
        />
      )}

      {/* || Date published */}
      <TextInput
        formValue={form.dayPublished}
        inputName={'dayPublished'}
        label='Date Published'
        placeholder='Day'
        updateForm={updateForm}
        cols={4}
      />
      <DropdownInput
        formValue={form.monthPublished}
        inputName={'monthPublished'}
        label='&nbsp;'
        placeholder='Month'
        updateForm={updateFormDate}
        cols={4}
      />
      <TextInput
        formValue={form.yearPublished}
        inputName={'yearPublished'}
        label='&nbsp;'
        placeholder='Year'
        updateForm={updateForm}
        cols={4}
      />

      {/* || Date accessed */}
      {citationSource === 'book' ? null : (
        <>
          <TextInput
            formValue={form.dayAccessed}
            inputName={'dayAccessed'}
            label='Date Accessed'
            placeholder='Day'
            updateForm={updateForm}
            cols={4}
            contentLeft={<UseTodayDate />}
          />
          <DropdownInput
            formValue={form.monthAccessed}
            inputName={'monthAccessed'}
            label='&nbsp;'
            placeholder='Month'
            updateForm={updateFormDate}
            cols={4}
          />
          <TextInput
            formValue={form.yearAccessed}
            inputName={'yearAccessed'}
            label='&nbsp;'
            placeholder='Year'
            updateForm={updateForm}
            cols={4}
          />
        </>
      )}
    </>
  );
}

export default SourceHandler;