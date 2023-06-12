import { useRouter } from 'next/router';

import * as Style from './HomeContainer.style';

import { type ButtonProps } from '@/types';

import UserCalendar from '../UserCalendar/UserCalendar';
import Typography from '@/components/Common/Typography/Typography';
import Button from '@/components/Common/Button/Button';
import DataCardList from '../DataCardList/DataCardList';

export default function HomeContainer() {
  const router = useRouter();

  const onClickRecordHandler = () => {
    router.push('/record');
  };

  const recordButtonProps: ButtonProps = {
    name: 'record',
    type: 'button',
    size: 'lg',
    onClick: onClickRecordHandler,
    children: (
      <Typography size='button1' variant='accent'>
        텀블러 다이어리에 기록하기
      </Typography>
    )
  };

  return (
    <Style.HomeContainer>
      <UserCalendar />
      <DataCardList />
      <Button {...recordButtonProps} />
    </Style.HomeContainer>
  );
}
