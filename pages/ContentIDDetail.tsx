
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Youtube, ShieldCheck, BarChart3, MessageCircle, Search, Cpu } from 'lucide-react';
import { APP_CONFIG } from '../config';

const ContentIDDetail: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-32 pb-24 bg-[#050505] min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 uppercase text-xs font-black tracking-widest"
        >
          <ArrowLeft className="w-4 h-4" /> Back to agency
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-8">
            <div className="w-16 h-16 bg-red-600/10 rounded-2xl flex items-center justify-center border border-red-600/20">
              <ShieldCheck className="text-red-600 w-8 h-8" />
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-black text-white uppercase leading-none tracking-tight">
              CONTENT <br /><span className="text-red-500/30 italic">ID SYSTEMS.</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-xl">
              Our advanced YouTube CMS (Content Management System) identifies every usage of your audio globally, claiming and monetizing it automatically.
            </p>
            <div className="flex gap-6 pt-4">
              <a 
                href={`https://wa.me/${APP_CONFIG.WHATSAPP_NUMBER}?text=Hi! I'm interested in YouTube Content ID management.`}
                target="_blank"
                className="px-10 py-5 bg-white text-black font-black rounded-2xl flex items-center gap-3 hover:scale-105 active:scale-95 transition-all uppercase text-xs tracking-widest"
              >
                <MessageCircle className="w-5 h-5" /> Enable Content ID
              </a>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-red-600/5 blur-[120px] rounded-full" />
            <div className="relative glass p-10 md:p-16 rounded-[4rem] border border-white/10 text-center overflow-hidden">
               <Cpu className="w-16 h-16 text-red-500 mx-auto mb-8 animate-spin-slow" />
               <h3 className="font-display text-2xl font-black text-white mb-4 uppercase">ASSET MATCHING</h3>
               <p className="text-gray-500 text-sm font-light leading-relaxed">Fingerprinting every second of your audio for global algorithmic tracking.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { 
              icon: <Search className="text-red-500" />, 
              title: "MANUAL CLAIMING", 
              desc: "Our rights team identifies uses that automated systems miss, ensuring you never lose revenue." 
            },
            { 
              icon: <BarChart3 className="text-emerald-500" />, 
              title: "REVENUE REPORTING", 
              desc: "Direct access to granular data on which videos are generating the most earnings." 
            },
            { 
              icon: <Youtube className="text-white" />, 
              title: "CMS API ACCESS", 
              desc: "Enterprise-level access to YouTube's highest tier of backend tools for labels." 
            }
          ].map((card, i) => (
            <div key={i} className="glass p-10 rounded-[3rem] border border-white/5 hover:border-red-500/30 transition-all group">
              <div className="mb-6 group-hover:scale-110 transition-transform">{card.icon}</div>
              <h4 className="text-white font-black text-xl mb-4 uppercase tracking-tight">{card.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed font-light">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentIDDetail;
