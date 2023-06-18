// Components
import StyleDropdown from './StyleDropdown';
import SourceDropdown from './SourceDropdown';

function CitationForm() {
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
