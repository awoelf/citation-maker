import { citationProps } from '@/@types/form';
import { formatDate } from '@/utils/helpers';

// Components
import { Card, Text } from '@nextui-org/react';
// *dies*
// This is the best way I can conceptualize implementing citations given how conditional they are.
// I may pull this apart into reusable components...
const MLAStyle: React.FC<citationProps> = (props) => {
  const data = props.data;

  switch (data.citationSource) {
    case 'website':
      return (
        <Card.Body>
          <Text>
            {/* Author */}
            {data?.lastName}
            {data.lastName && data.firstName ? ', ' : null}
            {data?.firstName}
            {data.firstName && data.middleInitial ? ' ' : null}
            {data.middleInitial ? data.middleInitial[0] : null}
            {data.middleInitial && data.otherContributors?.length === 1 ? '.' : null}
            {data?.suffix}
            {/* Other contributors */}
            {/* When there is 2 or more authors, et al. is used. */}
            {/* When there is 1 other contributor, put and between main author and other. */}
            {/* Should only be used to multiple authors, not for editors, but I will have to implement later. */}
            {(data.lastName || data.firstName || data.middleInitial || data.suffix) &&
            data.otherContributors?.length
              ? data.otherContributors?.length > 1
                ? ', et al'
                : ', and ' +
                    data?.otherContributors[0].lastName +
                    data.otherContributors[0].lastName && data.otherContributors[0].firstName
                ? ', '
                : null +
                  data?.otherContributors[0].firstName +
                  data?.otherContributors[0].middleInitial[0] +
                  data?.otherContributors[0].suffix
              : null}
            {data.lastName || data.firstName || data.middleInitial || data.suffix ? '. ' : null}
            {/* Title */}
            {data.title ? '"' + data.title + '." ' : null}
            {/* Source */}
            {data.source ? <span className='italic'>{data.source}. </span> : null}
            {/* Version */}
            {data.version ? data.version + '. ' : null}
            {/* Number */}
            {data.number ? data.number + '. ' : null}
            {/* Publisher */}
            {data.publisher ? data.publisher : null}
            {data.publisher && data.datePublished ? ', ' : null}
            {/* Publication Date */}
            {data.datePublished ? formatDate(data.datePublished) : null}
            {data.datePublished && (data.doi || data.url) ? ', ' : null}
            {/* URL or DOI */}
            {data.doi ? data.doi : data.url ? data.url : null}
            {data.publisher || data.datePublished || data.doi || data.url ? '. ' : null}
            {/* Date Accessed */}
            {data.dateAccessed ? 'Accessed ' + formatDate(data.dateAccessed) + '.' : null}{' '}
          </Text>
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
