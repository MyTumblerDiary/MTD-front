import { motion } from 'framer-motion';

import Svg from '@/components/svg';
import SubTitle from '../Heading/SubTitle';

import * as Style from './LoadingTumbler.style';

interface LoadingTumblerProps {
  children: string;
}

const LoadingTumbler = ({ children }: LoadingTumblerProps) => {
  return (
    <Style.LoadingTumblerContainer>
      <motion.div
        animate={{
          scale: [0.7, 1, 0.7],
          rotate: [0, 360]
        }}
        transition={{ ease: 'easeIn', duration: 1.5, repeat: 10 }}
      >
        <Svg.LoginTumbler />
      </motion.div>
      <SubTitle>{children}</SubTitle>
    </Style.LoadingTumblerContainer>
  );
};

export default LoadingTumbler;
