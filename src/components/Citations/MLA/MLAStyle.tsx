import { citationProps } from '@/@types/form';
import { formatDate, formatYear } from '@/utils/helpers';

// Components
import { Card, Text } from '@nextui-org/react';


// TO DO: Clean this code up
const MLAStyle: React.FC<citationProps> = (props) => {
  const data = props.data;

  const Authors = () => {
    return (
      <>
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
            : ', and ' + data?.otherContributors[0].lastName + data.otherContributors[0].lastName &&
              data.otherContributors[0].firstName
            ? ', '
            : null +
              data?.otherContributors[0].firstName +
              data?.otherContributors[0].middleInitial[0] +
              data?.otherContributors[0].suffix
          : null}
        {data.lastName || data.firstName || data.middleInitial || data.suffix ? '. ' : null}
      </>
    );
  };

  const Title = ({ italic }: { italic?: boolean }) => {
    return (
      <span className={italic ? 'italic' : 'not-italic'}>
        {data.title ? '"' + data.title + '." ' : null}
      </span>
    );
  };

  const Source = () => {
    return <>{data.source ? <span className='italic'>{data.source}. </span> : null}</>;
  };

  const Version = () => {
    return <>{data.version ? data.version + '. ' : null}</>;
  };

  const Number = () => {
    return <>{data.number ? data.number + '. ' : null}</>;
  };

  const Publisher = ({ year }: { year?: boolean }) => {
    return (
      <>
        {data.publisher ? data.publisher : null}
        {data.publisher && data.datePublished ? ', ' : null}
        {year && data?.datePublished
          ? formatYear(data.datePublished)
          : formatDate(data?.datePublished)}
        {data.datePublished && (data.doi || data.url || data.pageStart || data.pageEnd)
          ? ', '
          : '. '}
      </>
    );
  };

  // const Location = () => {
  //   return (
  //     <>
  //       {data.doi ? data.doi : data.url ? data.url : null}
  //       {data.publisher || data.datePublished || data.doi || data.url ? '. ' : null}
  //     </>
  //   );
  // };

  // const DateAccessed = () => {
  //   return <>{data.dateAccessed ? 'Accessed ' + formatDate(data.dateAccessed) + '.' : null}</>;
  // };

  const PageLocation = () => {
    return (
      <>
        {data.pageStart && data.pageEnd ? 'pp. ' : 'p. '}
        {data.pageStart ? data.pageStart : null}
        {data.pageEnd ? '-' + data.pageEnd : null}
        {data.pageStart || data.pageEnd ? '. ' : null}
      </>
    );
  };

  switch (data.citationSource) {
    case 'website':
      return (
        <Card.Body>
          <Text className='citation-style' id={data.id}>
            <Authors />
            <Title />
            <Source />
            <Version />
            <Number />
            <Publisher />
            {/* 
            <Location /> */}
            {/* <DateAccessed /> */}
          </Text>
        </Card.Body>
      );
    case 'book':
      return (
        <Card.Body>
          <Text className='citation-style' id={data.id}>
            <Authors />
            {data.source ? (
              <>
                <Title />
                <Source />
              </>
            ) : (
              <Title italic={true} />
            )}

            {/* <Publisher year={true}/> */}
          </Text>
        </Card.Body>
      );
    case 'journal':
      return (
        <Card.Body>
          <Text className='citation-style' id={data.id}>
            <Authors />
            <Title />
            <Source />
            {/* <Publisher /> */}
            <Version />
            <Number />
            <PageLocation />
            {/* <Location /> */}
          </Text>
        </Card.Body>
      );
    default:
      return (
        <Card.Body>
          <Text className='citation-style' id={data.id}>
            <Authors />
            <Title />
            <Source />
            <Version />
            <Number />
            {/* <Publisher />
            <Location /> */}
            {/* <DateAccessed /> */}
          </Text>
        </Card.Body>
      );
  }
};

export default MLAStyle;
