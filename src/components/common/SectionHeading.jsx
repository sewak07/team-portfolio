import React from 'react';
import Badge from './Badge';

export default function SectionHeading({
  badge,
  badgeIcon,
  badgeVariant = 'indigo',
  title,
  highlightText,
  subtitle,
  align = 'center', // 'left', 'center', 'right'
  className = '',
  maxWidth = 'max-w-3xl'
}) {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto'
  };

  return (
    <div className={`flex flex-col ${alignmentClasses[align]} ${maxWidth} ${className} mb-12 sm:mb-16`}>
      {badge && (
        <div className="mb-4">
          <Badge variant={badgeVariant} icon={badgeIcon} size="md">
            {badge}
          </Badge>
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] mb-4">
        {title}{' '}
        {highlightText && (
          <span className="text-gradient-accent inline-block">
            {highlightText}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
