import { motion } from 'framer-motion';

import { AnimatedLogo } from '@components/common/AnimatedLogo';

import { useLogoAnimation } from '@/hooks/useLogosAnimation';
import type { Logo } from '@/types/logos.types';

type AnimatedLogosProps = {
  logos: Logo[];
  iconSize?: number;
  className?: string;
  onLogoClick?: (name: string) => void;
};

export const AnimatedLogos = ({
  logos,
  iconSize = 60,
  className = '',
  onLogoClick = () => {},
}: AnimatedLogosProps) => {
  const {
    controls,
    containerVariants,
    logoVariants,
    hoverVariants,
    textVariants,
  } = useLogoAnimation();

  return (
    <motion.div
      className={`flex min-h-[8rem] flex-wrap items-center justify-center gap-4 px-2 sm:gap-6 sm:px-4 ${className}`}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {logos.map((logo) => (
        <AnimatedLogo
          key={logo.name}
          logo={logo}
          iconSize={iconSize}
          onLogoClick={onLogoClick}
          variants={logoVariants}
          hoverVariants={hoverVariants}
          textVariants={textVariants}
        />
      ))}
    </motion.div>
  );
};
