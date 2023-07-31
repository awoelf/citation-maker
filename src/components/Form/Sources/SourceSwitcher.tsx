import { CitationSource } from '@/utils/citationStorage';

// Components
import Website from './Website';
import Book from './Book';
import Journal from './Journal';
import Misc from './Misc';

// Displays appropriate form contents based on selected source (eg. website, book, journal, misc)
function SourceSwitcher() {
  const { citationSource } = CitationSource();
  switch (citationSource) {
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
