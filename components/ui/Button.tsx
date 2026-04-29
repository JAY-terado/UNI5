import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

const Button = ({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false
}: ButtonProps) => {
  const handleRipple = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const el = e.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(el.clientWidth, el.clientHeight);
    const radius = diameter / 2;
    const rect = el.getBoundingClientRect();

    circle.style.cssText = `
      width:${diameter}px; height:${diameter}px;
      left:${e.clientX - rect.left - radius}px;
      top:${e.clientY - rect.top - radius}px;
      position:absolute; border-radius:50%;
      background:rgba(255,255,255,0.25);
      transform:scale(0); animation:ripple 500ms linear;
      pointer-events:none;
    `;

    el.style.position = 'relative';
    el.style.overflow = 'hidden';
    el.appendChild(circle);

    setTimeout(() => circle.remove(), 600);
  };

  const baseStyles = "px-6 py-3 rounded-lg font-600 transition-all duration-200 text-sm md:text-base inline-flex items-center justify-center relative overflow-hidden";

  const variants = {
    primary: "bg-brand-red text-white hover:bg-brand-red/90 shadow-lg shadow-brand-red/20 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700",
    secondary: "bg-brand-dark dark:bg-white dark:text-brand-dark text-white hover:bg-brand-dark/90 dark:hover:bg-white/90",
    outline: "border-2 border-brand-dark dark:border-white text-brand-dark dark:text-white hover:bg-brand-dark hover:text-white dark:hover:bg-white dark:hover:text-brand-dark",
    ghost: "text-brand-dark dark:text-white hover:bg-gray-100 dark:hover:bg-white/10"
  };

  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "";
  const combinedClasses = `${baseStyles} ${variants[variant]} ${disabledStyles} ${className}`;

  if (href) {
    return (
      <Link href={href} onClick={handleRipple} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={(e) => {
        handleRipple(e);
        onClick?.();
      }}
      className={combinedClasses}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
