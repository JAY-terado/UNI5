import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  bg?: 'white' | 'gray' | 'dark' | 'red';
}

const SectionWrapper = ({ children, id, className = '', bg = 'white' }: SectionWrapperProps) => {
  const bgColors = {
    white: 'bg-transparent',
    gray: 'bg-black/[0.02] dark:bg-white/[0.02]',
    dark: 'bg-brand-dark/90 dark:bg-transparent backdrop-blur-sm',
    red: 'bg-brand-red/90 dark:bg-brand-red/90 backdrop-blur-sm',
  };

  const borderTop = {
    white: '',
    gray: 'border-t border-b border-black/[0.04] dark:border-white/[0.04]',
    dark: '',
    red: '',
  };

  return (
    <section
      id={id}
      className={`relative py-16 md:py-24 ${bgColors[bg]} ${borderTop[bg]} ${className}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
