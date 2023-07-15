import FormStorage from '@/utils/formStorage';

// Components
import TextInput from '../Input/TextInput';
import OtherContributors from '../Input/OtherContributors';

function Website() {
  const { form, updateForm } = FormStorage();
  return (
    <>
      {/* || Title */}
      <TextInput
        formValue={form.title}
        inputName={'title'}
        label={'Article Name'}
        updateForm={updateForm}
      />
      {/* || Source */}
      <TextInput
        formValue={form.source}
        inputName={'source'}
        label={'Website Name'}
        updateForm={updateForm}
      />

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
        formValue={form.lastName}
        inputName={'lastName'}
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
        formValue={form.suffix}
        inputName={'suffix'}
        updateForm={updateForm}
        cols={2}
        mobileCols={6}
        tooltipMessage='Do not list titles (Dr., Sir, Saint, etc.) or degrees (PhD, MA, DDS, etc.) with names. Do include suffixes like "Jr." or "II."'
      />

      {/* || Other contributors */}
      <OtherContributors formValue={form.otherContributors} inputName='otherContributors' />

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
    </>
  );
}

export default Website;
