import { ButtonHTMLAttributes, forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
          {
            'bg-[var(--theme-accent)] text-[var(--theme-accent-text)] hover:opacity-90': variant === 'primary',
            'border border-[var(--theme-border)] bg-transparent hover:bg-[var(--theme-accent)] hover:text-[var(--theme-accent-text)]': variant === 'outline',
            'hover:bg-[var(--theme-border)]': variant === 'ghost',
          },
          className
        )}
        style={{
          borderRadius: 'var(--theme-radius-button)',
          boxShadow: variant === 'primary' ? 'var(--theme-shadow-button)' : 'none',
          borderWidth: variant === 'outline' ? 'var(--theme-border-width-button)' : '0',
          borderColor: variant === 'outline' ? 'var(--theme-border)' : 'transparent',
        }}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
