export type Logo = {
  icon: React.ComponentType<{
    size?: number;
    color?: string;
    className?: string;
  }>;
  name: string;
  color: string;
};
