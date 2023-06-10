import { useRouter } from 'next/router';

import Typography from '@/components/Common/Typography/Typography';

import * as Style from './DiscountInformation.style';

interface DiscountInformationProps {
  count: number;
  amount: number;
  href?: string;
}

const DiscountInformation = ({
  count,
  amount,
  href
}: DiscountInformationProps) => {
  const router = useRouter();

  const onClickContainer = () => {
    if (href) {
      router.push(href);
    }
  };

  return (
    <Style.MainInfoContainer onClick={onClickContainer}>
      <Style.MainInfo>
        <Typography size='button1'>{count}회</Typography>
        <Typography size='body2'>할인 받은 횟수</Typography>
      </Style.MainInfo>
      <Style.VerticalLine />
      <Style.MainInfo>
        <Typography size='button1'>{amount.toLocaleString()}원</Typography>
        <Typography size='body2'>할인 받은 금액</Typography>
      </Style.MainInfo>
    </Style.MainInfoContainer>
  );
};

export default DiscountInformation;
