import { motion } from 'framer-motion';
import { Trans } from 'react-i18next';

type HeroDescriptionProps = {
  i18nKey: string;
};

export const HeroDescription = ({ i18nKey }: HeroDescriptionProps) => {
  return (
    <motion.p
      className="font-body text-primary/90 mt-4 text-base font-bold md:w-3/4 md:text-lg lg:w-2/4"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <Trans
        i18nKey={i18nKey}
        components={[
          <span className="font-title text-sky-300" />,
          <span className="font-title text-secondary" />,
        ]}
      />
    </motion.p>
  );
};
