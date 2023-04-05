import LoginLogo from './LoginLogo/LoginLogo';
import LoginForm from './LoginForm/LoginForm';
import SocialLogin from './SocialLogin/SocialLogin';
import SubArea from './SubArea/SubArea';

import * as Style from './Login.style';

const LoginComponent = () => {
  return (
    <Style.LoginContainer>
      <Style.LogoContainer>
        <LoginLogo />
      </Style.LogoContainer>

      <Style.MainContainer>
        <Style.SystemLoginContainer>
          <LoginForm />
          <SubArea />
        </Style.SystemLoginContainer>
        <SocialLogin />
      </Style.MainContainer>
    </Style.LoginContainer>
  );
};

export default LoginComponent;
