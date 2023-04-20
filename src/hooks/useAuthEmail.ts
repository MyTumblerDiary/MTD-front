import { useQuery } from '@apollo/client';

import { CHECK_EMAIL_AUTH } from '@/apollo/queries';

export default function useAuthEmail(
  email: string,
  code: string,
  handleComplete: () => void,
  handleError: () => void
) {
  return useQuery(CHECK_EMAIL_AUTH, {
    variables: { email, code },
    skip: true,
    onCompleted: () => {
      handleComplete();
    },
    onError: () => {
      handleError();
    }
  });
}
