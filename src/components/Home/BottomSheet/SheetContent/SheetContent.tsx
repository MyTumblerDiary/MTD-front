import * as Style from './SheetContent.style';

import Typography from '@/components/Common/Typography/Typography';
import SheetNoRecord from '../SheetNoRecord/SheetNoRecord';

interface DiaryDataProps {
  id: number;
  imageUrl: string;
  address: string;
  discountAmount: number;
}

interface SheetContentProps {
  data: DiaryDataProps[];
}

export default function SheetContent({ data }: SheetContentProps) {
  if (!data.length) {
    return <SheetNoRecord />;
  }

  return (
    <>
      {data.map(({ id, imageUrl, address, discountAmount }, idx) => (
        <Style.SheetContent key={id}>
          <Style.DiaryRecord>
            <Style.RecordImage
              src={imageUrl}
              alt={`today_tumbler_${address}`}
            />
            <Style.RecordInfoWrapper>
              <Style.RecordInfo>
                <Typography size='button1'>{address}</Typography>
                <Typography size='body2'>
                  {discountAmount}원 할인받았어요
                </Typography>
              </Style.RecordInfo>
              <Style.RecordButtonWrapper>
                <Style.RecordMofidyButton>
                  <Typography size='button2' variant='warning'>
                    수정하기
                  </Typography>
                </Style.RecordMofidyButton>
                <Style.RecordDeleteButton>
                  <Typography size='button2' variant='error'>
                    삭제하기
                  </Typography>
                </Style.RecordDeleteButton>
              </Style.RecordButtonWrapper>
            </Style.RecordInfoWrapper>
          </Style.DiaryRecord>
          {data.length - 1 !== idx && <Style.HorizontalRule />}
        </Style.SheetContent>
      ))}
    </>
  );
}
