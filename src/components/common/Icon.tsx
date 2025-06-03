interface IconProps {
  icon: React.ReactNode;
  title?: string;
  onClick?: () => void;
  description?: string;
  hoverEffect?: boolean;
  row?: boolean;
  gap?: number;
  textSize?: string;
}

export const Icon = ({
  title,
  icon,
  onClick,
  description,
  hoverEffect = true,
  row = false,
  gap,
  textSize = 'text-sm',
}: IconProps) => {
  return (
    <button
      className={`text-primary flex items-center justify-center ${textSize ? textSize : 'text-sm'} ${gap ? `gap-${gap}` : ''} ${row ? 'flex-row' : 'flex-col'} ${hoverEffect ? 'hover:text-secondary cursor-pointer transition-all' : ''}`}
      title={title}
      onClick={onClick}
      type="button"
    >
      {icon}
      <p className={`font-body font-bold`}>{description}</p>
    </button>
  );
};
