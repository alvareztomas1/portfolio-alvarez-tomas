import { type MotionProps, type Variant, motion } from 'framer-motion';

import type { Logo } from '@/types/logos.types';

type AnimatedLogoProps = {
  logo: Logo;
  iconSize: number;
  onLogoClick: (name: string) => void;
  variants: MotionProps['variants'];
  hoverVariants: MotionProps['variants'];
  textVariants: {
    hidden: Variant;
    visible: Variant;
  };
};

export const AnimatedLogo = ({
  logo,
  iconSize,
  onLogoClick,
  variants,
  hoverVariants,
  textVariants,
}: AnimatedLogoProps) => {
  const Icon = logo.icon;

  return (
    <motion.div
      className="relative flex flex-col items-center"
      variants={variants}
    >
      <motion.button
        className="flex cursor-pointer flex-col items-center justify-center gap-1 p-2 focus:outline-none sm:p-4"
        onClick={() => onLogoClick(logo.name)}
        variants={hoverVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <Icon
          size={iconSize}
          color={logo.color}
          className="h-8 w-8 drop-shadow-lg transition-all duration-300 group-hover:drop-shadow-xl sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14"
        />
        <motion.span
          className="text-xs font-bold select-none sm:text-sm"
          style={{ color: logo.color }}
          variants={textVariants}
        >
          {logo.name}
        </motion.span>
      </motion.button>
    </motion.div>
  );
};
