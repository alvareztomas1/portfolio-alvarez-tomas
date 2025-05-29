import { useAnimation } from 'framer-motion';
import React from 'react';

export const useLogoAnimation = () => {
  const controls = useAnimation();

  React.useEffect(() => {
    controls.start('visible');
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', damping: 10, stiffness: 100 },
    },
  };

  const hoverVariants = {
    hover: {
      scale: 1.3,
      y: -15,
      transition: { type: 'spring', stiffness: 400, damping: 10 },
    },
    tap: { scale: 0.95 },
  };

  const textVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.2, duration: 0.3 },
    },
  };

  return {
    controls,
    containerVariants,
    logoVariants,
    hoverVariants,
    textVariants,
  };
};
