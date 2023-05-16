import { useQuery } from '@apollo/client';
import { CHECK_EMAIL_DUPLICATION } from '@/apollo/queries';

import { type InputValidationProps } from '@/types';

export default function useCheckEmail(
  email: string,
  validation: InputValidationProps,
  handleComplete: () => void,
  handleError: () => void
) {
  return useQuery(CHECK_EMAIL_DUPLICATION, {
    variables: { email },
    skip: !(validation === 'success'),
    onCompleted: () => {
      handleComplete();
    },
    onError: () => {
      handleError();
    }
  });
}
