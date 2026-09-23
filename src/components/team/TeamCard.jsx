import React from 'react';
import { Code, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon, YoutubeIcon, DribbbleIcon } from '../common/SocialIcons';
import Badge from '../common/Badge';

export default function TeamCard({ member }) {
  // Initials for avatar fallback
  const initials = member.name
    .split(' ')
    .map(n => n[0])
    .join('');

  return (
    <div className="glass-card rounded-3xl p-7 border border-slate-800 flex flex-col justify-between group space-y-6">
      <div className="space-y-5">
        {/* Avatar & Header */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-indigo via-brand-violet to-brand-blue flex items-center justify-center font-extrabold text-xl text-white shadow-lg shadow-brand-indigo/25 group-hover:scale-105 transition-transform duration-300 border border-white/10">
            {initials}
          </div>
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-brand-blue transition-colors">
              {member.name}
            </h3>
            <span className="text-xs font-mono text-brand-blue font-medium block mt-0.5">
              {member.role}
            </span>
          </div>
        </div>

        {/* Bio */}
        <p className="text-slate-300 text-sm leading-relaxed">
          {member.bio}
        </p>

        {/* Skills Tag Pills */}
        <div className="space-y-2 pt-2 border-t border-slate-800/80">
          <span className="text-[11px] font-mono uppercase text-slate-500 font-bold block">
            Specializations:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {member.skills.map((skill, idx) => (
              <span
                key={idx}
                className="text-[11px] px-2.5 py-1 rounded-lg bg-dark-950 border border-slate-800 text-slate-300 font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
        {member.socials.github && (
          <a
            href={member.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-dark-950 text-slate-400 hover:text-white hover:bg-dark-800 border border-slate-800 flex items-center justify-center transition-colors"
            aria-label={`${member.name} GitHub`}
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        )}
        {member.socials.linkedin && (
          <a
            href={member.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-dark-950 text-slate-400 hover:text-sky-400 hover:bg-dark-800 border border-slate-800 flex items-center justify-center transition-colors"
            aria-label={`${member.name} LinkedIn`}
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
        )}
        {member.socials.twitter && (
          <a
            href={member.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-dark-950 text-slate-400 hover:text-brand-blue hover:bg-dark-800 border border-slate-800 flex items-center justify-center transition-colors"
            aria-label={`${member.name} Twitter`}
          >
            <TwitterIcon className="w-4 h-4" />
          </a>
        )}
        {member.socials.instagram && (
          <a
            href={member.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-dark-950 text-slate-400 hover:text-pink-400 hover:bg-dark-800 border border-slate-800 flex items-center justify-center transition-colors"
            aria-label={`${member.name} Instagram`}
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
        )}
        {member.socials.dribbble && (
          <a
            href={member.socials.dribbble}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-dark-950 text-slate-400 hover:text-rose-400 hover:bg-dark-800 border border-slate-800 flex items-center justify-center transition-colors"
            aria-label={`${member.name} Dribbble`}
          >
            <DribbbleIcon className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}
