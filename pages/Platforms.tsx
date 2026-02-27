
import React from 'react';
import { PLATFORMS } from '../constants';

const Platforms: React.FC = () => {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 bg-[#050505]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 px-4">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 tracking-tighter text-white uppercase">GLOBAL NETWORK</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">We distribute to over 150 digital stores and streaming services across 200+ territories. Your music has no boundaries.</p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 mb-20 md:mb-24">
          {[
            { 
              title: "AUDIO STREAMING", 
              color: "bg-purple-500", 
              platforms: PLATFORMS.filter(p => p.category === 'audio'),
              extra: "+120 More"
            },
            { 
              title: "VIDEO & TV", 
              color: "bg-red-500", 
              platforms: PLATFORMS.filter(p => p.category === 'video'),
              additional: ["YouTube Music", "Tidal Video"]
            },
            { 
              title: "SOCIAL & APPS", 
              color: "bg-blue-500", 
              platforms: PLATFORMS.filter(p => p.category === 'social'),
              additional: ["Snapchat", "Triller"]
            }
          ].map((cat, i) => (
            <div key={i} className="space-y-6 md:space-y-8">
              <h3 className="font-display text-lg md:text-xl font-bold flex items-center gap-3 text-white uppercase tracking-tighter">
                <div className={`w-1.5 md:w-2 h-6 md:h-8 ${cat.color} rounded-full`} />
                {cat.title}
              </h3>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {cat.platforms.map(p => (
                  <div key={p.id} className="glass p-3 md:p-4 rounded-xl flex items-center gap-3 border border-white/5 hover:bg-white/5 transition-colors">
                    <img src={p.logo} alt={p.name} className="w-5 h-5 md:w-6 md:h-6 object-contain shrink-0" />
                    <span className="text-[11px] md:text-sm font-medium text-gray-200 truncate">{p.name}</span>
                  </div>
                ))}
                {cat.additional?.map((item, j) => (
                  <div key={j} className="glass p-3 md:p-4 rounded-xl flex items-center gap-3 border border-white/5 hover:bg-white/5 transition-colors">
                    <span className="text-[11px] md:text-sm font-medium text-gray-200 truncate uppercase tracking-widest">{item}</span>
                  </div>
                ))}
                {cat.extra && (
                  <div className="glass p-3 md:p-4 rounded-xl flex items-center justify-center border border-white/5 opacity-50 bg-white/5">
                    <span className="text-[10px] md:text-xs font-black tracking-widest uppercase">{cat.extra}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Global Reach Map Sim */}
        <div className="glass rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 border border-white/5 relative overflow-hidden text-center shadow-2xl">
          <div className="absolute inset-0 bg-blue-600/5 blur-[80px] md:blur-[100px]" />
          <h2 className="font-display text-3xl md:text-4xl font-black mb-6 relative z-10 text-white uppercase tracking-tighter">WORLDWIDE PRESENCE</h2>
          <p className="text-gray-400 mb-10 relative z-10 text-base md:text-lg font-light leading-relaxed max-w-3xl mx-auto">From North America to the emerging markets of Asia and Africa, we ensure your tracks are reachable by anyone, anywhere.</p>
          <div className="relative rounded-2xl overflow-hidden h-64 md:h-96">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
              className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000"
              alt="World Map"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platforms;
