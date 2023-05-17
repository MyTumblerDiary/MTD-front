import * as Style from './SuggestAmountTitle.style';

import Typography from '@/components/Common/Typography/Typography';

interface SuggestAmountTitleProps {
  title: string;
}

export default function SuggestAmountTitle({ title }: SuggestAmountTitleProps) {
  return (
    <Style.SuggestAmountTitle>
      <Typography size='button1' variant='main'>
        {title}
      </Typography>
      <Typography size='caption'>할인 금액이 잘못되었나요?</Typography>
    </Style.SuggestAmountTitle>
  );
}
