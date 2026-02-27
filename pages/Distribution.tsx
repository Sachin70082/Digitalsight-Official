
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Check, Music, Video, Youtube, Tv, Star, Building2, Zap, BarChart3, 
  Globe2, ShieldCheck, Share2, Rocket, CloudLightning, Database, 
  CreditCard, Timer, LayoutDashboard, SearchCode, CheckCircle2
} from 'lucide-react';
import { APP_CONFIG } from '../config';

const useScrollReveal = () => {
  const [revealed, setRevealed] = useState<{ [key: string]: boolean }>({});
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('data-reveal-id');
          if (id) setRevealed((prev) => ({ ...prev, [id]: true }));
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('[data-reveal-id]');
    elements.forEach((el) => observer.current?.observe(el));
    return () => observer.current?.disconnect();
  }, []);

  return (id: string) => revealed[id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10';
};

const Distribution: React.FC = () => {
  const navigate = useNavigate();
  const isRevealed = useScrollReveal();

  const handlePlanSelect = (plan: string) => {
    navigate(`/contact?plan=${encodeURIComponent(plan)}`);
  };

  return (
    <div className="pt-24 md:pt-40 pb-16 md:pb-32 bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-24 lg:mb-32">
          <span className="text-blue-500 font-bold tracking-[0.5em] text-[10px] uppercase mb-6 block animate-pulse">Platform Operations</span>
          <h1 className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-[7.5rem] font-black mb-8 tracking-tight text-white uppercase leading-[0.95] lg:leading-[0.85]">REACH THE <br /><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 italic">GLOBAL MARKET.</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl font-light leading-relaxed">
            Scalable infrastructure for independent creators. We provide the logistics required for top-tier streaming success.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 max-w-5xl mx-auto mb-24 lg:mb-40">
          {/* Artist Plan */}
          <div className="group relative glass p-10 lg:p-14 rounded-[3rem] border border-white/5 hover:border-blue-500/30 transition-all duration-500 flex flex-col shadow-2xl">
            <div className="flex items-center gap-5 mb-10">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/5">
                <Music className="text-blue-400 w-7 h-7" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-black text-white">ARTIST</h3>
                <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">Single Entity</p>
              </div>
            </div>
            <div className="flex items-baseline gap-2 mb-10">
              <span className="text-5xl lg:text-6xl font-black text-white">₹{APP_CONFIG.ARTIST_PLAN_PRICE}</span>
              <span className="text-gray-500 font-bold uppercase text-[10px] tracking-widest">/ Annual</span>
            </div>
            <ul className="space-y-5 mb-14 flex-grow">
              {["Unlimited Music Distribution", `Keep ${APP_CONFIG.ARTIST_PLAN_ROYALTY} Royalties`, `${APP_CONFIG.ARTIST_PLAN_PROFILES} Artist Profile`, "Global Store Network", "CRBT / Caller Tune Support", "Smart Promotional Links"].map((f, j) => (
                <li key={j} className="flex items-center gap-4 text-gray-400">
                  <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-blue-500" />
                  </div>
                  <span className="text-sm font-medium">{f}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={() => handlePlanSelect(`Artist Plan (₹${APP_CONFIG.ARTIST_PLAN_PRICE})`)}
              className="w-full py-5 bg-white text-black font-black rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-xl uppercase tracking-widest text-xs"
            >
              SELECT ARTIST PLAN
            </button>
          </div>

          {/* Label Plan */}
          <div className="group relative glass p-10 lg:p-14 rounded-[3rem] border border-blue-500/30 hover:border-blue-500 transition-all duration-500 flex flex-col shadow-3xl bg-blue-600/5">
            <div className="absolute top-8 right-8">
              <div className="bg-blue-600 text-white text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">AGENCY CHOICE</div>
            </div>
            <div className="flex items-center gap-5 mb-10">
              <div className="w-14 h-14 bg-blue-600/20 rounded-2xl flex items-center justify-center border border-blue-600/20">
                <Building2 className="text-blue-400 w-7 h-7" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-black text-white">LABEL</h3>
                <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">Multi-Artist Agency</p>
              </div>
            </div>
            <div className="flex items-baseline gap-2 mb-10">
              <span className="text-5xl lg:text-6xl font-black text-white">₹{APP_CONFIG.LABEL_PLAN_PRICE}</span>
              <span className="text-gray-500 font-bold uppercase text-[10px] tracking-widest">/ Annual</span>
            </div>
            <ul className="space-y-5 mb-14 flex-grow">
              {["Unlimited Master Assets", `Keep ${APP_CONFIG.LABEL_PLAN_ROYALTY} Royalties`, `${APP_CONFIG.LABEL_PLAN_PROFILES} Profiles`, "YouTube CMS Integration", "CRBT / Caller Tune Support", "Global Video Distribution", `Priority ${APP_CONFIG.SUPPORT_RESPONSE_TIME} Support`].map((f, j) => (
                <li key={j} className="flex items-center gap-4 text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-blue-500" />
                  </div>
                  <span className="text-sm font-semibold italic">{f}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={() => handlePlanSelect(`Label Plan (₹${APP_CONFIG.LABEL_PLAN_PRICE})`)}
              className="w-full py-5 bg-blue-600 text-white font-black rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-blue-600/20 uppercase tracking-widest text-xs"
            >
              SELECT LABEL PLAN
            </button>
          </div>
        </div>

        {/* CMS Section */}
        <section 
          id="youtube-cms"
          data-reveal-id="yt-cms"
          className={`py-24 transition-all duration-1000 transform ${isRevealed('yt-cms')}`}
        >
          <div className="glass rounded-[4rem] p-10 lg:p-24 border border-blue-500/10 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-10">
                <span className="text-blue-500 font-bold uppercase tracking-widest text-[11px] block">Advanced Monetization</span>
                <h2 className="font-display text-4xl lg:text-7xl font-black mb-8 leading-[0.95] uppercase text-white">YOUTUBE <br /><span className="text-white/30">CMS & CONTENT ID</span></h2>
                <p className="text-gray-400 text-lg lg:text-xl font-light leading-relaxed">
                  We provide direct access to YouTube's Content ID systems. 
                  Every use of your audio across the platform is claimed and monetized automatically.
                </p>
                <div className="space-y-6">
                   {["Automated Rights Protection", "Global Asset Claiming", "Official Artist Channel Setup"].map((item, i) => (
                     <div key={i} className="flex items-center gap-4 text-gray-300">
                        {/* Fix: Added CheckCircle2 to imports from lucide-react */}
                        <CheckCircle2 className="text-blue-500 w-5 h-5" />
                        <span className="text-sm font-bold uppercase tracking-widest">{item}</span>
                     </div>
                   ))}
                </div>
              </div>
              <div className="relative">
                 <div className="absolute -inset-10 bg-blue-600/5 blur-[100px] pointer-events-none" />
                 <div className="relative glass p-8 rounded-[3rem] border border-white/5 animate-float-3d">
                    <Youtube className="w-16 h-16 text-red-500 mb-8" />
                    <div className="space-y-4">
                       <div className="h-4 w-2/3 bg-white/10 rounded-full" />
                       <div className="h-4 w-full bg-white/5 rounded-full" />
                       <div className="h-4 w-1/2 bg-white/5 rounded-full" />
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content Section - Hidden from users but visible to search engines */}
        <section className="sr-only">
          <h2>Professional Music and Video Distribution Services</h2>
          <p>
            Our distribution platform offers comprehensive services for artists and labels. 
            From Spotify distribution to YouTube CMS management, we handle the technical logistics of your music career.
          </p>
          <ul>
            <li>Digital Music Aggregator for Spotify, Apple Music, and Amazon</li>
            <li>YouTube CMS Management and Content ID Monetization</li>
            <li>Official Artist Channel (OAC) Setup and Video Distribution</li>
            <li>CRBT / Caller Tune Support for All Major Indian Carriers</li>
            <li>Music Distribution for Independent Artists with 70% Royalties</li>
            <li>Global Music Distribution to JioSaavn, Wynk, and Gaana</li>
            <li>ISRC and UPC Code Generation for All Releases</li>
            <li>Music Marketing and Smart Link Tools for Artists</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Distribution;
