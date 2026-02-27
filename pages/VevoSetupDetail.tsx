
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Tv, Star, MessageCircle, Layout, UserCheck, ShieldCheck } from 'lucide-react';
import { APP_CONFIG } from '../config';

const VevoSetupDetail: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-32 pb-24 bg-[#050505] min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 uppercase text-xs font-black tracking-widest"
        >
          <ArrowLeft className="w-4 h-4" /> Back to footer
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-8">
            <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center border border-blue-600/20">
              <Tv className="text-blue-500 w-8 h-8" />
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-black text-white uppercase leading-none tracking-tight">
              VEVO <br /><span className="text-blue-500/30 italic">CHANNEL SETUP.</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-xl">
              Elevate your branding with a verified Vevo channel. We handle the technical setup, artwork validation, and official artist verification.
            </p>
            <div className="flex gap-6 pt-4">
              <a 
                href={`https://wa.me/${APP_CONFIG.WHATSAPP_NUMBER}?text=Hi! I want to create my official Vevo channel.`}
                target="_blank"
                className="px-10 py-5 bg-blue-600 text-white font-black rounded-2xl flex items-center gap-3 hover:scale-105 active:scale-95 transition-all uppercase text-xs tracking-widest shadow-2xl shadow-blue-600/20"
              >
                <MessageCircle className="w-5 h-5" /> Start Channel Setup
              </a>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-600/10 blur-[120px] rounded-full" />
            <div className="relative glass p-12 md:p-24 rounded-[4rem] border border-white/10 text-center group-hover:scale-105 transition-all duration-700">
               <div className="inline-block p-6 rounded-3xl bg-white text-black mb-8">
                  <span className="font-display font-black text-3xl italic tracking-tighter">VEVO</span>
               </div>
               <div className="flex justify-center gap-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="text-blue-500 w-5 h-5 fill-current" />)}
               </div>
               <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.5em] mt-8">Official Brand Authority</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { 
              icon: <Layout className="text-blue-500" />, 
              title: "CUSTOM BRANDING", 
              desc: "Professional header and avatar optimization to meet Vevo's strict quality guidelines." 
            },
            { 
              icon: <UserCheck className="text-emerald-500" />, 
              title: "ARTIST VERIFICATION", 
              desc: "Get the official checkmark and 'Artist' status across the Vevo and YouTube network." 
            },
            { 
              icon: <ShieldCheck className="text-purple-500" />, 
              title: "ROYALTY PROTECTION", 
              desc: "Vevo ensures your videos are served with the highest-tier premium advertisements." 
            }
          ].map((card, i) => (
            <div key={i} className="glass p-10 rounded-[3rem] border border-white/5 hover:border-blue-500/30 transition-all group">
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

export default VevoSetupDetail;
