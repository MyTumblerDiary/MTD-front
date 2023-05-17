import * as Style from './SuggestAmountInfo.style';

import Typography from '@/components/Common/Typography/Typography';

export default function SuggestAmountInfo() {
  return (
    <Style.SuggestAmountInfoWrapper>
      <Typography size='button1'>유의 사항</Typography>
      <Style.SuggestAmountInfo>
        <Typography size='caption' variant='gray3'>
          1. 수정 제안 된 금액은 관리자의 확인 후 반영됩니다.
        </Typography>
        <Typography size='caption' variant='gray3'>
          2. 확인 된 내용이 사실과 다른 경우 제안된 금액으로 수정되지 않습니다.
        </Typography>
        <Typography size='caption' variant='gray3'>
          3. 수정 제안 건은 요청 이후 영업일 기준 7일 이내로 처리됩니다.
        </Typography>
        <Typography size='caption' variant='gray3'>
          4. 제안 진행사항은 mytumblerdiary@gmail.com으로 문의 바랍니다.
        </Typography>
      </Style.SuggestAmountInfo>
    </Style.SuggestAmountInfoWrapper>
  );
}
