import { useQuery } from '@apollo/client';
import { GET_MYPAGE_INFO } from '@/apollo/queries';
import { IS_SOCIAL_USER } from '@/utils/constants/localStorageKey';

export default function useMypageInfo() {
  return useQuery(GET_MYPAGE_INFO, {
    onCompleted: (data) => {
      if (data.user.social !== 'local') {
        localStorage.setItem(IS_SOCIAL_USER, 'Y');
      }
    },
    fetchPolicy: 'network-only'
  });
}
