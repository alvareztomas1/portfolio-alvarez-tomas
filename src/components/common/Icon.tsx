interface IconProps {
  title: string;
  icon: React.ReactNode;
  onClick?: () => void;
  description?: string;
}

export const Icon = ({ title, icon, onClick, description }: IconProps) => {
  return (
    <button
      className="text-primary hover:text-secondary flex cursor-pointer flex-col items-center justify-center transition-all"
      title={title}
      onClick={onClick}
      type="button"
    >
      {icon}
      <p className="font-body text-sm font-bold">{description}</p>
    </button>
  );
};
