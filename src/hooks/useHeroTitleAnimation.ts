import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export const useHeroTitleAnimation = () => {
  const titleControls = useAnimation();
  const subtitleControls = useAnimation();

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: -40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 100,
        duration: 0.8,
      },
    },
  };

  const subtitleVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
    },
    visible: {
      opacity: 1,
      y: 0,
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      transition: {
        delay: 0.3,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        clipPath: {
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    },
  };

  useEffect(() => {
    const sequence = async () => {
      await titleControls.start('visible');
      await subtitleControls.start('visible');
    };
    sequence();
  }, [titleControls, subtitleControls]);

  return {
    titleControls,
    subtitleControls,
    titleVariants,
    subtitleVariants,
  };
};
