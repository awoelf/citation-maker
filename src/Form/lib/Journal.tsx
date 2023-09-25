import FormStorage from '../../storage/formStorage';
import TextInput from '../components/TextInput';
import OtherContributors from '../components/OtherContributors';

function Journal() {
  const { form, updateForm } = FormStorage();
  return (
    <>
      {/* || Title */}
      <TextInput formValue={form.title} inputName={'title'} label={'Title of Journal Article'} updateForm={updateForm} />
      
      {/* || Source (Container) */}
      <TextInput
        formValue={form.source}
        inputName={'source'}
        label={'Database'}
        updateForm={updateForm}
        tooltipMessage={'The larger whole in which the source is located, such as a collection, database, or book title if citing a chapter.'}
      />

      {/* || Number (Volume) */}
      <TextInput
        formValue={form.number}
        inputName={'number'}
        label={'Volume'}
        cols={6}
        fullWidth={false}
        updateForm={updateForm}
      />

      {/* || Issue */}
      <TextInput
        formValue={form.issue}
        inputName={'issue'}
        cols={6}
        fullWidth={false}
        updateForm={updateForm}
      />

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

      {/* || DOI */}
      <TextInput formValue={form.doi} inputName={'doi'} label={'DOI'} updateForm={updateForm} />

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

      {/* || Other contributors */}
      <OtherContributors inputName='otherContributors' />

      {/* || Publisher */}
      <TextInput formValue={form.publisher} inputName={'publisher'} updateForm={updateForm} />

      {/* || Location */}
      <TextInput
        formValue={form.location}
        inputName={'location'}
        label={'Location of Publication'}
        updateForm={updateForm}
      />

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

export default Journal;