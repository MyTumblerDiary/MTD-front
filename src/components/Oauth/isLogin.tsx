import { motion } from 'framer-motion';

import Svg from '../svg';

import SubTitle from '../Common/Heading/SubTitle';

import * as Style from './isLogin.style';

const IsLogin = () => {
  return (
    <Style.PageContainer>
      <motion.div
        animate={{
          scale: [0.7, 1, 0.7],
          rotate: [0, 360]
        }}
        transition={{ ease: 'easeIn', duration: 1.5, repeat: 10 }}
      >
        <Svg.LoginTumbler />
      </motion.div>
      <SubTitle>로그인 중입니다</SubTitle>
    </Style.PageContainer>
  );
};

export default IsLogin;
