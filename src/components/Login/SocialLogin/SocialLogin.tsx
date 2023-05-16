import { useState, useEffect } from 'react';

import SocialLoginButton from './SocialLoginButton';
import { SocialLoginButtonType } from './SocialLoginButton';

import * as Style from './SocialLogin.style';

const SocialLogin = () => {
  const [isIOS, setIsIOS] = useState(false);

  const onClickKakaoLoginButton = () => {
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_RESTAPI_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_CALLBACK_URL}&response_type=code`;
    window.location.href = KAKAO_AUTH_URL;
  };
  const onClickGoogleLoginButton = () => {
    const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_CALLBACK_URL}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email`;
    window.location.href = GOOGLE_AUTH_URL;
  };
  const onClickAppleLoginButton = () => {};

  const KakaoLoginProps: SocialLoginButtonType = {
    size: 'lg',
    name: 'kakao',
    onClick: onClickKakaoLoginButton
  };

  const GoogleLoginProps: SocialLoginButtonType = {
    size: 'lg',
    name: 'google',
    onClick: onClickGoogleLoginButton
  };

  const AppleLoginProps: SocialLoginButtonType = {
    size: 'lg',
    name: 'apple',
    onClick: onClickAppleLoginButton
  };

  useEffect(() => {
    const platform = navigator.userAgent?.toLowerCase();
    if (platform.indexOf('iphone') !== -1 || platform.indexOf('ipad') !== -1) {
      setIsIOS(true);
    }
  }, []);

  return (
    <Style.SocialLoginContainer>
      <SocialLoginButton {...KakaoLoginProps} />
      <SocialLoginButton {...GoogleLoginProps} />
      {isIOS && <SocialLoginButton {...AppleLoginProps} />}
    </Style.SocialLoginContainer>
  );
};

export default SocialLogin;
