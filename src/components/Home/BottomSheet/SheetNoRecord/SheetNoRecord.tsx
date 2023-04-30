import * as Style from './SheetNoRecord.style';

import { type ButtonProps } from '@/types';

import Title from '@/components/Common/Heading/Title';
import Typography from '@/components/Common/Typography/Typography';
import Button from '@/components/Common/Button/Button';

export default function SheetNoRecord() {
  const recordButtonProps: ButtonProps = {
    name: 'record',
    type: 'button',
    size: 'md',
    onClick: () => {},
    children: (
      <Typography size='button1' variant='accent'>
        다이어리에 텀블러 사용 기록하기
      </Typography>
    )
  };

  return (
    <Style.NoRecord>
      <Title>다이어리에 등록된 기록이 없어요</Title>
      <Button {...recordButtonProps} />
    </Style.NoRecord>
  );
}
