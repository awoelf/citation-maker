import FormStorage from '../../storage/formStorage';

// Components
import Website from './Website';
import Book from './Book';
import Journal from './Journal';
import Misc from './Misc';

// Displays appropriate form contents based on selected source (eg. website, book, journal, misc)
function SourceSwitcher() {
  const { form } = FormStorage();
  
  switch (form.citationSource) {
    case 'website':
      return <Website />;
    case 'book':
      return <Book />;
    case 'journal':
      return <Journal />;
    default:
      return <Misc />;
  }
}

export default SourceSwitcher;
