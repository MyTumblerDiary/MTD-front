import { useQuery } from '@apollo/client';
import { GET_MYPAGE_INFO } from '@/apollo/queries';

export default function useMypageInfo() {
  return useQuery(GET_MYPAGE_INFO, {
    fetchPolicy: 'network-only'
  });
}
