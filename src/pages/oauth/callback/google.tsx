import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';

import { GOOGLE_CODE } from '@/apollo/mutations';

import { ACCESS_TOKEN } from '@/utils/constants/localStorageKey';

import LoadingTumbler from '@/components/Common/LoadingTumbler/LoadingTumbler';
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
      localStorage.setItem(ACCESS_TOKEN, data.googleLogin.accessToken);
      router.push('/');
    },
    onError: (err) => {
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

  return <LoadingTumbler>로그인 중입니다.</LoadingTumbler>;
};

export default OauthGoogle;

OauthGoogle.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout header={false} bottomNavigator={false}>
      {page}
    </Layout>
  );
};
