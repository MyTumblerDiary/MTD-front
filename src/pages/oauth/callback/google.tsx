import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';

import { GOOGLE_CODE } from '@/apollo/mutations';

import IsLogin from '@/components/Oauth/isLogin';
import Layout from '@/components/Layout/Layout';

interface ErrorType {
  error: string;
  message: string;
  statusCode: number;
}

const OauthGoogle = () => {
  const router = useRouter();
  const googleCode = router.query.code;

  const [codeMutation] = useMutation(GOOGLE_CODE, {
    variables: {
      code: googleCode
    },
    onCompleted: (data) => {
      localStorage.setItem('accessToken', data.googleLogin.accessToken);
      router.push('/');
    },
    onError: (err) => {
      console.log('err: ', err);
      const response = err.graphQLErrors[0]?.extensions.response as ErrorType;
      if (response?.statusCode === 422) {
        router.replace({
          pathname: '/login/existing-email',
          query: {
            email: response.error
          }
        });
      }
    }
  });

  useEffect(() => {
    if (googleCode) {
      codeMutation();
    }
  }, [googleCode, codeMutation]);

  return <IsLogin />;
};

export default OauthGoogle;

OauthGoogle.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout bottomNavigator={false}>{page}</Layout>;
};
