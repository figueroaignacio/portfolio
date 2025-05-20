interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical';
}

export function Separator({ orientation = 'horizontal' }: SeparatorProps) {
  const isHorizontal = orientation === 'horizontal';

  return (
    <div className={`bg-border ${isHorizontal ? 'my-6 h-[1px] w-full' : 'mx-6 h-full w-[1px]'}`} />
  );
}
