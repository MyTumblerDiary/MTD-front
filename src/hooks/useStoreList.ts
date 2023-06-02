import { useQuery } from '@apollo/client';
import { FETCH_STORES } from '@/apollo/queries';

import { type StorePagenationProps } from '@/types';

export default function useStoreList(
  paginationInput: StorePagenationProps,
  handleComplete: () => void,
  handleError: () => void
) {
  return useQuery(FETCH_STORES, {
    variables: { paginationInput },
    onCompleted: () => {
      handleComplete();
    },
    onError: () => {
      handleError();
    }
  });
}
