
import React from 'react';
import { Headphones, Zap, Disc, Mic2, Waves, Radio, Activity, MessageCircle, Layers, ArrowRight, Volume2, Settings2, FileAudio, FileBadge } from 'lucide-react';

const MixingMastering: React.FC = () => {
  return (
    <div className="pt-24 md:pt-40 pb-16 md:pb-32 bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="max-w-5xl mx-auto text-center mb-24 lg:mb-32 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] h-[300px] bg-blue-600/5 blur-[120px] -z-10" />
          <span className="text-blue-500 font-bold tracking-[0.5em] text-[10px] mb-8 block uppercase">Sonic Engineering</span>
          <h1 className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-[9.5rem] font-black mb-10 tracking-tight leading-[0.85] text-white uppercase">
            SONIC <br /> <span className="text-white/30 italic">FIDELITY.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-2xl font-light max-w-3xl mx-auto mb-14 leading-relaxed">
            Premium mixing and mastering solutions engineered for commercial success. 
            Warmth, depth, and precision for every genre.
          </p>
          <a 
            href="https://wa.me/918895759809?text=Hi Digitalsight! I want to talk to an engineer about mixing/mastering." 
            target="_blank" 
            className="inline-flex items-center justify-center gap-4 px-12 py-5 bg-white text-black font-black rounded-full hover:scale-105 active:scale-95 transition-all shadow-2xl text-xs md:text-sm uppercase tracking-widest"
          >
            <MessageCircle className="w-5 h-5" />
            CONNECT WITH AN ENGINEER
          </a>
        </div>

        {/* Visual Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24 lg:mb-40">
          <div className="relative group">
            <div className="absolute -inset-1 bg-blue-600/20 rounded-[3rem] blur-[80px] opacity-40 group-hover:opacity-60 transition-opacity" />
            <img 
              src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=2000" 
              className="relative rounded-[3rem] border border-white/5 grayscale hover:grayscale-0 transition-all duration-1000 shadow-3xl"
              alt="Studio"
            />
            <div className="absolute bottom-10 left-10 p-6 glass rounded-2xl border border-white/10 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-4">
                <Activity className="text-blue-500 w-5 h-5" />
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">Signal Path Analyzed</span>
              </div>
              <div className="flex gap-1.5 h-8 items-end">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-1.5 bg-blue-500/40 rounded-full wave-bar" style={{ height: `${30 + Math.random() * 70}%`, animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-12">
            <div>
              <h2 className="font-display text-4xl lg:text-5xl font-black mb-8 uppercase tracking-tight text-white leading-none">ANALOG WARMTH. <br /><span className="text-white/30 italic">DIGITAL POWER.</span></h2>
              <p className="text-gray-400 text-lg lg:text-xl font-light leading-relaxed">
                Utilizing state-of-the-art outboard gear and industry-standard DSP plugins to carve space, 
                add weight, and ensure your track stands out in any listening environment.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              <div className="glass p-8 rounded-3xl border border-white/5 hover:border-blue-500/20 transition-all group">
                <Waves className="text-blue-400 w-8 h-8 mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="font-black mb-3 uppercase text-[11px] tracking-widest text-white">Vocal Surgery</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-medium">Transparent pitch correction and formant manipulation for a polished vocal presence.</p>
              </div>
              <div className="glass p-8 rounded-3xl border border-white/5 hover:border-blue-500/20 transition-all group">
                <Layers className="text-indigo-400 w-8 h-8 mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="font-black mb-3 uppercase text-[11px] tracking-widest text-white">Stem Balancing</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-medium">Deep processing of individual assets to maximize dynamic range and stereo width.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA Card */}
        <div className="glass rounded-[3rem] lg:rounded-[5rem] p-12 lg:p-24 text-center border border-blue-500/10 relative overflow-hidden shadow-3xl">
          <div className="absolute inset-0 bg-blue-600/5 blur-[100px] pointer-events-none" />
          <h2 className="font-display text-4xl lg:text-7xl font-black mb-10 uppercase tracking-tight leading-none text-white">READY FOR <br /><span className="text-white/30 italic">RADIO DEBUT?</span></h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-14 text-lg lg:text-xl font-light">Commercial loudness standards applied to every master. Ready for global streaming debut.</p>
          <a 
            href="https://wa.me/918895759809?text=Hi! I am ready to start my mixing/mastering project." 
            target="_blank"
            className="inline-flex items-center justify-center gap-4 px-14 py-6 bg-blue-600 text-white font-black rounded-2xl md:rounded-3xl text-sm md:text-lg hover:scale-105 transition-all shadow-xl uppercase tracking-widest"
          >
            START YOUR PROJECT <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MixingMastering;
