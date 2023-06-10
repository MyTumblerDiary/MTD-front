import { useMutation } from '@apollo/client';
import { UPDATE_PASSWORD } from '@/apollo/mutations';

export default function useUpdatePassword(
  userEmail: string,
  password: string,
  handleCompleted: () => void
) {
  return useMutation(UPDATE_PASSWORD, {
    variables: { userEmail, password },
    onCompleted: () => {
      handleCompleted();
    },
    onError: (error) => {
      console.error(error);
    }
  });
}
