import { useTumblerRecord } from '@/hooks';

import Header from '@/components/Common/Header/Header';
import DiscountInformation from '../DiscountInformation/DiscountInformation';
import Typography from '@/components/Common/Typography/Typography';

import * as Style from './DiscountReport.style';

const DiscountReport = () => {
  const { data } = useTumblerRecord({});

  const DiscountInformationProps = {
    count: data?.tumblerRecords.totalUsedTumbler,
    amount: data?.tumblerRecords.totalDiscount
  };

  return (
    <div>
      <Header title='할인 내역' />
      <Style.MainContainer>
        <Style.DiscountInformationContainer>
          <DiscountInformation {...DiscountInformationProps} />
        </Style.DiscountInformationContainer>

        <Style.ListContainer>
          {data?.tumblerRecords.tumblerRecords.map((el: any, index: number) => {
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
                <Style.ReportAmountContainer>
                  <Typography size='button1'>
                    {prices?.toLocaleString() || 0}원
                  </Typography>
                  <Typography size='body2' variant='gray3'>
                    000원
                  </Typography>
                </Style.ReportAmountContainer>
              </Style.ReportContainer>
            );
          })}
        </Style.ListContainer>
      </Style.MainContainer>
    </div>
  );
};

export default DiscountReport;
