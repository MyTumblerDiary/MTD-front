import { useQuery } from '@apollo/client';
import { GET_TUMBLER_RECORDS_PAGINATION } from '@/apollo/queries';

export default function useTumblerRecords() {
  return useQuery(GET_TUMBLER_RECORDS_PAGINATION, {
    variables: {
      input: {
        paginateInput: { page: 1, limit: 10 },
        orderInput: { orderBy: 'usedAt', orderDirection: 'DESC' }
      }
    },

    onError: (error) => {
      console.log('텀블러 내역 에러: ', error);
    }
  });
}
