import FormStorage from '@/utils/formStorage';

// Components
import TextInput from '../Input/TextInput';
import OtherContributors from '../Input/OtherContributors';

function Website() {
  const { form, updateForm } = FormStorage();
  // const [datePublished, setDatePublished] = useState<date>({
  //   day: '',
  //   month: '',
  //   year: '',
  // });
  // const [dateAccessed, setDateAccessed] = useState<date>({
  //   day: '',
  //   month: '',
  //   year: '',
  // });

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
        tooltipMessage={'This can also be the name of the database.'}
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
        tooltipMessage={'Include a compiler name if no single author is available.'}
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

      {/* || Other contributors */}
      <OtherContributors inputName='otherContributors' />

      {/* || Publisher */}
      <TextInput formValue={form.publisher} inputName={'publisher'} updateForm={updateForm} />

      {/* || Date published */}
      <TextInput
        formValue={form.dayPublished}
        inputName={'dayPublished'}
        label='Date Published'
        placeholder='Day'
        type='number'
        updateForm={updateForm}
        cols={4}
      />
      <TextInput
        formValue={form.monthPublished}
        inputName={'monthPublished'}
        label='&nbsp;'
        placeholder='Month'
        type='number'
        updateForm={updateForm}
        cols={4}
      />
      <TextInput
        formValue={form.yearPublished}
        inputName={'yearPublished'}
        label='&nbsp;'
        placeholder='Year'
        type='number'
        updateForm={updateForm}
        cols={4}
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
      />
      <TextInput
        formValue={form.monthAccessed}
        inputName={'monthAccessed'}
        label='&nbsp;'
        placeholder='Month'
        type='number'
        updateForm={updateForm}
        cols={4}
      />
      <TextInput
        formValue={form.yearAccessed}
        inputName={'yearAccessed'}
        label='&nbsp;'
        placeholder='Year'
        type='number'
        updateForm={updateForm}
        cols={4}
      />
    </>
  );
}

export default Website;
