import { citationProps } from '@/@types/form';
import { formatDate } from '@/utils/helpers';

// Components
import { Card } from '@nextui-org/react';

const MLAStyle: React.FC<citationProps> = (props) => {
  const data = props.data;

  switch (data.citationSource) {
    case 'website':
      return (
        <Card.Body className=''>
          {/* Author */}
          <span>{data.lastName ? `${data.lastName},` : null}</span>
          <span>{data.firstName ? `&nbsp;${data.firstName}` : null}</span>
          <span>{data.middleInitial ? `&nbsp;${data.middleInitial[0]}.` : null}</span>
          <span>{data.lastName || data.firstName || data.middleInitial ? `.&nbsp;` : null}</span>

          {/* Title */}
          <span>{data.title ? `&quot;${data.title}.&quot;&nbsp;` : null}</span>

          {/* Source */}
          <span className='italic'>{data.source ? `${data.source}.&nbsp;` : null}</span>

          {/* Version */}
          <span>{data.version ? `${data.version}.&nbsp;` : null} </span>

          {/* Number */}
          <span>{data.number ? `${data.number}.&nbsp;` : null} </span>

          {/* Publisher */}
          <span>{data.publisher ? `${data.publisher},&nbsp;` : null} </span>

          {/* Publication Date */}
          <span>{data.datePublished ? `${formatDate(data.datePublished)},&nbsp;` : null} </span>

          {/* URL or DOI */}
          <span>
            {data.doi ? `${data.location}.&nbsp;` : data.url ? `${data.url}.&nbsp;` : null}
          </span>

          {/* Publication Date */}
          <span>{data.dateAccessed ? `Accessed ${formatDate(data.dateAccessed)}.&nbsp;` : null} </span>
        </Card.Body>
      );
    case 'book':
      return <></>;
    case 'journal':
      return <></>;
    default:
      return <></>;
  }
};

export default MLAStyle;
