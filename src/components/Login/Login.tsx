import LoginLogo from './LoginLogo/LoginLogo';
import LoginForm from './LoginForm/LoginForm';

import * as Style from './Login.style';

const LoginComponent = () => {
  return (
    <Style.LoginContainer>
      <LoginLogo />
      <LoginForm />
    </Style.LoginContainer>
  );
};

export default LoginComponent;
