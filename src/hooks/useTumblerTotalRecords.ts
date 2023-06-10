import { useQuery } from '@apollo/client';
import { GET_TUMBLER_TOTAL_RECORDS } from '@/apollo/queries';

interface SearchTumblerRecordInputProps {
  order?: string;
  searchBy?: string;
  value?: string;
}

export default function useTumblerTotalRecord(
  searchTumblerRecordInput: SearchTumblerRecordInputProps
) {
  return useQuery(GET_TUMBLER_TOTAL_RECORDS, {
    variables: { searchTumblerRecordInput },
    onError: (error) => {
      console.error(error);
    },
    fetchPolicy: 'cache-and-network'
  });
}
