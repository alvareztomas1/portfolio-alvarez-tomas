import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

type ScrollArrowProps = {
  targetId: string;
  section: string;
  size?: number;
  className?: string;
};

export const ScrollArrow = ({
  targetId,
  section,
  size = 16,
  className = '',
}: ScrollArrowProps) => {
  return (
    <motion.a
      href={`#${targetId}`}
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className={`text-secondary flex cursor-pointer items-center justify-center gap-2 rounded-full font-bold ${className}`}
    >
      <p className="font-body">{section}</p>
      <FaArrowDown className="text-secondary" size={size} />
    </motion.a>
  );
};
