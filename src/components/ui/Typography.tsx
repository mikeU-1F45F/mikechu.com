import type React from 'react';
import type { JSX } from 'react';
import { cn } from '@/lib/utils';

type Era = 'past' | 'present' | 'future';
type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'code' | 'span';
type PresentHeadingVariant = 'windows' | 'linux';

interface TypographyProps {
  children: React.ReactNode;
  era: Era;
  variant: TypographyVariant;
  className?: string;
  presentVariant?: PresentHeadingVariant;
}

export function Typography({
  children,
  era,
  variant,
  className,
  presentVariant = 'windows',
  ...props
}: TypographyProps & React.HTMLAttributes<HTMLElement>) {
  const isHeading = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(variant);
  const isCode = variant === 'code';
  
  const eraClasses = {
    past: {
      heading: 'past-heading',
      body: 'past-body',
      code: 'past-code',
    },
    present: {
      heading: presentVariant === 'windows' ? 'present-heading-windows' : 'present-heading-linux',
      body: 'present-body',
      code: 'present-code',
    },
    future: {
      heading: 'future-heading',
      body: 'future-body',
      code: 'future-code',
    },
  };
  
  const sizeClasses = {
    h1: 'text-4xl font-bold',
    h2: 'text-3xl font-bold',
    h3: 'text-2xl font-semibold',
    h4: 'text-xl font-semibold',
    h5: 'text-lg font-medium',
    h6: 'text-base font-medium',
    p: 'text-base',
    code: 'text-sm',
    span: 'text-base',
  };
  
  const Component = variant as keyof JSX.IntrinsicElements;
  
  const typeClass = isHeading 
    ? eraClasses[era].heading 
    : isCode 
      ? eraClasses[era].code 
      : eraClasses[era].body;
  
  return (
    <Component
      className={cn(typeClass, sizeClasses[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
}

// Convenience components for each era
export function PastTypography({
  children,
  variant,
  className,
  ...props
}: Omit<TypographyProps, 'era'> & React.HTMLAttributes<HTMLElement>) {
  return (
    <Typography era="past" variant={variant} className={className} {...props}>
      {children}
    </Typography>
  );
}

export function PresentTypography({
  children,
  variant,
  className,
  presentVariant = 'windows',
  ...props
}: Omit<TypographyProps, 'era'> & React.HTMLAttributes<HTMLElement>) {
  return (
    <Typography 
      era="present" 
      variant={variant} 
      className={className}
      presentVariant={presentVariant}
      {...props}
    >
      {children}
    </Typography>
  );
}

export function FutureTypography({
  children,
  variant,
  className,
  ...props
}: Omit<TypographyProps, 'era'> & React.HTMLAttributes<HTMLElement>) {
  return (
    <Typography era="future" variant={variant} className={className} {...props}>
      {children}
    </Typography>
  );
}
