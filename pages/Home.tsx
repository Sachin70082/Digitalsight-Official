
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, Music, Globe, BarChart, ShieldCheck, Zap, Headphones, TrendingUp, DollarSign, Layers, CheckCircle2, Disc, Server, Network, ShieldAlert, Cpu } from 'lucide-react';
import { SERVICES, PLATFORMS } from '../constants';
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
    }, { threshold: 0.15 });

    const elements = document.querySelectorAll('[data-reveal-id]');
    elements.forEach((el) => observer.current?.observe(el));

    return () => observer.current?.disconnect();
  }, []);

  return (revealedId: string) => revealed[revealedId] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10';
};

const WaveVisualizer = () => (
  <div className="absolute bottom-0 left-0 w-full h-32 md:h-64 flex items-end justify-center gap-1 md:gap-2 opacity-20 pointer-events-none z-10">
    {[...Array(50)].map((_, i) => (
      <div 
        key={i} 
        className="w-1 md:w-2 bg-gradient-to-t from-blue-600 via-purple-500 to-transparent wave-bar rounded-t-full" 
        style={{ 
          height: `${15 + Math.random() * 85}%`,
          animationDelay: `${i * 0.04}s`,
          animationDuration: `${1 + Math.random() * 1.5}s`
        }} 
      />
    ))}
  </div>
);

const InfiniteMarquee = () => (
  <div className="absolute top-[35%] md:top-[42%] left-0 w-full overflow-hidden pointer-events-none -z-10 select-none opacity-[0.03]">
    <div className="flex whitespace-nowrap animate-marquee">
      {[...Array(8)].map((_, i) => (
        <span key={i} className="font-display text-[22vw] md:text-[14vw] font-black uppercase tracking-tight mx-6 md:mx-12 text-white leading-none">
          {APP_CONFIG.TAGLINE}
        </span>
      ))}
    </div>
  </div>
);

const TypingText: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const texts = ['GLOBAL MUSIC YOURS NOW.'];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(100);
      } else {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, texts, typingSpeed]);

  return <span>{text}</span>;
};

const Home: React.FC = () => {
  const isRevealed = useScrollReveal();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [streams, setStreams] = useState(APP_CONFIG.CALC_MIN_STREAMS * 10);
  const heroRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  };

  const estimatedRevenue = (streams * (APP_CONFIG.STREAM_REVENUE_PER_1K / 1000)).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 });

  return (
    <div className="w-full bg-[#050505] selection:bg-blue-600 selection:text-white overflow-hidden">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        onMouseMove={handleMouseMove}
        className="relative min-h-[100vh] flex items-center justify-center pt-24 md:pt-32 pb-16 md:pb-32 perspective-2000"
      >
        <InfiniteMarquee />
        
        <div className="absolute inset-0 z-0 overflow-hidden">
           <div 
            className="absolute inset-[-15%] opacity-[0.15] pointer-events-none grayscale contrast-[1.1] transition-transform duration-1000 ease-out"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1459749411177-042180ce6742?auto=format&fit=crop&q=80&w=2000')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: `scale(1.05) translate(${mousePos.x * 25}px, ${mousePos.y * 25}px)` 
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black to-black z-10" />
          <div className="absolute top-0 left-1/4 w-[250px] md:w-[700px] h-[250px] md:h-[700px] bg-blue-600/10 rounded-full blur-[100px] md:blur-[200px] animate-pulse pointer-events-none" />
        </div>

        <WaveVisualizer />

        <div className="relative z-20 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 text-center lg:text-left space-y-8 md:space-y-10">
            <div className={`inline-flex items-center space-x-3 bg-white/5 border border-white/10 px-5 py-2 md:py-2.5 rounded-full backdrop-blur-xl transition-all duration-1000 ${isRevealed('hero-tag')}`}>
              <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-gray-400">DISTRIBUTION V4.0</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-[6.5rem] font-black tracking-tight leading-[1] md:leading-[0.85] text-white uppercase overflow-hidden">
              <span className="block transition-all duration-1000 animate-pulse">GLOBAL MUSIC</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-400 italic block animate-bounce-slow">
                YOURS NOW.
              </span>
            </h1>

            <p className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Global music distribution to 150+ platforms including Spotify, Apple Music, and Amazon. <span className="text-white font-semibold">Keep 100% of your ownership and 70% royalties.</span> <br className="hidden md:block" />
              Professional infrastructure for independent artists and record labels.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 md:gap-8 pt-4">
              <Link to="/distribution" className="group relative w-full sm:w-auto px-12 md:px-16 py-5 md:py-6 bg-white text-black font-black rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl">
                <span className="relative z-10 flex items-center justify-center gap-3 tracking-widest text-xs md:text-sm uppercase">
                  UPLOAD NOW <ArrowRight className="w-4 h-4 md:w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </Link>
              <Link to="/platforms" className="w-full sm:w-auto px-12 md:px-16 py-5 md:py-6 bg-white/5 border border-white/15 text-white font-bold rounded-full hover:bg-white/10 transition-all flex items-center justify-center space-x-4 backdrop-blur-md uppercase tracking-widest text-xs md:text-sm">
                <Play className="w-4 h-4 md:w-5 h-5 fill-white" />
                <span>PARTNER STORES</span>
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex lg:col-span-5 justify-center items-center preserve-3d">
            <div 
              className="relative w-[400px] h-[400px] animate-float-3d"
              style={{ transform: `rotateY(${mousePos.x * 30}deg) rotateX(${mousePos.y * -30}deg)` }}
            >
              <div className="absolute inset-0 bg-blue-600/15 rounded-full blur-[100px] animate-pulse" />
              <div className="absolute inset-0 bg-[#0a0a0a] rounded-full shadow-[0_0_80px_rgba(0,0,0,0.9)] border-[15px] border-white/5 animate-spin-slow overflow-hidden">
                <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "repeating-radial-gradient(circle, transparent 0, transparent 6px, #222 7px)" }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-tr from-[#0061A8] via-[#004A80] to-[#00355C] rounded-full border-4 border-black/40 flex items-center justify-center overflow-hidden">
                  <Music className="text-white w-12 h-12" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leading Platforms Section */}
      <section 
        data-reveal-id="platforms-strip"
        className={`py-12 md:py-20 border-y border-white/5 bg-white/[0.01] transition-all duration-1000 transform ${isRevealed('platforms-strip')}`}
      >
        <div className="max-w-[1440px] mx-auto px-6">
          <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.5em] text-center mb-12">STREAMING WORLDWIDE ON</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24 opacity-60">
            {PLATFORMS.slice(0, 6).map((platform) => (
              <div 
                key={platform.id} 
                className="group flex flex-col items-center gap-3 transition-all duration-500 hover:opacity-100 hover:scale-110"
              >
                <div className="relative w-10 h-10 md:w-14 md:h-14 grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out">
                  <img 
                    src={platform.logo} 
                    alt={platform.name} 
                    className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                  />
                </div>
                <span className="text-[8px] md:text-[10px] font-bold text-gray-600 uppercase tracking-widest group-hover:text-white transition-colors">
                  {platform.name}
                </span>
              </div>
            ))}
            {/* 150+ More Indicator bubble */}
            <div className="group flex flex-col items-center gap-3 transition-all duration-500 hover:opacity-100 hover:scale-110">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:border-blue-500/50 group-hover:bg-blue-600/10 transition-all duration-500">
                <span className="text-xs md:text-sm font-black text-blue-400 group-hover:text-blue-500">+150</span>
              </div>
              <span className="text-[8px] md:text-[10px] font-bold text-gray-600 uppercase tracking-widest group-hover:text-white transition-colors">
                AND MORE
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Infrastructure - DDEX & Merlin */}
      <section 
        data-reveal-id="infra-tech"
        className={`py-24 md:py-40 max-w-[1440px] mx-auto px-6 lg:px-16 transition-all duration-1000 transform ${isRevealed('infra-tech')}`}
      >
        <div className="text-center mb-24">
          <span className="text-blue-500 font-bold uppercase tracking-[0.6em] text-[10px] mb-8 block">Global Standard Infrastructure</span>
          <h2 className="font-display text-4xl md:text-7xl font-black mb-8 uppercase tracking-tight text-white">THE BACKBONE.</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            Digitalsight utilizes enterprise-level delivery protocols to ensure your audio and metadata are ingested by stores with 100% precision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          <div className="glass p-10 md:p-14 rounded-[3rem] border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
              <Server className="w-24 h-24 text-blue-500" />
            </div>
            <h3 className="font-display text-3xl md:text-4xl font-black mb-6 text-white uppercase">DDEX INGESTION</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
              We leverage Digital Data Exchange (DDEX) standards for metadata messaging. This ensures your artist credits, lyrics, and technical data are perfectly synchronized across Spotify, Apple Music, and Amazon.
            </p>
            <ul className="space-y-4">
              {['XML Based Metadata Transmission', 'Direct API Endpoints', 'Lossless Audio Integrity'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-300 font-bold tracking-wider">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass p-10 md:p-14 rounded-[3rem] border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
              <Network className="w-24 h-24 text-purple-500" />
            </div>
            <h3 className="font-display text-3xl md:text-4xl font-black mb-6 text-white uppercase">MERLIN NETWORK</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
              As part of the global independent digital music ecosystem, we utilize Merlin's collective power to ensure independent artists get the same licensing terms as major labels.
            </p>
            <ul className="space-y-4">
              {['Premium Licensing Terms', 'Territorial Optimization', 'Transparency in Reporting'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-300 font-bold tracking-wider">
                  <CheckCircle2 className="w-5 h-5 text-purple-500" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Delivery Process Visualizer */}
      <section 
        data-reveal-id="delivery-flow"
        className={`py-24 md:py-40 bg-white/[0.02] border-y border-white/5 transition-all duration-1000 transform ${isRevealed('delivery-flow')}`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-6xl font-black mb-10 text-white uppercase leading-tight">HOW DELIVERY <br /><span className="text-white/30 italic">WORKS.</span></h2>
              <div className="space-y-12">
                {[
                  { step: '01', title: 'Smart Quality Control', desc: 'Every release is checked for platform-specific rules using automated and manual QC agents.' },
                  { step: '02', title: 'Asset Processing', desc: 'Audio is validated for high-fidelity bitrates (24-bit WAV) and metadata is mapped to DDEX ERN standards.' },
                  { step: '03', title: 'Node Propagation', desc: 'Assets are sent to global platform servers through our secure high-speed network nodes.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <span className="font-display text-5xl font-black text-blue-500/20 group-hover:text-blue-500 transition-colors">{item.step}</span>
                    <div>
                      <h4 className="font-black text-xl text-white mb-2 uppercase tracking-tight">{item.title}</h4>
                      <p className="text-gray-400 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex justify-center items-center">
              <div className="absolute inset-0 bg-blue-600/10 blur-[120px] rounded-full" />
              <div className="glass p-12 md:p-20 rounded-[4rem] border border-white/10 relative overflow-hidden">
                <Cpu className="w-16 h-16 text-blue-500 mb-8 animate-pulse" />
                <div className="space-y-4 w-64">
                  <div className="h-2 w-full bg-blue-500/20 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 animate-loading-bar" />
                  </div>
                  <div className="h-2 w-2/3 bg-white/5 rounded-full" />
                  <div className="h-2 w-full bg-white/5 rounded-full" />
                </div>
                <div className="mt-12 flex items-center gap-3">
                  <ShieldAlert className="text-emerald-500 w-5 h-5" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500">Security: Encrypted V3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Estimator */}
      <section 
        data-reveal-id="rev-calc"
        className={`py-24 md:py-40 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 transition-all duration-1000 ease-out transform ${isRevealed('rev-calc')}`}
      >
        <div className="glass rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-24 border border-white/10 relative overflow-hidden group shadow-3xl">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-blue-600/5 blur-[150px] -z-10" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="space-y-8 md:space-y-10">
              <div className="space-y-6">
                <h2 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-black text-white leading-[1] uppercase tracking-tight">
                  PROJECT YOUR <br /><span className="text-white/30 italic">EARNINGS.</span>
                </h2>
                <p className="text-gray-400 text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-xl">
                  Calculate potential yearly revenue based on global streaming metrics. 
                  Transparency is the foundation of our agency.
                </p>
              </div>
              
              <div className="space-y-10 bg-white/5 p-8 md:p-14 rounded-[2rem] md:rounded-[3.5rem] border border-white/5">
                <div className="space-y-6 md:space-y-8">
                  <div className="flex justify-between text-[10px] md:text-xs font-black text-gray-500 uppercase tracking-widest">
                    <span>Est. Monthly Audience</span>
                    <span className="text-blue-400 text-lg md:text-xl">{streams.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min={APP_CONFIG.CALC_MIN_STREAMS} 
                    max={APP_CONFIG.CALC_MAX_STREAMS} 
                    step={APP_CONFIG.CALC_STEP}
                    value={streams}
                    onChange={(e) => setStreams(parseInt(e.target.value))}
                    className="w-full h-2 md:h-3 bg-white/10 rounded-full appearance-none cursor-pointer accent-blue-500"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <div className="space-y-1 text-center sm:text-left">
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Annual Artist Take</p>
                    <p className="text-5xl md:text-6xl font-display font-bold text-emerald-400">${estimatedRevenue}</p>
                  </div>
                  <div className="space-y-1 text-center sm:text-left">
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Royalty Retained</p>
                    <p className="text-5xl md:text-6xl font-display font-bold text-white">{APP_CONFIG.ARTIST_PLAN_ROYALTY}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group perspective-2000">
              <div className="absolute -inset-8 bg-blue-500/10 rounded-[3rem] blur-[80px] opacity-40 transition duration-1000"></div>
              <div className="relative glass p-10 md:p-16 rounded-[2.5rem] md:rounded-[4rem] border border-white/10 transform transition-all duration-700 group-hover:rotate-y-6 shadow-3xl">
                <div className="flex items-center gap-5 mb-10 md:mb-14">
                  <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center border border-emerald-500/30">
                    <CheckCircle2 className="text-emerald-500 w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-black uppercase text-base md:text-lg tracking-widest text-white">Direct Payouts</h4>
                    <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Global Banking Support</p>
                  </div>
                </div>
                <div className="space-y-6 md:space-y-8">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="h-12 md:h-14 w-full bg-white/5 rounded-xl flex items-center px-6 md:px-10 justify-between">
                      <div className="w-32 md:w-48 h-1.5 bg-white/10 rounded-full" />
                      <div className="w-16 md:w-20 h-1.5 bg-emerald-500/30 rounded-full" />
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="w-full mt-12 py-5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl md:rounded-3xl transition-all flex items-center justify-center uppercase tracking-widest text-xs md:text-sm shadow-xl">
                  COLLECT ROYALTIES
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 md:py-40 max-w-[1440px] mx-auto px-6 lg:px-16">
        <div 
          data-reveal-id="services-head"
          className={`text-center mb-24 transition-all duration-1000 transform ${isRevealed('services-head')}`}
        >
          <span className="text-blue-500 font-bold uppercase tracking-[0.6em] text-[10px] mb-8 block">Global Agency Solutions</span>
          <h2 className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-[8rem] font-black mb-10 uppercase tracking-tight text-white leading-[0.9]">THE SUITE.</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl font-light leading-relaxed">
            Professional logistics for independent creators and elite record labels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {SERVICES.map((s, idx) => (
            <div 
              key={idx} 
              data-reveal-id={`service-${idx}`}
              className={`group glass p-10 md:p-14 rounded-[3rem] md:rounded-[4rem] hover:bg-white/5 transition-all duration-700 border border-white/5 hover:border-blue-500/50 transform hover:-translate-y-4 ${isRevealed(`service-${idx}`)}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="mb-10 md:mb-12 bg-white/5 w-20 h-20 md:w-24 md:h-24 rounded-2xl md:rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-black mb-6 uppercase tracking-tight text-white leading-none">{s.title}</h3>
              <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed mb-10 font-light">{s.description}</p>
              <div className="w-full h-px bg-white/10 group-hover:bg-blue-500/50 transition-colors mb-10" />
              <Link to={s.path} className="text-white text-[10px] font-black uppercase tracking-[0.4em] flex items-center space-x-3 group-hover:translate-x-3 transition-transform">
                <span>VIEW PROJECT</span>
                <ArrowRight className="w-4 h-4 text-blue-500" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* SEO Content Section - Hidden from users but visible to search engines */}
      <section className="sr-only">
        <h2>Best Global Music Distribution Service for Independent Artists</h2>
        <p>
          Digitalsight Innovations provides the best digital music distribution services for independent artists and record labels in India and worldwide. 
          Our platform allows you to sell your music on Spotify, Apple Music, Amazon Music, YouTube Music, TikTok, Instagram, Facebook, and 150+ other streaming services.
        </p>
        <ul>
          <li>Global Music Distribution Agency</li>
          <li>Spotify for Artists and Apple Music for Artists Integration</li>
          <li>YouTube Content ID Monetization and YouTube CMS Management</li>
          <li>Professional Video Distribution to Global Platforms</li>
          <li>Music Publishing, Mechanical Royalties, and Performance Royalties</li>
          <li>Sync Licensing and Music Marketing for Independent Artists</li>
          <li>Digital Music Aggregator with Fast Delivery and ISRC/UPC Generation</li>
          <li>CRBT / Caller Tune Support for Jio, Airtel, VI, and BSNL</li>
          <li>Music Distribution to JioSaavn, Wynk Music, and Gaana</li>
          <li>Unlimited Music Distribution for Record Labels</li>
        </ul>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 md:py-40 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 mb-24 md:mb-40">
        <div className="relative rounded-[3rem] md:rounded-[6rem] overflow-hidden p-14 md:p-36 text-center group shadow-3xl border border-white/5">
          <img 
            src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=2000" 
            className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale transition-all duration-3000 group-hover:scale-110"
            alt="Stage"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
          
          <div className="relative z-10 max-w-5xl mx-auto space-y-16">
            <h2 className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-[10vw] font-black tracking-tight leading-[0.8] uppercase text-white">READY FOR THE <br /><span className="text-white/20 italic">WORLD STAGE?</span></h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10">
              <Link to="/contact" className="w-full sm:w-auto px-16 md:px-24 py-6 md:py-8 bg-white text-black font-black rounded-full text-lg md:text-2xl transition-all hover:scale-105 shadow-3xl uppercase tracking-widest">
                DISTRIBUTE NOW
              </Link>
              <a href={`https://wa.me/${APP_CONFIG.WHATSAPP_NUMBER}`} target="_blank" className="w-full sm:w-auto px-16 md:px-24 py-6 md:py-8 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full text-lg md:text-2xl backdrop-blur-2xl border border-white/20 transition-all uppercase tracking-widest">
                DIRECT CONTACT
              </a>
            </div>
            <p className="text-gray-600 font-black tracking-[1em] text-[10px] uppercase pt-12">DIGITALSIGHT Hub - Global Audio Operations</p>
          </div>
        </div>
      </section>
      
      <style>{`
        @keyframes loading-bar {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
        .animate-loading-bar {
          animation: loading-bar 4s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
