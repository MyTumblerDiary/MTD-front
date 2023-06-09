import { useQuery } from '@apollo/client';
import { FETCH_STORES } from '@/apollo/queries';

import { type StoreSearchStoreInput, type StorePaginationProps } from '@/types';

export default function useStoreList(searchStoreInput: StoreSearchStoreInput) {
  return useQuery(FETCH_STORES, {
    variables: {
      paginationInput: { limit: 6, page: 1 },
      searchStoreInput
    },

    onError: (error) => {
      console.error(error);
    }
  });
}
