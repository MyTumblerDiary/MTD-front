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
    context: {
      headers: {
        authorization: `Bearer ${
          typeof window !== 'undefined'
            ? localStorage.getItem('accessToken')
            : ''
        } `,
        'Content-Type': 'application/json'
      }
    },
    variables: { searchTumblerRecordInput },
    onError: (error) => {
      console.error(error);
    }
  });
}
