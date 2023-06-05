import { useEffect, useRef } from 'react';

import { client } from '@/apollo/client';
import { useReactiveVar } from '@apollo/client';
import saerchQueryState from '@/store/searchQuery';
import cafeDetailState from '@/store/cafeDetail';

import { useIntersectionObserver, useStoreList, useToggleSheet } from '@/hooks';

import { type CafeProps } from '@/types';

import * as Style from './CafeList.style';

import Typography from '@/components/Common/Typography/Typography';
import ReactPortal from '@/components/Common/BottomSheetFrame/ReactPortal';
import BottomSheet from '../BottomSheet/BottomSheet';

export default function CafeList() {
  const { sheetState, toggleSheet } = useToggleSheet();
  const searchQuery = useReactiveVar(saerchQueryState);
  const page = useRef(1);

  const {
    data,
    fetchMore,
    loading: fetchStoreLoading
  } = useStoreList(
    { limit: 6, page: page.current },
    Object.keys(searchQuery).length === 0 ? {} : searchQuery,
    () => {},
    () => {}
  );

  const ref = useIntersectionObserver(
    async (entry, observer) => {
      observer.unobserve(entry.target);

      if (!fetchStoreLoading) {
        page.current += 1;

        fetchMore({
          variables: {
            paginationInput: { limit: 6, page: page.current }
          }
        });
      }
    },
    {
      threshold: 0.7
    }
  );

  const handleCardClick = (cafe: CafeProps) => {
    cafeDetailState(cafe);
    toggleSheet();
  };

  useEffect(() => {
    return () => {
      client.cache.evict({ fieldName: 'stores' });
      client.cache.gc();
    };
  }, []);

  if (!data?.stores.length) {
    return (
      <Style.EmptyDataWrapper>
        <Style.EmptyData>
          <Typography size='button2' variant='main'>
            데이터가 없습니다.
          </Typography>
        </Style.EmptyData>
      </Style.EmptyDataWrapper>
    );
  }

  return (
    <>
      <Style.CafeListWrapper>
        {data.stores.map((item: CafeProps) => (
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
        <Style.Target ref={ref} />
      </Style.CafeListWrapper>
      {sheetState && (
        <ReactPortal>
          <BottomSheet />
        </ReactPortal>
      )}
    </>
  );
}
