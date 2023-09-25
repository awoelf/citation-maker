import { citationProps } from '@/@types/form';
import dayjs from 'dayjs';

// Components
import { Card, Text } from '@nextui-org/react';

// TO DO: Clean this code up because it's a damn mess
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
        {data.publisher ? data.publisher + ' ': null}
        {data.publisher && data.datePublished ? ', ' : null}
        {year && (data.dayPublished || data.monthPublished || data.yearPublished)
          ? data.yearPublished
          : DatePublished()}
        {data.datePublished && (data.doi || data.url || data.pageStart || data.pageEnd)
          ? ', '
          : '. '}
      </>
    );
  };

  const DateAccessed = () => {
    const day = data.dayAccessed;
    const month = data.monthAccessed;
    const year = data.yearAccessed;

    return (
      <>
        {day || month || year ? 'Accessed' : null} {day ? day + ' ' : null}
        {/* If month is May, do not add '.' to abbreveate.*/}
        {month === 5
          ? dayjs()
              .month(month - 1)
              .format('MMM') + ' '
          : month
          ? dayjs()
              .month(month - 1)
              .format('MMM') + '. '
          : null}
        {year ? year : null}
        {day || month === 5 || year ? '. ' : null}
      </>
    );
  };

  const DatePublished = () => {
    const day = data.dayPublished;
    const month = data.monthPublished;
    const year = data.yearPublished;

    return (
      <>
        {day ? day + ' ' : null}
        {/* If month is May, do not add '.' to abbreveate.*/}
        {month === 5
          ? dayjs()
              .month(month - 1)
              .format('MMM') + ' '
          : month
          ? dayjs()
              .month(month - 1)
              .format('MMM') + '. '
          : null}
        {year ? year : null}
      </>
    );
  };

  const Location = () => {
    return (
      <>
        {data.doi ? data.doi : data.url ? data.url : null}
        {data.publisher || data.datePublished || data.doi || data.url ? '. ' : null}
      </>
    );
  };

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
            <Location />
            <DateAccessed />
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
            <Publisher year={true} />
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
            <Publisher />
            <Version />
            <Number />
            <PageLocation />
            <Location />
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
            <Publisher />
            <Location />
            <DateAccessed />
          </Text>
        </Card.Body>
      );
  }
};

export default MLAStyle;
