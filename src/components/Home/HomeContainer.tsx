import * as Style from './HomeContainer.style';

import { type ButtonProps } from '@/types';

import UserCalendar from './UserCalendar/UserCalendar';
import DataCardList from './DataCardList/DataCardList';
import Button from '../Common/Button/Button';
import Typography from '../Common/Typography/Typography';
import AuthHeader from '../Common/AuthHeader/AuthHeader';
import Svg from '../svg';

interface CardDataProps {
  id: number;
  title: string;
  data: {
    data: number | string;
    unit: string;
  };
  icon?: React.ReactNode;
}

export default function HomeContainer() {
  const tempData: CardDataProps[] = [
    {
      id: 1,
      title: '이만큼 저축했어요',
      data: {
        data: 3600,
        unit: '원'
      },
      icon: <Svg.Charge />
    },
    {
      id: 2,
      title: '이만큼 사용했어요',
      data: {
        data: 98,
        unit: '회'
      },
      icon: <Svg.TumblerColored />
    },
    {
      id: 3,
      title: '가장 많이 방문했어요',
      data: {
        data: '투썸플레이스',
        unit: ''
      },
      icon: <Svg.Shopping />
    }
  ];

  const recordButtonProps: ButtonProps = {
    name: 'record',
    type: 'button',
    size: 'lg',
    onClick: () => {},
    children: (
      <Typography size='button1' variant='accent'>
        텀블러 다이어리에 기록하기
      </Typography>
    )
  };

  return (
    <Style.HomeContainer>
      <AuthHeader title='텀블러 다이어리' />
      <Button {...recordButtonProps} />
      <UserCalendar />
      <DataCardList cardData={tempData} />
    </Style.HomeContainer>
  );
}
