import React from 'react';
import { 
  Globe, 
  Smartphone, 
  BarChart3, 
  ShoppingBag, 
  Search, 
  Star, 
  MessageSquare, 
  CheckCircle2, 
  TrendingUp, 
  Flame, 
  Users, 
  Play, 
  Heart, 
  Share2, 
  Bookmark,
  ExternalLink,
  ShieldCheck,
  Layers,
  Calendar,
  Zap
} from 'lucide-react';

export default function MockupVisual({
  type = 'browser', // 'browser' | 'mobile' | 'dashboard' | 'social-reel' | 'google-seo' | 'hero-composition'
  projectKey = 'christian-store', // 'christian-store' | 'ecommerce' | 'gym' | 'social' | 'admin'
  title = '',
  imageSrc,
  className = ''
}) {
  // If an imageSrc is passed and loaded successfully, we can render an image in the frame
  // Otherwise we render the rich designed UI vector mockup

  if (type === 'hero-composition') {
    return (
      <div className={`relative w-full aspect-auto max-w-xl mx-auto lg:max-w-none ${className}`}>
        {/* Ambient Glows */}
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-brand-indigo/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />

        {/* Main Desktop Card: High Performance Web App */}
        <div className="relative z-10 glass-panel rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl shadow-black/80">
          {/* Top Bar */}
          <div className="bg-dark-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <div className="bg-dark-950/80 px-3 py-1 rounded-md text-[11px] text-slate-400 font-mono flex items-center gap-1.5 border border-slate-800">
              <Globe className="w-3 h-3 text-brand-blue" />
              <span>client-storefront.live</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] text-emerald-400 font-medium">99+ Core Vitals</span>
            </div>
          </div>

          {/* Web App Visual Body */}
          <div className="p-5 bg-gradient-to-b from-dark-900 via-dark-850 to-dark-950 space-y-4">
            {/* Nav mockup inside window */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-brand-indigo to-brand-blue flex items-center justify-center text-white text-xs font-bold">N</div>
                <span className="font-semibold text-xs tracking-wider text-slate-200">STOREFRONT PRO</span>
              </div>
              <div className="flex items-center gap-3 text-[11px] text-slate-400">
                <span className="text-white font-medium">Catalog</span>
                <span>Wholesale</span>
                <span>About</span>
                <div className="bg-indigo-600 text-white px-2.5 py-0.5 rounded text-[10px]">Cart (3)</div>
              </div>
            </div>

            {/* Hero banner inside mockup */}
            <div className="bg-gradient-to-r from-indigo-950/80 to-dark-800 p-4 rounded-xl border border-indigo-500/20 flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-brand-blue font-semibold">Featured Collection</span>
                <h4 className="text-sm font-bold text-white">Modern Digital Retail Store</h4>
                <p className="text-[11px] text-slate-400">Integrated with instant WhatsApp checkout & automated stock sync.</p>
              </div>
              <div className="hidden sm:flex flex-col items-end gap-1">
                <span className="text-xs font-bold text-emerald-400">Live Inventory</span>
                <span className="text-[10px] text-slate-500">Fast CDN Powered</span>
              </div>
            </div>

            {/* Grid of items */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { name: "Premium Study Bible", cat: "Bestseller", price: "Rs. 2,450", color: "from-blue-600/20 to-indigo-600/10" },
                { name: "Daily Devotional Set", cat: "New Release", price: "Rs. 1,800", color: "from-purple-600/20 to-pink-600/10" },
                { name: "Faith Gift Box", cat: "Gift Bundle", price: "Rs. 3,200", color: "from-emerald-600/20 to-teal-600/10" }
              ].map((item, idx) => (
                <div key={idx} className="bg-dark-900/90 p-3 rounded-lg border border-slate-800 space-y-2">
                  <div className={`h-16 rounded bg-gradient-to-br ${item.color} flex items-center justify-center text-slate-500 border border-slate-700/30`}>
                    <ShoppingBag className="w-5 h-5 text-slate-400" />
                  </div>
                  <div>
                    <div className="text-[9px] text-brand-blue font-medium">{item.cat}</div>
                    <div className="text-[11px] font-semibold text-slate-200 truncate">{item.name}</div>
                    <div className="text-[11px] font-bold text-emerald-400 mt-1">{item.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Mobile Card: WhatsApp Checkout (Overlay on bottom-right) */}
        <div className="absolute -bottom-6 -right-2 sm:-right-6 z-20 w-56 sm:w-64 bg-dark-900/95 backdrop-blur-xl rounded-2xl p-4 border border-emerald-500/30 shadow-2xl shadow-black">
          <div className="flex items-center gap-2.5 mb-2.5 pb-2 border-b border-slate-800">
            <div className="w-8 h-8 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366]">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">WhatsApp Fast Order</div>
              <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Instant Inquiry
              </div>
            </div>
          </div>
          <div className="bg-dark-950 p-2 rounded-lg text-[11px] text-slate-300 font-sans border border-slate-800 space-y-1 mb-2">
            <p className="text-slate-400 text-[10px]">Auto-formatted payload:</p>
            <p className="text-white font-medium">"Hello! I'd like to order 2x Study Bible (SKU #702)"</p>
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-400">
            <span>Direct routing</span>
            <span className="text-emerald-400 font-semibold">1-Tap Ready</span>
          </div>
        </div>

        {/* Floating Badge: SEO & Google Search Result (Overlay on top-left) */}
        <div className="absolute -top-6 -left-2 sm:-left-6 z-20 bg-dark-900/95 backdrop-blur-xl rounded-2xl p-3 border border-sky-500/30 shadow-2xl shadow-black hidden sm:flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-sky-500/10 flex items-center justify-center text-brand-blue border border-sky-500/20">
            <Search className="w-4 h-4" />
          </div>
          <div className="text-left">
            <div className="text-xs font-bold text-white flex items-center gap-1">
              Google Local Search
              <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
            </div>
            <div className="text-[11px] text-slate-400">Verified Business Profile & SEO</div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'browser') {
    return (
      <div className={`glass-panel rounded-2xl overflow-hidden border border-slate-700/60 shadow-xl ${className}`}>
        {/* Browser Top Nav */}
        <div className="bg-dark-900 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <div className="bg-dark-950 px-4 py-1 rounded-md text-xs text-slate-400 font-mono flex items-center gap-2 border border-slate-800/80 max-w-xs truncate">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>https://{projectKey}.live</span>
          </div>
          <div className="text-slate-600 text-xs">
            <ExternalLink className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Browser Content */}
        <div className="p-6 bg-dark-900/70 min-h-[260px] flex flex-col justify-center">
          {projectKey === 'christian-store' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded bg-indigo-600 flex items-center justify-center font-bold text-xs text-white">F&G</div>
                  <span className="font-bold text-sm text-slate-200">Faith & Grace Storefront</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="px-2 py-0.5 bg-dark-800 rounded">Books</span>
                  <span className="px-2 py-0.5 bg-dark-800 rounded">Gifts</span>
                  <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded">WhatsApp Order</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-dark-950 p-3 rounded-lg border border-slate-800 space-y-1.5">
                  <div className="h-16 bg-indigo-900/30 rounded flex items-center justify-center text-indigo-400 text-xs font-semibold">Study Bible</div>
                  <div className="text-xs font-semibold text-white">Deluxe Hardcover</div>
                  <div className="text-xs text-emerald-400 font-bold">Rs. 2,450</div>
                </div>
                <div className="bg-dark-950 p-3 rounded-lg border border-slate-800 space-y-1.5">
                  <div className="h-16 bg-purple-900/30 rounded flex items-center justify-center text-purple-400 text-xs font-semibold">Devotional</div>
                  <div className="text-xs font-semibold text-white">Daily Reflections</div>
                  <div className="text-xs text-emerald-400 font-bold">Rs. 1,600</div>
                </div>
                <div className="bg-dark-950 p-3 rounded-lg border border-slate-800 space-y-1.5">
                  <div className="h-16 bg-emerald-900/30 rounded flex items-center justify-center text-emerald-400 text-xs font-semibold">Gift Package</div>
                  <div className="text-xs font-semibold text-white">Handcrafted Box</div>
                  <div className="text-xs text-emerald-400 font-bold">Rs. 3,100</div>
                </div>
              </div>
            </div>
          )}

          {projectKey === 'ecommerce' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                <span className="text-xs font-mono text-indigo-400">API: /v1/products/query</span>
                <span className="text-xs bg-indigo-900/40 text-indigo-300 px-2 py-0.5 rounded border border-indigo-700/50">JWT Authorized</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-dark-950 p-3 rounded-lg border border-slate-800">
                  <span className="text-[10px] text-slate-500 uppercase">Cart State Engine</span>
                  <div className="text-sm font-bold text-white mt-1">Redux State Sync</div>
                  <div className="text-xs text-slate-400 mt-2">Active Session: 4 items (Rs. 8,900)</div>
                </div>
                <div className="bg-dark-950 p-3 rounded-lg border border-slate-800">
                  <span className="text-[10px] text-slate-500 uppercase">Order Telemetry</span>
                  <div className="text-sm font-bold text-emerald-400 mt-1">Live Status Pipeline</div>
                  <div className="text-xs text-slate-400 mt-2">Processing → Packed → Dispatched</div>
                </div>
              </div>
            </div>
          )}

          {projectKey === 'gym' && (
            <div className="space-y-3">
              <div className="bg-gradient-to-r from-orange-600/20 to-red-600/10 p-3 rounded-lg border border-orange-500/20 flex justify-between items-center">
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider">Pulse Elite Fitness</div>
                  <div className="text-[11px] text-slate-400">Class Timetable & Membership System</div>
                </div>
                <span className="text-xs font-semibold text-orange-400 bg-orange-950/60 px-2.5 py-1 rounded">Live Schedule</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2 bg-dark-950 rounded border border-slate-800">
                  <div className="text-slate-400 text-[10px]">6:30 AM</div>
                  <div className="font-semibold text-white">HIIT Blast</div>
                </div>
                <div className="p-2 bg-dark-950 rounded border border-slate-800">
                  <div className="text-slate-400 text-[10px]">5:00 PM</div>
                  <div className="font-semibold text-white">Strength & Core</div>
                </div>
                <div className="p-2 bg-dark-950 rounded border border-slate-800">
                  <div className="text-slate-400 text-[10px]">6:30 PM</div>
                  <div className="font-semibold text-white">Power Yoga</div>
                </div>
              </div>
            </div>
          )}

          {(!projectKey || (projectKey !== 'christian-store' && projectKey !== 'ecommerce' && projectKey !== 'gym')) && (
            <div className="text-center py-6">
              <div className="w-12 h-12 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center mx-auto mb-3">
                <Globe className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-semibold text-white">{title || "Modern Web Architecture"}</h4>
              <p className="text-xs text-slate-400 mt-1">High speed, responsive styling and secure endpoints.</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (type === 'mobile') {
    return (
      <div className={`w-full max-w-[280px] mx-auto rounded-[32px] p-3 bg-dark-900 border-2 border-slate-700 shadow-2xl ${className}`}>
        {/* Notch & Speaker */}
        <div className="flex justify-center mb-2">
          <div className="w-20 h-4 bg-dark-950 rounded-full flex items-center justify-center">
            <div className="w-8 h-1 bg-slate-700 rounded-full" />
          </div>
        </div>

        {/* Mobile Screen Content */}
        <div className="rounded-[22px] bg-dark-950 p-4 min-h-[380px] flex flex-col justify-between border border-slate-800/80">
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <span className="text-[11px] font-bold text-white">Direct WhatsApp</span>
              <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Ready
              </span>
            </div>

            <div className="bg-[#0b141a] p-3 rounded-xl border border-slate-800 space-y-2 text-xs">
              <div className="bg-[#005c4b] text-white p-2.5 rounded-lg text-[11px] space-y-1">
                <p className="font-semibold text-emerald-200">🛒 New Customer Order</p>
                <p>1x Study Bible Hardcover</p>
                <p>Total: Rs. 2,450</p>
                <p className="text-[9px] text-slate-300 text-right">10:42 AM ✓✓</p>
              </div>
              <div className="bg-[#202c33] text-slate-200 p-2.5 rounded-lg text-[11px]">
                <p>Thank you! Your order has been logged. Preparing shipment.</p>
                <p className="text-[9px] text-slate-400 text-right">10:44 AM</p>
              </div>
            </div>
          </div>

          <div className="mt-4 bg-[#25D366] text-dark-950 font-bold text-center py-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-[#25D366]/20">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>1-Tap Order via WhatsApp</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'dashboard') {
    return (
      <div className={`glass-panel rounded-2xl overflow-hidden border border-slate-700/60 shadow-xl ${className}`}>
        <div className="bg-dark-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-brand-indigo" />
            <span className="text-xs font-bold text-white">Analytics & Operations Control</span>
          </div>
          <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">Live Sync Active</span>
        </div>

        <div className="p-5 bg-dark-950/90 space-y-4">
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-dark-900 p-3 rounded-xl border border-slate-800">
              <div className="text-[10px] text-slate-400 uppercase font-medium">Orders Today</div>
              <div className="text-lg font-bold text-white mt-1">28</div>
              <div className="text-[10px] text-emerald-400 flex items-center gap-0.5 mt-0.5">
                <TrendingUp className="w-3 h-3" /> +14% vs yesterday
              </div>
            </div>
            <div className="bg-dark-900 p-3 rounded-xl border border-slate-800">
              <div className="text-[10px] text-slate-400 uppercase font-medium">Gross Revenue</div>
              <div className="text-lg font-bold text-white mt-1">Rs. 64,200</div>
              <div className="text-[10px] text-brand-blue font-mono mt-0.5">Direct + WhatsApp</div>
            </div>
            <div className="bg-dark-900 p-3 rounded-xl border border-slate-800">
              <div className="text-[10px] text-slate-400 uppercase font-medium">Conversion Rate</div>
              <div className="text-lg font-bold text-emerald-400 mt-1">4.8%</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Mobile Optimized</div>
            </div>
          </div>

          <div className="bg-dark-900 p-3.5 rounded-xl border border-slate-800 space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-slate-300">Inventory & Stock Alerts</span>
              <span className="text-slate-500 text-[11px]">Real-time DB</span>
            </div>
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between items-center bg-dark-950 p-2 rounded border border-slate-800/80">
                <span className="text-slate-300">Study Bible (Hardcover Navy)</span>
                <span className="text-emerald-400 font-semibold">42 in stock</span>
              </div>
              <div className="flex justify-between items-center bg-dark-950 p-2 rounded border border-slate-800/80">
                <span className="text-slate-300">Faith Journal Collection</span>
                <span className="text-amber-400 font-semibold">5 low stock</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'social-reel') {
    return (
      <div className={`relative w-full max-w-[240px] aspect-[9/16] rounded-2xl overflow-hidden bg-gradient-to-b from-slate-900 via-dark-850 to-dark-950 border border-slate-700/80 shadow-2xl flex flex-col justify-between p-4 ${className}`}>
        {/* Top bar inside reel */}
        <div className="flex items-center justify-between z-10 text-white">
          <span className="text-[10px] font-bold bg-rose-600/90 px-2 py-0.5 rounded-full flex items-center gap-1">
            <Flame className="w-3 h-3" /> REEL
          </span>
          <span className="text-[10px] text-slate-300">HD 60fps</span>
        </div>

        {/* Center Visual Graphics Hook */}
        <div className="text-center my-auto z-10 space-y-2">
          <div className="w-12 h-12 rounded-full bg-brand-indigo/30 border border-indigo-400/40 text-brand-blue flex items-center justify-center mx-auto shadow-lg shadow-indigo-500/20">
            <Play className="w-6 h-6 fill-brand-blue ml-0.5" />
          </div>
          <div className="text-xs font-black text-white uppercase tracking-wider bg-dark-950/80 px-2.5 py-1 rounded-md inline-block border border-slate-700/50">
            {title || "Brand Visual Hook"}
          </div>
        </div>

        {/* Bottom Social Engagement Overlay */}
        <div className="z-10 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-200">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-brand-indigo to-brand-blue flex items-center justify-center text-[9px] font-bold">N</div>
              <span className="text-[11px] font-bold">@client.brand</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
              <Share2 className="w-4 h-4" />
            </div>
          </div>
          <p className="text-[10px] text-slate-300 line-clamp-2">
            High-retention 9:16 vertical reels crafted with motion text and dynamic sound design.
          </p>
        </div>
      </div>
    );
  }

  if (type === 'google-seo') {
    return (
      <div className={`glass-panel rounded-2xl p-5 border border-slate-700/70 shadow-xl space-y-4 ${className}`}>
        {/* Search Engine Header */}
        <div className="flex items-center gap-3 bg-dark-950 px-4 py-2.5 rounded-xl border border-slate-800">
          <Search className="w-4 h-4 text-slate-400 flex-shrink-0" />
          <span className="text-xs text-slate-200 truncate">gym fitness center near me</span>
          <span className="ml-auto text-[10px] bg-brand-blue/10 text-brand-blue px-2 py-0.5 rounded font-mono">Local Pack</span>
        </div>

        {/* Google Business Profile Card */}
        <div className="bg-dark-900/90 rounded-xl p-4 border border-slate-800 space-y-3">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                Pulse Elite Fitness Club
                <CheckCircle2 className="w-4 h-4 text-sky-400 fill-sky-400/20" />
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">Gym & Fitness Center • Verified Business</p>
            </div>
            <div className="flex items-center gap-1 bg-amber-950/60 border border-amber-500/30 px-2 py-0.5 rounded text-amber-300 text-xs font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>4.9</span>
              <span className="text-slate-400 text-[10px]">(85+ reviews)</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
            <div className="bg-dark-950 p-2 rounded border border-slate-800 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" /> Open Now • 6 AM – 9 PM
            </div>
            <div className="bg-dark-950 p-2 rounded border border-slate-800 truncate">
              📍 Central Main Road, City
            </div>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <div className="bg-brand-blue text-dark-950 font-bold px-3 py-1.5 rounded-lg text-xs flex-1 text-center">
              Visit Website
            </div>
            <div className="bg-dark-800 text-slate-200 font-medium px-3 py-1.5 rounded-lg text-xs flex-1 text-center border border-slate-700">
              Directions / Call
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
