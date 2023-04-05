import LoginLogo from './LoginLogo/LoginLogo';
import LoginForm from './LoginForm/LoginForm';
import SocialLogin from './SocialLogin/SocialLogin';

import * as Style from './Login.style';

const LoginComponent = () => {
  return (
    <Style.LoginContainer>
      <LoginLogo />
      <LoginForm />
      <SocialLogin />
    </Style.LoginContainer>
  );
};

export default LoginComponent;
