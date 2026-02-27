
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Video, Youtube, Play, MessageCircle, Tv, Zap } from 'lucide-react';
import { APP_CONFIG } from '../config';

const VideoDistributionDetail: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-32 pb-24 bg-[#050505] min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 uppercase text-xs font-black tracking-widest"
        >
          <ArrowLeft className="w-4 h-4" /> Back to services
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-8">
            <div className="w-16 h-16 bg-red-600/10 rounded-2xl flex items-center justify-center border border-red-600/20">
              <Video className="text-red-500 w-8 h-8" />
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-black text-white uppercase leading-none tracking-tight">
              VIDEO <br /><span className="text-red-500/30 italic">DISTRIBUTION.</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-xl">
              High-definition delivery to the world's premier video platforms including YouTube Music, Apple Music Video, and Tidal.
            </p>
            <div className="flex gap-6 pt-4">
              <a 
                href={`https://wa.me/${APP_CONFIG.WHATSAPP_NUMBER}?text=Hi! I want to distribute my music videos.`}
                target="_blank"
                className="px-10 py-5 bg-red-600 text-white font-black rounded-2xl flex items-center gap-3 hover:scale-105 active:scale-95 transition-all uppercase text-xs tracking-widest"
              >
                <MessageCircle className="w-5 h-5" /> Inquire Video Delivery
              </a>
            </div>
          </div>
          <div className="relative group perspective-2000">
             <div className="glass p-10 md:p-20 rounded-[4rem] border border-red-500/20 relative overflow-hidden text-center group-hover:rotate-y-6 transition-transform duration-1000 shadow-3xl">
                <Play className="w-16 h-16 text-red-500 mx-auto mb-8 fill-current" />
                <div className="space-y-4">
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-red-600 animate-pulse w-3/4" />
                  </div>
                  <p className="text-[10px] text-red-500 font-black uppercase tracking-widest">Encoding 4K Master Assets</p>
                </div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { 
              icon: <Tv className="text-red-500" />, 
              title: "PREMIUM CHANNELS",
              desc: "Placement on YouTube Official Artist Channels (OAC) with verified branding."
            },
            { 
              icon: <Youtube className="text-white" />, 
              title: "YT MUSIC VIDEO", 
              desc: "Direct ingestion into YouTube Music's global video directory for artist searchability." 
            },
            { 
              icon: <Zap className="text-yellow-500" />, 
              title: "FAST TRACKING", 
              desc: "Rapid encoding and delivery pipeline ensures your video is live for your release date." 
            }
          ].map((card, i) => (
            <div key={i} className="glass p-10 rounded-[3rem] border border-white/5 hover:border-red-500/30 transition-all group">
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

export default VideoDistributionDetail;
