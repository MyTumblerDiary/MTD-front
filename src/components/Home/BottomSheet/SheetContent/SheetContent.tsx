import * as Style from './SheetContent.style';

import { useReactiveVar } from '@apollo/client';
import clickedTumblerDataState from '@/store/clickedTumblerData';

import Typography from '@/components/Common/Typography/Typography';
import SheetNoRecord from '../SheetNoRecord/SheetNoRecord';

export default function SheetContent() {
  const tumblerRecords = useReactiveVar(clickedTumblerDataState);

  if (!tumblerRecords.length) {
    return <SheetNoRecord />;
  }

  return (
    <>
      {tumblerRecords.map(({ id, imageFileKey, memo, prices, store }, idx) => (
        <Style.SheetContent key={id}>
          <Style.DiaryRecord>
            <Style.RecordImage src={imageFileKey} alt={`today_tumbler_${id}`} />
            <Style.RecordInfoWrapper>
              <Style.RecordInfo>
                <Style.RecordHeader>
                  <Typography size='button1'>
                    {store?.name || '카페 이름'}
                  </Typography>
                  <Typography size='caption'>
                    {store?.streetNameAddress || '도로명 주소'}
                  </Typography>
                </Style.RecordHeader>
                <Typography size='body2'>{memo || ''}</Typography>
              </Style.RecordInfo>
              <Style.RecordAmount>
                <Typography size='button1'>{prices || 0}원 할인</Typography>
              </Style.RecordAmount>
            </Style.RecordInfoWrapper>
          </Style.DiaryRecord>
          {tumblerRecords.length - 1 !== idx && <Style.HorizontalRule />}
        </Style.SheetContent>
      ))}
    </>
  );
}
