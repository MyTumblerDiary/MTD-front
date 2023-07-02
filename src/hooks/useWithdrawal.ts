import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import useModal from './useModal';

import { DELETE_USER } from '@/apollo/mutations';

import {
  ACCESS_TOKEN,
  IS_SOCIAL_USER
} from '@/utils/constants/localStorageKey';

export default function useWithdrawal() {
  const router = useRouter();
  const { closeModal } = useModal();

  return useMutation(DELETE_USER, {
    onCompleted: () => {
      localStorage.removeItem(ACCESS_TOKEN);
      localStorage.removeItem(IS_SOCIAL_USER);
      router.replace('/login');
      closeModal();
    },
    onError: (err) => {
      console.log('회원탈퇴 실패: ', err);
    }
  });
}
