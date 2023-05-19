import * as Style from './CafeList.style';

import { useToggleSheet } from '@/hooks';

import { type CafeProps, type CafesProps } from '@/types';

import cafeDetailState from '@/store/cafeDetail';

import Typography from '@/components/Common/Typography/Typography';

interface CafeListProps {
  cafes: CafesProps;
}

export default function CafeList({ cafes }: CafeListProps) {
  const { toggleSheet } = useToggleSheet();

  const handleCardClick = (cafe: CafeProps) => {
    cafeDetailState(cafe);
    toggleSheet();
  };

  return (
    <Style.CafeListWrapper>
      {cafes.map((item) => (
        <Style.CafeCard key={item.id} onClick={() => handleCardClick(item)}>
          <Style.CafeSummary>
            <Style.CafeThumbnail
              src={item.thumbnail}
              alt={`${item.name}'s thumbnail`}
            />
            <Style.CafeTitle>
              <Typography size='button2'>{item.name}</Typography>
              <Typography size='caption'>{item.street_name_address}</Typography>
            </Style.CafeTitle>
          </Style.CafeSummary>
          <Style.CafeDiscountAmountWrapper>
            <Typography size='button2' variant='main'>
              {item.discount_price}원 할인
            </Typography>
          </Style.CafeDiscountAmountWrapper>
        </Style.CafeCard>
      ))}
    </Style.CafeListWrapper>
  );
}
