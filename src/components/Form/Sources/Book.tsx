import FormStorage from '@/utils/formStorage';

// Components
import TextInput from '../Input/TextInput';
import OtherContributors from '../Input/OtherContributors';

function Book() {
  const { form, updateForm } = FormStorage();
  return (
    <>
      {/* || Title */}
      <TextInput formValue={form.title} inputName={'title'} label={'Title of Book or Chapter'} updateForm={updateForm} />
      
      {/* || Source (Container) */}
      <TextInput
        formValue={form.source}
        inputName={'source'}
        label={'Container'}
        updateForm={updateForm}
        tooltipMessage={'The larger whole in which the source is located, such as a collection, or book title if citing a chapter.'}
      />

      {/* || Version (Edition) */}
      <TextInput
        formValue={form.version}
        inputName={'version'}
        label={'Edition'}
        cols={6}
        fullWidth={false}
        updateForm={updateForm}
      />

      {/* || Number */}
      <TextInput
        formValue={form.number}
        inputName={'number'}
        cols={6}
        fullWidth={false}
        updateForm={updateForm}
        tooltipMessage={
          'Identifies which part in a numbered series the source belongs to (e.g. vol. 6, no. 2, season 2, episode 21).'
        }
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

      {/* || Location */}
      <TextInput
        formValue={form.location}
        inputName={'location'}
        label={'Location of Publication'}
        updateForm={updateForm}
        tooltipMessage={
          'The location of publication should only be used if the book was published before 1900.'
        }
      />

      {/* || Date published */}
      <TextInput
        formValue={form.datePublished}
        inputName={'datePublished'}
        type='date'
        updateForm={updateForm}
      />
    </>
  );
}

export default Book;
