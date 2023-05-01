import * as Style from './SheetContent.style';

import Typography from '@/components/Common/Typography/Typography';
import SheetNoRecord from '../SheetNoRecord/SheetNoRecord';

interface DiaryDataProps {
  id: number;
  imageUrl: string;
  address: string;
  memo: string;
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
      {data.map(({ id, imageUrl, address, memo, discountAmount }, idx) => (
        <Style.SheetContent key={id}>
          <Style.DiaryRecord>
            <Style.RecordImage
              src={imageUrl}
              alt={`today_tumbler_${address}`}
            />
            <Style.RecordInfoWrapper>
              <Style.RecordInfo>
                <Typography size='button1'>{address}</Typography>
                <Typography size='body2'>{memo}</Typography>
              </Style.RecordInfo>
              <Style.RecordAmount>
                <Typography size='button2'>{discountAmount}원 할인</Typography>
              </Style.RecordAmount>
            </Style.RecordInfoWrapper>
          </Style.DiaryRecord>
          {data.length - 1 !== idx && <Style.HorizontalRule />}
        </Style.SheetContent>
      ))}
    </>
  );
}
