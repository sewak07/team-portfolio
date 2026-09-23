import React from 'react';
import { 
  Flame, 
  Video, 
  Share2, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Play, 
  Calendar,
  Layers,
  Target
} from 'lucide-react';
import { InstagramIcon } from '../common/SocialIcons';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import Badge from '../common/Badge';
import MockupVisual from '../common/MockupVisual';

export default function SocialMediaShowcase() {
  const contentWorkflow = [
    { step: "01", name: "Strategy", desc: "Define target audience hooks & content pillars" },
    { step: "02", name: "Content Planning", desc: "Monthly calendar with high-converting topics" },
    { step: "03", name: "Video Production", desc: "9:16 vertical short-form shooting & scripting" },
    { step: "04", name: "Commercial Editing", desc: "Kinetic motion graphics, sound design & captions" },
    { step: "05", name: "Graphic Design", desc: "Carousel master decks & brand promo banners" },
    { step: "06", name: "Consistent Posting", desc: "Optimized time-of-day posting & hashtags" },
    { step: "07", name: "Audience Engagement", desc: "DM routing to WhatsApp customer inquiry funnel" },
    { step: "08", name: "Paid Amplification", desc: "Meta ad boosting for top performing creatives" },
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-dark-950">
      {/* Background glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <Container>
        <SectionHeading
          badge="High-Retention Content"
          badgeIcon={Flame}
          badgeVariant="violet"
          title="We Don't Just Build Websites."
          highlightText="We Create Attention."
          subtitle="A website without audience traffic is an empty storefront. We produce the visual content, short-form reels, and social media campaigns that bring genuine customer interest."
        />

        {/* Visual Reels & Mockup Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Visual Reels Trio (5 cols) */}
          <div className="lg:col-span-6 flex flex-wrap sm:flex-nowrap justify-center gap-4">
            <div className="w-full sm:w-1/2">
              <MockupVisual type="social-reel" title="Product Hook Reel" />
            </div>
            <div className="w-full sm:w-1/2 sm:translate-y-8">
              <MockupVisual type="social-reel" title="Brand Story & Behind The Scenes" />
            </div>
          </div>

          {/* Value Highlights & Workflow (7 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center border border-purple-500/30">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Full-Service Creative Production</h3>
                  <p className="text-xs text-slate-400">Everything from scripting to editing and posting</p>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                Short-form video is the #1 organic growth driver for local and retail businesses today. We handle the entire video lifecycle so you never have to worry about what to post next.
              </p>

              {/* Step Flow List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-800">
                {contentWorkflow.map((item) => (
                  <div key={item.step} className="bg-dark-900/90 p-3 rounded-xl border border-slate-800/80 space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-purple-400 font-bold">{item.step}</span>
                      <span className="text-xs font-bold text-white">{item.name}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-tight">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button
                to="/services"
                variant="primary"
                size="md"
                icon={ArrowRight}
                className="w-full sm:w-auto"
              >
                Explore Social Media Services
              </Button>
              <Button
                to="/contact"
                variant="secondary"
                size="md"
                className="w-full sm:w-auto"
              >
                Request Content Package Quote
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
