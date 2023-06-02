import * as Style from './CafeList.style';

import { useToggleSheet } from '@/hooks';

import { type CafeProps, type CafesProps } from '@/types';

import cafeDetailState from '@/store/cafeDetail';

import Typography from '@/components/Common/Typography/Typography';

interface CafeListProps {
  cafes: CafesProps | undefined;
}

export default function CafeList({ cafes }: CafeListProps) {
  const { toggleSheet } = useToggleSheet();

  const handleCardClick = (cafe: CafeProps) => {
    cafeDetailState(cafe);
    toggleSheet();
  };

  if (!cafes) {
    return <div>데이터가 없습니다.</div>;
  }

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
              <Typography size='caption'>{item.streetNameAddress}</Typography>
            </Style.CafeTitle>
          </Style.CafeSummary>
          <Style.CafeDiscountAmountWrapper>
            <Typography size='button2' variant='main'>
              {item.discountPrice}원 할인
            </Typography>
          </Style.CafeDiscountAmountWrapper>
        </Style.CafeCard>
      ))}
    </Style.CafeListWrapper>
  );
}
