import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

const Badge = ({ children, className = '' }: BadgeProps) => {
  return (
    <span className={`inline-block px-3 py-1 rounded-full bg-brand-red/10 text-brand-red text-xs font-700 tracking-wider uppercase ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
