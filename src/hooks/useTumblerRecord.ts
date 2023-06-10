import { useQuery } from '@apollo/client';
import { GET_TUMBLER_RECORDS } from '@/apollo/queries';

interface SearchTumblerRecordInputProps {
  order?: string;
  searchBy?: string;
  value?: string;
}

export default function useTumblerRecord(
  searchTumblerRecordInput: SearchTumblerRecordInputProps
) {
  return useQuery(GET_TUMBLER_RECORDS, {
    variables: { searchTumblerRecordInput },
    onError: (error) => {
      console.error(error);
    }
  });
}
