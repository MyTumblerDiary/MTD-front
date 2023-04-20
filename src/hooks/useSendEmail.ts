import { useQuery } from '@apollo/client';
import { SEND_EMAIL } from '@/apollo/queries';

export default function useSendEmail(
  sendEmailId: string,
  handleComplete: () => void,
  handleError: () => void
) {
  return useQuery(SEND_EMAIL, {
    variables: { sendEmailId },
    skip: true,
    onCompleted: () => {
      handleComplete();
    },
    onError: () => {
      handleError();
    }
  });
}
