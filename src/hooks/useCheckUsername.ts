import { useQuery } from '@apollo/client';
import { CHECK_USERNAME_DUPLICATION } from '@/apollo/queries';

import { type InputValidationProps } from '@/types';

export default function useCheckUsername(
  nickname: string,
  validation: InputValidationProps,
  handleComplete: () => void,
  handleError: () => void
) {
  return useQuery(CHECK_USERNAME_DUPLICATION, {
    variables: { nickname },
    skip: !(validation === 'success'),
    onCompleted: () => {
      handleComplete();
    },
    onError: () => {
      handleError();
    }
  });
}
