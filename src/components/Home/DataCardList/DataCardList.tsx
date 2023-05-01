import * as Style from './DataCardList.style';

import Card from '../Card/Card';
import Typography from '@/components/Common/Typography/Typography';

interface DataCardListProps {
  cardData: Array<CardDataProps>;
}

interface CardDataProps {
  id: number;
  title: string;
  data: {
    data: number | string;
    unit: string;
  };
  icon?: React.ReactNode;
}

export default function DataCardList({ cardData }: DataCardListProps) {
  return (
    <Style.DataCardList>
      {cardData.map((data) => (
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
