
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Target, Heart, Award, Shield, Users, Headphones, TrendingUp, 
  Search, Briefcase, LifeBuoy, Zap, Globe, Cpu, Database, 
  BarChart3, Radio, Music2, CheckCircle2, Server, SearchCode
} from 'lucide-react';

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

const StrategyAnimation = () => (
  <div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center">
    <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_0_30px_rgba(16,185,129,0.2)]">
      <defs>
        <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <g className="stroke-emerald-500/20 stroke-[1.5] fill-none">
        <path d="M200 200 L100 100" />
        <path d="M200 200 L300 100" />
        <path d="M200 200 L300 300" />
        <path d="M200 200 L100 300" />
        <path d="M200 200 L350 200" />
        <path d="M200 200 L50 200" />
      </g>

      <circle r="3" fill="#10b981">
        <animateMotion dur="3s" repeatCount="indefinite" path="M200 200 L100 100" />
      </circle>
      <circle r="3" fill="#10b981">
        <animateMotion dur="4s" begin="1s" repeatCount="indefinite" path="M200 200 L300 100" />
      </circle>
      <circle r="3" fill="#10b981">
        <animateMotion dur="2.5s" begin="0.5s" repeatCount="indefinite" path="M200 200 L300 300" />
      </circle>
      <circle r="3" fill="#10b981">
        <animateMotion dur="5s" repeatCount="indefinite" path="M200 200 L100 300" />
      </circle>

      <g filter="url(#glow)">
        <circle cx="100" cy="100" r="8" fill="url(#nodeGradient)" className="animate-pulse" style={{ animationDuration: '3s' }} />
        <circle cx="300" cy="100" r="10" fill="url(#nodeGradient)" className="animate-pulse" style={{ animationDuration: '4s' }} />
        <circle cx="300" cy="300" r="6" fill="url(#nodeGradient)" className="animate-pulse" style={{ animationDuration: '2.5s' }} />
        <circle cx="100" cy="300" r="12" fill="url(#nodeGradient)" className="animate-pulse" style={{ animationDuration: '5s' }} />
        <circle cx="350" cy="200" r="5" fill="url(#nodeGradient)" className="animate-pulse" style={{ animationDuration: '3.5s' }} />
        <circle cx="50" cy="200" r="7" fill="url(#nodeGradient)" className="animate-pulse" style={{ animationDuration: '4.5s' }} />
      </g>

      <g>
        <circle cx="200" cy="200" r="40" fill="#10b98110" stroke="#10b98130" strokeWidth="1" />
        <circle cx="200" cy="200" r="30" fill="#10b98120" stroke="#10b98150" strokeWidth="1" />
        <circle cx="200" cy="200" r="20" fill="url(#nodeGradient)" filter="url(#glow)">
           <animate attributeName="r" values="18;22;18" dur="4s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
    <div className="absolute inset-0 border-[1px] border-emerald-500/10 rounded-full animate-spin-slow" />
  </div>
);

const MetricCard = ({ label, value, sub }: { label: string, value: string, sub: string }) => (
  <div className="glass p-8 rounded-3xl border border-white/5 text-center group hover:bg-white/10 transition-all duration-500">
    <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] mb-4">{label}</p>
    <h3 className="font-display text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-purple-500 transition-colors">{value}</h3>
    <p className="text-[11px] text-gray-400 font-medium uppercase tracking-widest">{sub}</p>
  </div>
);

const About: React.FC = () => {
  const isRevealed = useScrollReveal();
  const navigate = useNavigate();

  return (
    <div className="pt-24 md:pt-40 pb-16 md:pb-24 bg-[#050505]">
      <div className="container mx-auto px-6 lg:px-16">
        
        {/* Intro Section - SEO Heavy */}
        <div className="max-w-5xl mx-auto text-center mb-24 md:mb-32">
          <span className="text-purple-500 font-bold tracking-[0.5em] text-[10px] md:text-xs uppercase mb-8 block animate-pulse">Enterprise Infrastructure</span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[8rem] font-black mb-10 tracking-tighter uppercase leading-[0.9] text-white">
            DIGITALSIGHT <br /> <span className="text-purple-500 italic">INNOVATIONS.</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-400 leading-relaxed font-light max-w-4xl mx-auto">
            At the intersection of art and technology, <span className="text-white font-medium">Digitalsight Innovations</span> is a premier <span className="text-purple-400 underline decoration-purple-500/30 underline-offset-8">global music distribution agency</span>. We provide an end-to-end <span className="text-white">OTT music streaming platform</span> experience, ensuring your digital assets are delivered, managed, and monetized with surgical precision across 200+ territories.
          </p>
        </div>

        {/* Global Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          <MetricCard label="Global Distribution" value="150+" sub="Partner Stores" />
          <MetricCard label="Market Coverage" value="200+" sub="Territories" />
          <MetricCard label="Streaming Impact" value="50M+" sub="Annual Streams" />
          <MetricCard label="Uptime Reliability" value="99.9%" sub="System Ingestion" />
        </div>

        {/* Core Capabilities - Technical Professional */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div>
                <h2 className="font-display text-3xl md:text-5xl font-black mb-8 leading-none uppercase tracking-tighter">OUR SERVICE <br /><span className="text-white/40 italic">ECOSYSTEM.</span></h2>
                <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed">
                  Digitalsight is not just a distributor; we are a full-scale digital infrastructure partner. Our platform leverages enterprise-grade DDEX protocols to bridge the gap between creators and global streaming audiences.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8">
                {[
                  { 
                    icon: <Radio />, 
                    title: "Caller Tune Services (CRBT)", 
                    desc: "Official provisioning of Caller Ring Back Tones across major telecom carriers including Jio, Airtel, and Vodafone Idea. Monetize every incoming call." 
                  },
                  { 
                    icon: <Database />, 
                    title: "OTT Streaming Integration", 
                    desc: "Direct ingestion pipelines for top OTT platforms. We ensure your music is natively available in high-fidelity on platforms like Spotify, JioSaavn, and Apple Music." 
                  },
                  { 
                    icon: <Shield />, 
                    title: "Rights Management & Legal", 
                    desc: "Advanced copyright protection, DMCA takedowns, and global rights collection to safeguard your intellectual property." 
                  },
                  { 
                    icon: <Globe />, 
                    title: "Sync & Performance Royalties", 
                    desc: "Capturing performance and mechanical royalties from international collection societies and publishing networks." 
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 border border-white/5 group-hover:border-purple-500/30 transition-all text-purple-500">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2 uppercase tracking-widest text-xs md:text-sm">{item.title}</h4>
                      <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-10 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
              <div className="glass p-12 md:p-16 rounded-[4rem] border border-white/10 relative overflow-hidden group">
                 <div className="flex justify-between items-center mb-10">
                    <Cpu className="text-purple-500 w-10 h-10 animate-pulse" />
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">System Status: Optimal</span>
                 </div>
                 <div className="space-y-6">
                    <div className="h-1.5 w-full bg-purple-500/20 rounded-full overflow-hidden">
                       <div className="h-full bg-purple-500 w-[85%] animate-loading-bar" />
                    </div>
                    <div className="flex justify-between text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                       <span>Asset Processing</span>
                       <span>85% Load</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                       <div className="h-12 bg-black/40 border border-white/5 rounded-xl flex items-center justify-center">
                          <Music2 className="w-5 h-5 text-gray-500" />
                       </div>
                       <div className="h-12 bg-black/40 border border-white/5 rounded-xl flex items-center justify-center">
                          <Server className="w-5 h-5 text-gray-500" />
                       </div>
                    </div>
                 </div>
                 <div className="mt-12 text-center">
                    <p className="text-[11px] text-gray-400 font-medium uppercase tracking-[0.3em]">DDEX ERN 4.3 Compliant Ingestion</p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Strategy - Custom Animation Component */}
        <section 
          id="artist-support"
          data-reveal-id="artist-support"
          className={`py-16 md:py-32 transition-all duration-1000 transform ${isRevealed('artist-support')}`}
        >
          <div className="glass rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-20 border border-emerald-500/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-500/5 blur-[80px] md:blur-[120px] pointer-events-none" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="w-14 h-14 md:w-16 md:h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-8">
                  <Users className="text-emerald-500 w-7 h-7 md:w-8 md:h-8" />
                </div>
                <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-black mb-8 leading-none uppercase tracking-tighter">GLOBAL ARTIST <br /><span className="text-white/40 italic">STRATEGY HUB</span></h2>
                <p className="text-gray-400 text-base md:text-lg mb-10 font-light leading-relaxed">
                  Beyond distribution, Digitalsight Innovations serves as your strategic backend agency. We use real-time data analytics to identify growth opportunities across different OTT platforms.
                </p>
                
                <div className="grid grid-cols-1 gap-8">
                  {[
                    { icon: <TrendingUp />, title: "Market-Specific Rollouts", desc: "Data-driven consulting on geographic hotspots, helping you target audiences where your sound resonates most." },
                    // Fix: Added SearchCode to the lucide-react imports above to resolve the 'Cannot find name' error.
                    { icon: <SearchCode className="w-6 h-6" />, title: "Metadata Optimization", desc: "High-precision SEO for streaming services. We optimize your credits and tags for search discoverability." },
                    { icon: <BarChart3 />, title: "Monetization Analytics", desc: "Granular reporting on every stream and download. Transparent accounting and fast royalty payouts." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-5 group">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0 border border-white/5 group-hover:border-emerald-500/30 transition-colors text-emerald-500">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1 uppercase tracking-widest text-[10px]">{item.title}</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative group mt-8 lg:mt-0">
                <div className="absolute -inset-4 bg-emerald-500/20 blur-[60px] md:blur-[100px] opacity-30 pointer-events-none" />
                <div className="glass rounded-[3rem] p-4 border border-white/10 shadow-3xl overflow-hidden group-hover:border-emerald-500/30 transition-all duration-1000">
                   <StrategyAnimation />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {[
            { icon: <CheckCircle2 className="w-8 h-8 text-purple-500" />, title: "Direct Ingestion", desc: "No middle-man. We deliver directly to DSP server clusters for 100% data integrity." },
            { icon: <Heart className="w-8 h-8 text-red-500" />, title: "Artist Rights", desc: "Transparency is our core value. You keep 100% ownership of your masters always." },
            { icon: <Award className="w-8 h-8 text-yellow-500" />, title: "Agency Tier", desc: "Professional label-grade infrastructure available for independent artists." },
            { icon: <Shield className="w-8 h-8 text-blue-500" />, title: "Asset Security", desc: "Encrypted asset storage and secure content ID fingerprinting for all releases." }
          ].map((v, i) => (
            <div key={i} className="glass p-8 rounded-[2rem] border border-white/5 group hover:bg-white/5 transition-all text-center">
              <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform">{v.icon}</div>
              <h3 className="font-display font-bold text-xl mb-3 uppercase tracking-tighter text-white">{v.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Final Professional Call to Action */}
        <div className="relative rounded-[3rem] md:rounded-[5rem] overflow-hidden min-h-[500px] flex items-center justify-center p-12 text-center group border border-white/10">
          <img 
            src="https://images.unsplash.com/photo-1514525253361-bee8718a300a?auto=format&fit=crop&q=80&w=2000" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-3000"
            alt="Studio Environment"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/40 to-transparent" />
          <div className="relative z-10 max-w-4xl">
            <span className="text-purple-500 font-black tracking-[0.5em] text-xs uppercase mb-8 block">Scale with Digitalsight</span>
            <h2 className="font-display text-4xl md:text-7xl lg:text-8xl font-black mb-10 leading-[0.85] uppercase tracking-tighter text-white">READY TO <br /><span className="text-white/20 italic">DOMINATE?</span></h2>
            <p className="text-gray-300 text-lg md:text-2xl font-light mb-12 leading-relaxed">
              Join thousands of labels and artists who trust <span className="text-white font-bold">Digitalsight Innovations</span> for their <span className="text-white">music distribution</span> and <span className="text-white">caller tune services</span>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
               <button 
                onClick={() => navigate('/contact?mode=onboarding')}
                className="px-12 py-6 bg-purple-600 hover:bg-purple-500 text-white font-black rounded-full hover:scale-105 transition-all shadow-3xl uppercase tracking-widest text-sm"
              >
                 START DISTRIBUTION NOW
              </button>
              <a 
                href="https://wa.me/918895759809"
                target="_blank"
                className="px-12 py-6 glass text-white font-bold rounded-full border border-white/20 hover:bg-white/5 transition-all uppercase tracking-widest text-sm"
              >
                 TALK TO AN AGENT
              </a>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes loading-bar {
          0% { width: 0%; }
          100% { width: 85%; }
        }
        .animate-loading-bar {
          animation: loading-bar 3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default About;
