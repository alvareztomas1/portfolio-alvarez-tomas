type SpanProps = {
  text: string;
  bgColor: string;
  textColor: string;
};

export const Span = ({ text, bgColor, textColor }: SpanProps) => {
  const styles =
    'font-body cursor-default rounded-full px-2 py-1 text-xs md:text-sm font-bold';

  return <span className={`${styles} ${bgColor} ${textColor}`}>{text}</span>;
};
