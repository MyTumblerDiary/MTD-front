import * as Style from './CafeList.style';

import { useToggleSheet } from '@/hooks';

import Typography from '@/components/Common/Typography/Typography';

type CafesProps = CafeProps[];

interface CafeProps {
  id: number;
  thumbnail: string;
  cafe: string;
  branch: string;
  address: string;
  discountAmount: number;
}

interface CafeListProps {
  cafes: CafesProps;
}

export default function CafeList({ cafes }: CafeListProps) {
  const { toggleSheet } = useToggleSheet();

  return (
    <Style.CafeListWrapper>
      {cafes.map((item) => (
        <Style.CafeCard key={item.id} onClick={toggleSheet}>
          <Style.CafeSummary>
            <Style.CafeThumbnail
              src={item.thumbnail}
              alt={`${item.cafe}'s thumbnail`}
            />
            <Style.CafeTitle>
              <Typography size='button2'>
                {item.cafe} {item.branch}
              </Typography>
              <Typography size='caption'>{item.address}</Typography>
            </Style.CafeTitle>
          </Style.CafeSummary>
          <Style.CafeDiscountAmountWrapper>
            <Typography size='button2' variant='main'>
              {item.discountAmount}원 할인
            </Typography>
          </Style.CafeDiscountAmountWrapper>
        </Style.CafeCard>
      ))}
    </Style.CafeListWrapper>
  );
}
