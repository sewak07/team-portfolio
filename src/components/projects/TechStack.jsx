import React from 'react';

export default function TechStack({ technologies = [] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, idx) => (
        <span
          key={idx}
          className="text-xs font-mono px-3 py-1 rounded-lg bg-dark-950 border border-slate-800 text-slate-300 hover:border-brand-indigo/40 hover:text-brand-blue transition-colors shadow-sm"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}
