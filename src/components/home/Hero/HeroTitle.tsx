import { motion } from 'framer-motion';

import { useHeroTitleAnimation } from '@/hooks/useHeroTitleAnimation';

type HeroTitleProps = {
  subtitle: string;
};

export const HeroTitle = ({ subtitle }: HeroTitleProps) => {
  const { titleControls, subtitleControls, titleVariants, subtitleVariants } =
    useHeroTitleAnimation();

  return (
    <div className="font-title z-10 space-y-2">
      <motion.h1
        className="text-primary text-4xl font-bold tracking-tight md:text-6xl"
        initial="hidden"
        animate={titleControls}
        variants={titleVariants}
      >
        TOMÁS ALVAREZ
      </motion.h1>

      <motion.h2
        className="text-secondary/90 text-3xl font-medium md:text-5xl"
        initial="hidden"
        animate={subtitleControls}
        variants={subtitleVariants}
      >
        {subtitle}
      </motion.h2>
    </div>
  );
};
