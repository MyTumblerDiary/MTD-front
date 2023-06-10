import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';

import { UPDATE_USER } from '@/apollo/mutations';

import { UserInputPramProps } from '@/types';

export default function useNicknameChange(
  nickname: string,
  setNickname: React.Dispatch<React.SetStateAction<UserInputPramProps>>
) {
  const router = useRouter();

  return useMutation(UPDATE_USER, {
    variables: {
      updateUserInput: {
        nickname
      }
    },
    onCompleted: () => {
      router.push('/mypage');
    },
    onError: (err) => {
      setNickname((prev) => ({
        ...prev,
        validation: 'error',
        message: err.message
      }));
    }
  });
}
