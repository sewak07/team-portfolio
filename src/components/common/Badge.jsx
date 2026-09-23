import React from 'react';

export default function Badge({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  icon: Icon
}) {
  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 gap-1',
    md: 'text-xs px-3 py-1 gap-1.5 font-medium',
    lg: 'text-sm px-3.5 py-1.5 gap-2 font-medium',
  };

  const variantStyles = {
    default: 'bg-slate-800/80 text-slate-300 border border-slate-700/60',
    indigo: 'bg-indigo-950/60 text-indigo-300 border border-indigo-500/30 shadow-sm shadow-indigo-950',
    blue: 'bg-sky-950/60 text-sky-300 border border-sky-500/30',
    emerald: 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/30',
    violet: 'bg-purple-950/60 text-purple-300 border border-purple-500/30',
    amber: 'bg-amber-950/60 text-amber-300 border border-amber-500/30',
    tag: 'bg-dark-800 text-slate-400 border border-slate-700/50 hover:text-slate-200 hover:border-slate-600 transition-colors',
    client: 'bg-emerald-900/40 text-emerald-400 border border-emerald-500/40 font-semibold',
    demo: 'bg-sky-900/40 text-sky-400 border border-sky-500/40 font-semibold',
    concept: 'bg-purple-900/40 text-purple-400 border border-purple-500/40 font-semibold'
  };

  return (
    <span className={`inline-flex items-center rounded-full ${sizeStyles[size]} ${variantStyles[variant] || variantStyles.default} ${className}`}>
      {Icon && <Icon className="w-3.5 h-3.5" />}
      <span>{children}</span>
    </span>
  );
}
