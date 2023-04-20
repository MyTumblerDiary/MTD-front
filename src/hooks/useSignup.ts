import { useMutation } from '@apollo/client';
import { CREATE_USER } from '@/apollo/mutations';

export default function useSignup(
  email: string,
  nickname: string,
  password: string,
  handleComplete: () => void,
  handleError: () => void
) {
  return useMutation(CREATE_USER, {
    variables: {
      createUserInput: {
        email,
        nickname,
        password
      }
    },
    onCompleted: () => {
      handleComplete();
    },
    onError: () => {
      handleError();
    }
  });
}
