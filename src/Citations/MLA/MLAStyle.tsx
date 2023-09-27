import { citationProps } from '@/@types/form';
import { Card, Text } from '@nextui-org/react';
import dayjs from 'dayjs';

function MLAStyle(props: citationProps) {
  const data = props.data;

  const SourceSwitcher = () => {
    switch (data.citationSource) {
      case 'website':
        return (
          <>
            <Authors />
            <Title />
            <Source />
            <Version />
            <Number />
            <Publisher />
            <Location />
            <DateAccessed />
          </>
        );
      case 'journal':
        return (
          <>
            <Authors />
            <Title />
            <Source />
            <Publisher />
            <Number />
            <PageLocation />
            <Location />
          </>
        );
      case 'book':
        return (
          <>
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
          </>
        );
      default:
        return (
          <>
            <Authors />
            <Title />
            <Source />
            <Version />
            <Number />
            <Publisher />
            <Location />
            <DateAccessed />
          </>
        );
    }
  };

  return (
    <Card.Body>
      <Text className='citation-style' id={data.id}>
        <SourceSwitcher />
      </Text>
    </Card.Body>
  );

  function Authors() {
    return (
      <>
        {data?.lastName}
        {data.lastName && data.firstName ? ', ' : null}
        {data?.firstName}
        {data.firstName && data.middleInitial ? ' ' : null}
        {data.middleInitial ? data.middleInitial[0] : null}
        {data.middleInitial && data.otherContributors?.length === 1 ? '.' : null}
        {data?.suffix}
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
  }

  function Title({ italic }: { italic?: boolean }) {
    return (
      <span className={italic ? 'italic' : 'not-italic'}>
        {data.title ? '"' + data.title + '." ' : null}
      </span>
    );
  }

  function Source() {
    return <>{data.source ? <span className='italic'>{data.source}. </span> : null}</>;
  }

  function Version() {
    return <>{data.version ? data.version + '. ' : null}</>;
  }

  function Number() {
    return (
      <>
        {data.number ? data.number : null}
        {data.number && data.issue ? ', ' : '. '}
        {data.issue ? data.issue + '. ' : null}
      </>
    );
  }

  function Publisher({ year }: { year?: boolean }) {
    return (
      <>
        {data.publisher ? data.publisher + ' ' : null}
        {data.publisher && data.datePublished ? ', ' : null}
        {year && (data.dayPublished || data.monthPublished || data.yearPublished)
          ? data.yearPublished
          : DatePublished()}
        {data.datePublished && (data.doi || data.url || data.pageStart || data.pageEnd)
          ? ', '
          : '. '}
      </>
    );
  }

  function DateAccessed() {
    const day = data.dayAccessed;
    const month = data.monthAccessed as number;
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
  }

  function DatePublished() {
    const day = data.dayPublished;
    const month = data.monthPublished as number;
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
  }

  function Location() {
    return (
      <>
        {data.doi ? data.doi : data.url ? data.url : null}
        {data.publisher || data.datePublished || data.doi || data.url ? '. ' : null}
      </>
    );
  }

  function PageLocation() {
    return (
      <>
        {data.pageStart && data.pageEnd ? 'pp. ' : 'p. '}
        {data.pageStart ? data.pageStart : null}
        {data.pageEnd ? '-' + data.pageEnd : null}
        {data.pageStart || data.pageEnd ? '. ' : null}
      </>
    );
  }
}

export default MLAStyle;
