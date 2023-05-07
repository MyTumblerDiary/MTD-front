import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';

import { KAKAO_CODE } from '@/apollo/mutations';

import IsLogin from '@/components/Oauth/isLogin';
import Layout from '@/components/Layout/Layout';

const OauthKakao = () => {
  const router = useRouter();
  const kakaoCode = router.query.code;

  const [codeMutation] = useMutation(KAKAO_CODE, {
    variables: {
      code: kakaoCode
    },
    onCompleted: (data) => {
      console.log('성공: ', data);
      localStorage.setItem('accessToken', data.kakaoLogin);
      router.push('/');
    },
    onError: (err) => {
      console.log('실패: ', err);
      console.log('메세지: ', err.message);
      // console.log('코드: ', err.statusCode);
    }
  });

  useEffect(() => {
    codeMutation();
  }, [codeMutation, kakaoCode]);

  return <IsLogin />;
};

export default OauthKakao;

OauthKakao.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout bottomNavigator={false}>{page}</Layout>;
};
