// Components
import StyleDropdown from './StyleDropdown';
import SourceDropdown from './SourceDropdown';

function CitationForm() {
  const onSubmit = (values: any) => {
    console.log('Success:', values);
  };

  const onSubmitFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className='grid'>
      <div className='flex justify-between'>
        <StyleDropdown />
        <SourceDropdown />
      </div>
    </div>
  );
}

export default CitationForm;
