interface IconProps {
  icon: React.ReactNode;
  title?: string;
  onClick?: () => void;
  description?: string;
  hoverEffect?: boolean;
}

export const Icon = ({
  title,
  icon,
  onClick,
  description,
  hoverEffect = true,
}: IconProps) => {
  return (
    <button
      className={`text-primary flex flex-col items-center justify-center ${hoverEffect ? 'hover:text-secondary cursor-pointer transition-all' : ''}`}
      title={title}
      onClick={onClick}
      type="button"
    >
      {icon}
      <p className="font-body text-sm font-bold">{description}</p>
    </button>
  );
};
