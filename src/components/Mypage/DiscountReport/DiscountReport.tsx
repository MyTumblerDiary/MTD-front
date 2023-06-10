import Header from '@/components/Common/Header/Header';
import DiscountInformation from '../DiscountInformation/DiscountInformation';
import Typography from '@/components/Common/Typography/Typography';

import * as Style from './DiscountReport.style';

const DiscountReport = () => {
  const DiscountInformationProps = {
    count: 26,
    amount: 5900
  };

  const DUMMY_DATA = [
    {
      date: '05.06',
      title: '투썸플레이스 인하대점',
      memo: '메모메모',
      price: 300,
      amount: 5900
    },
    {
      date: '05.06',
      title: '투썸플레이스 인하대점',
      memo: '메모메모',
      price: 300,
      amount: 5900
    },
    {
      date: '05.06',
      title: '투썸플레이스 인하대점',
      memo: '메모메모',
      price: 300,
      amount: 5900
    }
  ];

  return (
    <div>
      <Header title='할인 내역' />
      <Style.MainContainer>
        <Style.DiscountInformationContainer>
          <DiscountInformation {...DiscountInformationProps} />
        </Style.DiscountInformationContainer>

        <Style.ListContainer>
          {DUMMY_DATA.map((el, index) => {
            const { date, title, memo, price, amount } = el;
            return (
              <Style.ReportContainer key={`${date}-${index}`}>
                <Typography size='body2'>{date}</Typography>
                <Style.ReportTitleContainer>
                  <Typography size='body1'>{title}</Typography>
                  <Typography size='body2' variant='gray3'>
                    {memo}
                  </Typography>
                </Style.ReportTitleContainer>
                <Style.ReportAmountContainer>
                  <Typography size='button1'>
                    {price.toLocaleString()}원
                  </Typography>
                  <Typography size='body2' variant='gray3'>
                    {amount.toLocaleString()}원
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
