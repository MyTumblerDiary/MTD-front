import { useQuery } from '@apollo/client';
import { FETCH_STORES } from '@/apollo/queries';

import { type StoreSearchStoreInput, type StorePaginationProps } from '@/types';

export default function useStoreList(
  paginationInput: StorePaginationProps,
  searchStoreInput: StoreSearchStoreInput,
  handleComplete: () => void,
  handleError: () => void
) {
  return useQuery(FETCH_STORES, {
    variables: {
      paginationInput,
      searchStoreInput
    },
    onCompleted: () => {
      handleComplete();
    },
    onError: () => {
      handleError();
    }
  });
}
