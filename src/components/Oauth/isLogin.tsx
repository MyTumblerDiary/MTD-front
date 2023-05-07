import SubTitle from '../Common/Heading/SubTitle';
import LoadingTumbler from '../Common/LoadingTumbler/LoadingTumbler';

import * as Style from './isLogin.style';

const IsLogin = () => {
  return (
    <Style.PageContainer>
      <LoadingTumbler />
      <SubTitle>로그인 중입니다</SubTitle>
    </Style.PageContainer>
  );
};

export default IsLogin;
