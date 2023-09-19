import FormStorage from '@/utils/formStorage';

//Components
import TextInput from '../Input/TextInput';
import OtherContributors from '../Input/OtherContributors';
import DropdownInput from '../Input/DropdownInput';
import UseTodayDate from '../Input/UseTodayDate';
import TooltipInput from '../Input/TooltipInput';

// Generic form for any source that isn't a book, website, or journal.
function Misc() {
  const { form, updateForm, updateFormDate } = FormStorage();
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
        contentLeft={
          <TooltipInput tooltipMessage='Do not list titles (Dr., Sir, Saint, etc.) or degrees (PhD, MA, DDS, etc.) with names. Do include suffixes like "Jr." or "II."' />
        }
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
      <TextInput
        formValue={form.dayAccessed}
        inputName={'dayAccessed'}
        label='Date Accessed'
        placeholder='Day'
        updateForm={updateForm}
        cols={4}
        contentLeft={
          <UseTodayDate />
        }
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
  );
}

export default Misc;
