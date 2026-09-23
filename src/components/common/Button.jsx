import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  target,
  rel,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98]";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5 font-semibold",
    xl: "text-lg px-8 py-4 gap-3 font-semibold",
  };

  const variantStyles = {
    primary: "bg-gradient-to-r from-brand-indigo to-brand-violet text-white shadow-lg shadow-brand-indigo/25 hover:shadow-brand-indigo/40 hover:brightness-110 border border-indigo-400/30",
    secondary: "bg-dark-800 hover:bg-dark-700 text-slate-200 hover:text-white border border-slate-700/60 hover:border-slate-500 shadow-sm",
    accent: "bg-brand-blue hover:bg-sky-400 text-dark-950 font-semibold shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30",
    emerald: "bg-emerald-500 hover:bg-emerald-400 text-dark-950 font-semibold shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30",
    outline: "bg-transparent hover:bg-white/5 text-slate-200 hover:text-white border border-slate-700 hover:border-slate-500",
    ghost: "bg-transparent hover:bg-white/5 text-slate-300 hover:text-white",
    whatsapp: "bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold shadow-lg shadow-[#25D366]/25 hover:shadow-[#25D366]/40"
  };

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 flex-shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />}
    </>
  );

  const combinedClasses = `group ${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} target={target} rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={combinedClasses} {...props}>
      {content}
    </button>
  );
}
