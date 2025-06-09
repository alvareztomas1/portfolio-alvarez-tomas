import type { MotionProps } from 'motion/react';

export const useNavbarAnimations = () => {
  const mobileOverlayAnimation: MotionProps = {
    initial: { height: 0, opacity: 0 },
    animate: { height: 'auto', opacity: 1 },
    exit: { height: 0, opacity: 0 },
    transition: { duration: 0.4, ease: 'easeInOut' },
  };

  const burgerOpenAnimation: MotionProps = {
    initial: { rotate: -180, opacity: 0 },
    animate: { rotate: 0, opacity: 1 },
    exit: { rotate: 180, opacity: 0 },
    transition: { duration: 0.3 },
  };

  const burgerCloseAnimation: MotionProps = {
    initial: { rotate: 0, opacity: 0 },
    animate: { rotate: 180, opacity: 1 },
    exit: { rotate: 0, opacity: 0 },
    transition: { duration: 0.3 },
  };

  const buttonTapAnimation: MotionProps = {
    whileTap: { scale: 0.95 },
  };

  return {
    mobileOverlayAnimation,
    burgerOpenAnimation,
    burgerCloseAnimation,
    buttonTapAnimation,
  };
};
