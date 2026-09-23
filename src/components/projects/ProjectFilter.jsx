import React from 'react';

export default function ProjectFilter({
  categories = ['All', 'Websites', 'E-Commerce', 'Web Apps', 'Content'],
  activeCategory = 'All',
  onSelectCategory
}) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      {categories.map((cat) => {
        const isActive = activeCategory === cat;

        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              isActive
                ? 'bg-brand-indigo text-white shadow-lg shadow-brand-indigo/30 border border-indigo-400/40 scale-105'
                : 'bg-dark-900/90 text-slate-400 hover:text-white hover:bg-dark-850 border border-slate-800'
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
