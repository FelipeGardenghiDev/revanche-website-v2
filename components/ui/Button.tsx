import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  href,
  isExternal,
  fullWidth = false,
  disabled,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-extrabold uppercase tracking-wider transition-all duration-300 rounded cursor-pointer text-center';

  const sizeStyles = {
    sm: 'text-xs py-2 px-3',
    md: 'text-sm lg:text-base py-3 px-6',
    lg: 'text-base lg:text-lg py-4 px-8',
  }[size];

  const variantStyles = {
    primary:
      'bg-[#AB2217] hover:bg-[#AB2217]/85 text-[#D9CDB5] border-2 border-[#D9CDB5] shadow-lg hover:shadow-[#AB2217]/20',
    secondary:
      'bg-[#D9CDB5] hover:bg-[#D9CDB5]/85 text-[#000000] border-2 border-[#AB2217] shadow-lg',
    outline:
      'bg-transparent hover:bg-[#AB2217] text-[#D9CDB5] hover:text-[#FFFFFF] border-2 border-[#AB2217]',
    ghost:
      'bg-transparent hover:bg-[#D9CDB5]/10 text-[#D9CDB5] hover:text-[#AB2217] border-0',
  }[variant];

  const widthStyle = fullWidth ? 'w-full' : '';
  const disabledStyle = disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '';

  const combinedClasses = cn(
    baseStyles,
    sizeStyles,
    variantStyles,
    widthStyle,
    disabledStyle,
    className
  );

  if (href) {
    if (isExternal || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('https://wa.me')) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled} {...props}>
      {children}
    </button>
  );
};
