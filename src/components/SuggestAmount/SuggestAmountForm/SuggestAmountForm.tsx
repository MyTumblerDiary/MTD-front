import * as Style from './SuggestAmountForm.style';

import Typography from '@/components/Common/Typography/Typography';
import Svg from '@/components/svg';

interface SuggestAmountFormProps {
  discountPrice: number;
  handleChangePriceOption: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;
}

export default function SuggestAmountForm({
  discountPrice,
  handleChangePriceOption
}: SuggestAmountFormProps) {
  return (
    <Style.SuggestAmountForm>
      <Style.AmountWrapper>
        <Typography size='button1'>기존 표시 금액</Typography>
        <Style.ExistingAmount>
          <Typography size='body2'>{discountPrice} 원</Typography>
        </Style.ExistingAmount>
      </Style.AmountWrapper>
      <Svg.CrossArrow />
      <Style.AmountWrapper>
        <Typography size='button1' variant='warning'>
          수정 제안 금액
        </Typography>
        <Style.AmountSelectWrapper>
          <Style.AmountSelect onChange={handleChangePriceOption}>
            <option value={discountPrice}>할인 금액</option>
            <option value={100}>100</option>
            <option value={200}>200</option>
            <option value={300}>300</option>
            <option value={400}>400</option>
            <option value={500}>500</option>
          </Style.AmountSelect>
          <Typography size='body2'>원</Typography>
        </Style.AmountSelectWrapper>
      </Style.AmountWrapper>
    </Style.SuggestAmountForm>
  );
}
