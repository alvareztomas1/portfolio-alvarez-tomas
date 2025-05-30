type CardProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  hoverEffect?: boolean;
};

export const Card = ({
  children,
  className = '',
  as: Component = 'article',
  hoverEffect = true,
}: CardProps) => {
  return (
    <Component
      className={`bg-card-background text-card-text border-card-border flex flex-col items-center gap-4 rounded-2xl border shadow-lg transition-all duration-300 ${hoverEffect ? 'hover:translate-y-[-4px] hover:shadow-xl' : ''} ${className} `}
    >
      {children}
    </Component>
  );
};
