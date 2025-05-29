type LinkWrapperProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  title?: string;
  rel?: string;
};

export const LinkWrapper = ({
  href,
  children,
  className = '',
  target,
  title,
  rel,
}: LinkWrapperProps) => {
  return (
    <a
      href={href}
      className={className}
      target={target}
      title={title}
      rel={target === '_blank' ? rel || 'noopener noreferrer' : rel}
    >
      {children}
    </a>
  );
};
