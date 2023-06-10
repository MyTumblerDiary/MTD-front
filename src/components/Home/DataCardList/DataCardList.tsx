import * as Style from './DataCardList.style';

import { useTumblerRecord } from '@/hooks';

import Card from '../Card/Card';
import Typography from '@/components/Common/Typography/Typography';
import Svg from '@/components/svg';

interface CardDataProps {
  id: number;
  title: string;
  data: {
    data: number | string;
    unit: string;
  };
  icon?: React.ReactNode;
}

export default function DataCardList() {
  const { data } = useTumblerRecord({});

  const cardListData: CardDataProps[] = [
    {
      id: 1,
      title: '이만큼 저축했어요',
      data: {
        data: data?.tumblerRecords.totalDiscount || 0,
        unit: '원'
      },
      icon: <Svg.Charge />
    },
    {
      id: 2,
      title: '이만큼 사용했어요',
      data: {
        data: data?.tumblerRecords.totalUsedTumbler || 0,
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

  return (
    <Style.DataCardList>
      {cardListData.map((data) => (
        <Card key={data.id}>
          <Style.CardContent>
            <Style.CardInfoWrapper>
              <Typography size='button2' variant='gray2'>
                {data.title}
              </Typography>
              <Typography size='button1'>
                {data.data.data} {data.data.unit}
              </Typography>
            </Style.CardInfoWrapper>
            <Style.CardIconWrapper>{data.icon}</Style.CardIconWrapper>
          </Style.CardContent>
        </Card>
      ))}
    </Style.DataCardList>
  );
}
