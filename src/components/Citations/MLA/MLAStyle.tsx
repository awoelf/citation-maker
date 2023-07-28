import { form, citationProps } from '@/@types/form';
import { CitationSource } from '../../../utils/citationStorage';
import dayjs from 'dayjs';

// Components
import { Text, Card } from '@nextui-org/react';

// Ideally, I'd like to repurpose this for each of the types of sources (book, journal, website).
// If I add more sources, I will have to split it up into different files because
// it will get unreadable and confusing.
const MLAStyle: React.FC<citationProps> = (props) => {
  // TO DO: Remove period when month is may.
  const formatDate = (date?: string): string => {
    return date ? dayjs(date).format('D MMM. YYYY') : '';
  };
  const form = props.form;

  const { citationSource } = CitationSource();
  return (
    <Card variant='flat' className='flex'>
      {/* TO DO: Update so multiple authors are accepted. 
          TO DO: Update so contributor role is included.
          TO DO: Add input validation so that formatting can be simplified
          TO DO: Add a filter for dates that contain May so that the . is removed.
      */}
      <Card.Body>
        <Text>
          {/* Author */}
          {form.lastName ? <span>{form.lastName},</span> : null}
          {form.firstName ? <span> {form.firstName}</span> : null}
          {form.middleInitial ? <span> {form.middleInitial}</span> : null}
          {form.lastName || form.firstName || form.middleInitial ? <span>. </span> : null}
          {/* Title */}
          {citationSource == 'book' ? (
            <span className='italic'>{form.title}.</span>
          ) : (
            <span>&quot;{form.title}.&quot; </span>
          )}
          {/* Source */}
          {form.source ? <span className='italic'>{form.source}. </span> : null}
          {/* Version */}
          {form.version ? <span>{form.version}. </span> : null}
          {/* Number */}
          {form.number ? <span>{form.number}. </span> : null}
          {/* Publisher */}
          {form.publisher ? <span>{form.publisher}. </span> : null}
          {/* Publication Date */}
          {form.datePublished ? <span>{formatDate(form.datePublished)}. </span> : null}
          {/* Location */}
          {form.location ? <span>{form.location}. </span> : null}
        </Text>
      </Card.Body>
    </Card>
  );
};

export default MLAStyle;
