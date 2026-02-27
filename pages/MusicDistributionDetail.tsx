
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Music, Globe, Server, CheckCircle2, MessageCircle, Database } from 'lucide-react';
import { APP_CONFIG } from '../config';

const MusicDistributionDetail: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-32 pb-24 bg-[#050505] min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 uppercase text-xs font-black tracking-widest"
        >
          <ArrowLeft className="w-4 h-4" /> Back to explore
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-8">
            <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center border border-blue-600/20">
              <Music className="text-blue-500 w-8 h-8" />
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-black text-white uppercase leading-none tracking-tight">
              MUSIC <br /><span className="text-white/30 italic">DISTRIBUTION.</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-xl">
              Our core distribution engine utilizes the latest DDEX standards to deliver your audio to 150+ stores globally with surgical precision.
            </p>
            <div className="flex gap-6 pt-4">
              <a 
                href={`https://wa.me/${APP_CONFIG.WHATSAPP_NUMBER}?text=Hi! I want to distribute my music through Digitalsight.`}
                target="_blank"
                className="px-10 py-5 bg-blue-600 text-white font-black rounded-2xl flex items-center gap-3 hover:scale-105 active:scale-95 transition-all uppercase text-xs tracking-widest"
              >
                <MessageCircle className="w-5 h-5" /> Start Now
              </a>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-blue-600/10 blur-[100px] rounded-full opacity-50" />
            <div className="relative glass p-10 md:p-16 rounded-[4rem] border border-white/10 overflow-hidden text-center">
              <Database className="w-16 h-16 text-blue-500 mx-auto mb-8 animate-pulse" />
              <h3 className="font-display text-2xl font-black text-white mb-4 uppercase">ENTERPRISE CORE</h3>
              <p className="text-gray-500 text-sm font-light">Direct DDEX XML feeds to Spotify, Apple & Amazon.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { 
              icon: <Globe className="text-blue-500" />, 
              title: "GLOBAL BACKBONE", 
              desc: "Simultaneous delivery across 200+ territories using high-speed server clusters." 
            },
            { 
              icon: <Server className="text-purple-500" />, 
              title: "DDEX COMPLIANCE", 
              desc: "Metadata is strictly mapped to the latest ERN standards for 100% acceptance rates." 
            },
            { 
              icon: <CheckCircle2 className="text-emerald-500" />, 
              title: "MERLIN TERMS", 
              desc: "Benefit from premium licensing deals usually reserved for major labels only." 
            }
          ].map((card, i) => (
            <div key={i} className="glass p-10 rounded-[3rem] border border-white/5 hover:border-blue-500/30 transition-all group">
              <div className="mb-6 group-hover:scale-110 transition-transform">{card.icon}</div>
              <h4 className="text-white font-black text-xl mb-4 uppercase tracking-tight">{card.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed font-light">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MusicDistributionDetail;
