import FormStorage from '@/utils/formStorage';

//Components
import TextInput from '../Input/TextInput';
import OtherContributors from '../Input/OtherContributors';

// Generic form for any source that isn't a book, website, or journal.
function Misc() {
  const { form, updateForm } = FormStorage();
  return (
    <>
      {/* || Title */}
      <TextInput formValue={form.title} inputName={'title'} updateForm={updateForm} />

      {/* || URL */}
      <TextInput formValue={form.url} inputName={'url'} label={'URL'} updateForm={updateForm} />

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
        tooltipMessage='Do not list titles (Dr., Sir, Saint, etc.) or degrees (PhD, MA, DDS, etc.) with names. Do include suffixes like "Jr." or "II."'
      />

      {/* || Source */}
      <TextInput formValue={form.source} inputName={'source'} updateForm={updateForm} />

      {/* || Other contributors */}
      <OtherContributors inputName='otherContributors' />

      {/* || Version */}
      <TextInput
        formValue={form.version}
        inputName={'version'}
        cols={6}
        fullWidth={false}
        type='number'
        updateForm={updateForm}
      />

      {/* || Number */}
      <TextInput
        formValue={form.number}
        inputName={'number'}
        cols={6}
        fullWidth={false}
        type='number'
        updateForm={updateForm}
      />

      {/* || Publisher */}
      <TextInput formValue={form.publisher} inputName={'publisher'} updateForm={updateForm} />

      {/* || Location */}
      <TextInput formValue={form.location} inputName={'location'} updateForm={updateForm} />

      {/* || Date published */}
      <TextInput
        formValue={form.dayPublished}
        inputName={'dayPublished'}
        label='Date Published'
        placeholder='Day'
        type='number'
        updateForm={updateForm}
        cols={4}
        mobileCols={12}
      />
      <TextInput
        formValue={form.monthPublished}
        inputName={'monthPublished'}
        label='&nbsp;'
        placeholder='Month'
        type='number'
        updateForm={updateForm}
        cols={4}
        mobileCols={12}
      />
      <TextInput
        formValue={form.yearPublished}
        inputName={'yearPublished'}
        label='&nbsp;'
        placeholder='Year'
        type='number'
        updateForm={updateForm}
        cols={4}
        mobileCols={12}
      />

      {/* || Date accessed */}
      <TextInput
        formValue={form.dayAccessed}
        inputName={'dayAccessed'}
        label='Date Accessed'
        placeholder='Day'
        type='number'
        updateForm={updateForm}
        cols={4}
        mobileCols={12}
      />
      <TextInput
        formValue={form.monthAccessed}
        inputName={'monthAccessed'}
        label='&nbsp;'
        placeholder='Month'
        type='number'
        updateForm={updateForm}
        cols={4}
        mobileCols={12}
      />
      <TextInput
        formValue={form.yearAccessed}
        inputName={'yearAccessed'}
        label='&nbsp;'
        placeholder='Year'
        type='number'
        updateForm={updateForm}
        cols={4}
        mobileCols={12}
      />
    </>
  );
}

export default Misc;
