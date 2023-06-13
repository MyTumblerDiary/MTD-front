import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import useModal from './useModal';

import { UPDATE_USER } from '@/apollo/mutations';

import { ChangePasswordInputTypes } from '@/types';

export default function usePasswordChange(
  currentPassword: string,
  newPassword: string,
  setUserInput: React.Dispatch<React.SetStateAction<ChangePasswordInputTypes>>
) {
  const router = useRouter();
  const { openModal } = useModal();

  const onClickSuccessModal = () => {
    router.replace('/mypage/account-setting');
  };

  const onClickErrorModal = () => {
    setUserInput({
      currentPassword: {
        value: '',
        validation: 'default',
        message: ''
      },
      password: {
        value: '',
        validation: 'default',
        message: ''
      },
      passwordCheck: {
        value: '',
        validation: 'default',
        message: ''
      }
    });
  };

  return useMutation(UPDATE_USER, {
    variables: {
      updateUserInput: {
        currentPassword: currentPassword,
        password: newPassword
      }
    },
    onCompleted: () => {
      openModal({
        modalName: 'confirm',
        props: {
          title: '비밀번호를 정상적으로 변경했습니다.',
          onClickFn: onClickSuccessModal
        }
      });
    },
    onError: (err) => {
      openModal({
        modalName: 'confirm',
        props: {
          title: err.message,
          onClickFn: onClickErrorModal
        }
      });
    }
  });
}
