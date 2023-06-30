import { useQuery } from '@apollo/client';
import { GET_TUMBLER_RECORDS } from '@/apollo/queries';

export default function useTumblerRecord() {
  return useQuery(GET_TUMBLER_RECORDS, {
    onError: (error) => {
      console.error(error);
    },
    fetchPolicy: 'cache-and-network'
  });
}
