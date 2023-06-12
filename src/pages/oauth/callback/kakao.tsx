import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';

import { KAKAO_CODE } from '@/apollo/mutations';

import { ACCESS_TOKEN } from '@/utils/constants/localStorageKey';

import LoadingTumbler from '@/components/Common/LoadingTumbler/LoadingTumbler';
import Layout from '@/components/Layout/Layout';

interface ErrorType {
  error: string;
  message: string;
  statusCode: number;
}

const OauthKakao = () => {
  const router = useRouter();
  const kakaoCode = router.query.code;

  const [codeMutation] = useMutation(KAKAO_CODE, {
    variables: {
      code: kakaoCode
    },
    onCompleted: (data) => {
      localStorage.setItem(ACCESS_TOKEN, data.kakaoLogin.accessToken);
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
    if (kakaoCode) {
      codeMutation();
    }
  }, [kakaoCode, codeMutation]);

  return <LoadingTumbler>로그인 중입니다.</LoadingTumbler>;
};

export default OauthKakao;

OauthKakao.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout bottomNavigator={false}>{page}</Layout>;
};
