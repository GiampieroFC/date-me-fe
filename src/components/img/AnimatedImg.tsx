import { motion } from 'framer-motion';
import type React from 'react';
import { useAnimatedImage } from '../../stores/animated-image/animatedImage.store';

interface Props {
  img: string;
}

const variants = {
  normal: {
    scale: [0, 0, 1, 1],
    rotate: [0, 0, -20, 15],
  },
  big: {
    scale: [1, 20],
    opacity: [1, 0.5],
  }
};

const AnimatedImg: React.FC<Props> = ({ img }) => {

  const animate = useAnimatedImage(state => state.animate);

  return (
    <motion.img
      animate={animate}
      variants={variants}
      transition={{
        delay: animate === 'normal' ? 1.5 : 0.0,
        duration: 1.5
      }}
      width={170}
      className='absolute -top-20 -right-2 border rounded-md aspect-[4/3]'
      src={img}
      alt="chico da una flor a una chica"
    />

  );
};

export default AnimatedImg;
