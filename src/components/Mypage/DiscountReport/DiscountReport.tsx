import {
  useIntersectionObserver,
  useTumblerRecord,
  useTumblerRecords
} from '@/hooks';

import Header from '@/components/Common/Header/Header';
import DiscountInformation from '../DiscountInformation/DiscountInformation';
import Typography from '@/components/Common/Typography/Typography';

import * as Style from './DiscountReport.style';

const DiscountReport = () => {
  // const { data } = useTumblerRecord();
  const { data, fetchMore, loading } = useTumblerRecords();

  const DiscountInformationProps = {
    // query 데이터 변경으로 에러 발생해서 임시 주석처리
    // count: data?.tumblerRecords.totalUsedTumbler,
    // amount: data?.tumblerRecords.totalDiscount
    count: 5,
    amount: 1800
  };

  const scrollRef = useIntersectionObserver(
    async (entry, observer) => {
      observer.unobserve(entry.target);

      if (
        !loading &&
        data.tumblerRecordsPaginated.totalPages -
          data.tumblerRecordsPaginated.currentPage >
          0
      ) {
        fetchMore({
          variables: {
            input: {
              paginateInput: {
                page: data.tumblerRecordsPaginated.currentPage + 1,
                limit: 10
              },
              orderInput: { orderBy: 'usedAt', orderDirection: 'DESC' }
            }
          }
        });
      }
    },
    {
      threshold: 0.7
    }
  );

  return (
    <div>
      <Header title='할인 내역' />
      <Style.MainContainer>
        <Style.DiscountInformationContainer>
          <DiscountInformation {...DiscountInformationProps} />
        </Style.DiscountInformationContainer>

        <Style.ListContainer>
          {data?.tumblerRecordsPaginated.tumblerRecords.map(
            (el: any, index: number) => {
              const { usedAt, placeType, memo, prices } = el;
              return (
                <Style.ReportContainer key={`${usedAt}-${index}`}>
                  <Typography size='body2'>
                    {usedAt.split('-').splice(1).join('.')}
                  </Typography>
                  <Style.ReportTitleContainer>
                    <Typography size='body1'>{placeType}</Typography>
                    <Typography size='body2' variant='gray3'>
                      {memo}
                    </Typography>
                  </Style.ReportTitleContainer>
                  <Typography size='button1'>
                    {prices?.toLocaleString() || 0}원
                  </Typography>
                </Style.ReportContainer>
              );
            }
          )}
          <Style.ScrollTarget ref={scrollRef} />
        </Style.ListContainer>
      </Style.MainContainer>
    </div>
  );
};

export default DiscountReport;
