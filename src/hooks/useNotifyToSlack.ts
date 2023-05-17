import Router from 'next/router';
import { useState } from 'react';

export default function useNotifyToSlack(text: string) {
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const notifySlackOnClick = async () => {
    setIsLoading(true);

    try {
      const result = await fetch(
        'https://hooks.slack.com/services/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',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: JSON.stringify({
            text
          })
        }
      );

      if (result.status === 200) {
        setIsSuccess(true);
        Router.back();
      }
    } catch (error) {
      setError('메세지를 전송하는 중 오류가 발생했습니다.');
      console.error(error);
    }

    setIsLoading(false);
  };

  return { isLoading, isSuccess, error, notifySlackOnClick };
}
