import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import useModal from './useModal';

import { LOGOUT } from '@/apollo/mutations';

import {
  ACCESS_TOKEN,
  IS_SOCIAL_USER
} from '@/utils/constants/localStorageKey';

export default function useLogout() {
  const router = useRouter();
  const { closeModal } = useModal();

  return useMutation(LOGOUT, {
    onCompleted: () => {
      localStorage.removeItem(ACCESS_TOKEN);
      localStorage.removeItem(IS_SOCIAL_USER);
      router.replace('/login');
      closeModal();
    },
    onError: (err) => {
      console.log('로그아웃 실패: ', err);
    }
  });
}
