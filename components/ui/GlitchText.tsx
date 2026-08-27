import React from 'react';
import { cn } from '@/lib/utils';

interface GlitchTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'p';
  className?: string;
}

export const GlitchText: React.FC<GlitchTextProps> = ({
  text,
  as: Component = 'span',
  className,
}) => {
  return (
    <Component className={cn('glitch-text font-black tracking-wider', className)}>
      {text}
    </Component>
  );
};
