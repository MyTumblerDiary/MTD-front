import { motion } from 'framer-motion';

import Svg from '@/components/svg';

const LoadingTumbler = () => {
  return (
    <motion.div
      animate={{
        scale: [0.7, 1, 0.7],
        rotate: [0, 360]
      }}
      transition={{ ease: 'easeIn', duration: 1.5, repeat: 10 }}
    >
      <Svg.LoginTumbler />
    </motion.div>
  );
};

export default LoadingTumbler;
