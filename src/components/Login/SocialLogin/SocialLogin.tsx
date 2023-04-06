import { useState, useEffect } from 'react';

import SocialLoginButton from './SocialLoginButton';
import { SocialLoginButtonType } from './SocialLoginButton';

import * as Style from './SocialLogin.style';

const SocialLogin = () => {
  const [isIOS, setIsIOS] = useState(false);

  const onClickKakaoLoginButton = () => {};
  const onClickGoogleLoginButton = () => {};
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
