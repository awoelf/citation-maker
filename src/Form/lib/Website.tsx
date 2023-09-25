import FormStorage from '../../storage/formStorage';
import TextInput from '../components/TextInput';
import OtherContributors from '../components/OtherContributors';
import DropdownInput from '../components/DropdownInput';
import UseTodayDate from '../components/UseTodayDate';

function Website() {
  const { form, updateForm, updateFormDate } = FormStorage();
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

export default Website;
