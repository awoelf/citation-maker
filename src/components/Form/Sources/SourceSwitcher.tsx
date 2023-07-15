import { CitationSource } from '@/utils/citationStorage';

// Components
import Website from './Website';
import Generic from './Generic';
import Book from './Book';
import Journal from './Journal';

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
      return <Generic />;
  }
}

export default SourceSwitcher;
