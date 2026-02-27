
import React, { useState, useEffect } from 'react';
import { 
  Mail, MapPin, MessageSquare, Check, Sparkles, 
  ShieldCheck, Clock, Calendar, Smartphone, 
  Globe, Zap, ArrowUpRight, Headphones, UserCheck
} from 'lucide-react';
import { APP_CONFIG } from '../config';

const SupportPipelineAnimation = () => (
  <div className="relative w-full aspect-video max-w-[500px] mx-auto flex items-center justify-center">
    <svg viewBox="0 0 400 200" className="w-full h-full drop-shadow-[0_0_30px_rgba(59,130,246,0.2)]">
      <defs>
        <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
          <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </linearGradient>
      </defs>
      
      {/* Connection Paths */}
      <path d="M50 100 Q 200 50 350 100" className="stroke-white/10 stroke-[2] fill-none" />
      <path d="M50 100 Q 200 150 350 100" className="stroke-white/10 stroke-[2] fill-none" />
      <line x1="50" y1="100" x2="350" y2="100" className="stroke-white/10 stroke-[2] fill-none" />

      {/* Animated Data Packets */}
      <circle r="3" fill="#3b82f6" filter="url(#glow)">
        <animateMotion dur="2s" repeatCount="indefinite" path="M50 100 Q 200 50 350 100" />
      </circle>
      <circle r="3" fill="#8b5cf6" filter="url(#glow)">
        <animateMotion dur="2.5s" begin="0.5s" repeatCount="indefinite" path="M50 100 Q 200 150 350 100" />
      </circle>
      <circle r="4" fill="#3b82f6" filter="url(#glow)">
        <animateMotion dur="1.5s" begin="1s" repeatCount="indefinite" path="M50 100 L 350 100" />
      </circle>

      {/* End Nodes */}
      <g>
        <circle cx="50" cy="100" r="15" fill="#111" stroke="#3b82f6" strokeWidth="2" />
        <Smartphone className="text-blue-500 w-5 h-5" x="40" y="90" />
      </g>
      <g>
        <circle cx="350" cy="100" r="25" fill="#111" stroke="#3b82f6" strokeWidth="2" className="animate-pulse" />
        <Globe className="text-blue-500 w-8 h-8" x="334" y="84" />
      </g>
    </svg>
    
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
       <div className="text-[10px] font-black text-blue-500/50 uppercase tracking-[0.5em] animate-pulse">Routing to Hub...</div>
    </div>
  </div>
);

const Contact: React.FC = () => {
  return (
    <div className="pt-24 md:pt-40 pb-16 md:pb-24 bg-[#050505]">
      <div className="container mx-auto px-6 lg:px-16">
        
        {/* Page Header */}
        <div className="max-w-4xl mb-16 md:mb-24">
          <span className="text-blue-500 font-bold tracking-[0.4em] text-[10px] md:text-xs uppercase mb-6 block">Direct Agency Access</span>
          <h1 className="font-display text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9] uppercase text-white">
            SKIP THE FORM. <br /><span className="text-blue-500 italic">TALK DIRECT.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-2xl font-light leading-relaxed max-w-2xl">
            We've removed traditional contact forms to provide <span className="text-white font-medium">Instant One-Click Access</span> to our distribution and caller tune engineering teams.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Left Column: Direct Communication Hub */}
          <div className="lg:col-span-7 space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* WhatsApp Card */}
              <a 
                href={`https://wa.me/${APP_CONFIG.WHATSAPP_NUMBER}`}
                target="_blank"
                className="group glass p-10 rounded-[2.5rem] border border-emerald-500/10 hover:border-emerald-500/40 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-20 h-20 text-emerald-500" />
                </div>
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-8 border border-emerald-500/20">
                  <Smartphone className="text-emerald-500 w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl font-black text-white mb-2 uppercase tracking-tight">WHATSAPP</h3>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-6">Average Response: 5 Mins</p>
                <div className="flex items-center gap-2 text-emerald-400 font-black text-[10px] uppercase tracking-widest group-hover:gap-4 transition-all">
                  <span>Chat with an agent</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>

              {/* Email Card */}
              <a 
                href={`mailto:${APP_CONFIG.SUPPORT_EMAIL}`}
                className="group glass p-10 rounded-[2.5rem] border border-purple-500/10 hover:border-purple-500/40 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:scale-110 transition-transform">
                  <Mail className="w-20 h-20 text-purple-500" />
                </div>
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-8 border border-purple-500/20">
                  <Mail className="text-purple-500 w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl font-black text-white mb-2 uppercase tracking-tight">OFFICIAL MAIL</h3>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-6">24/7 Asset Inquiries</p>
                <div className="flex items-center gap-2 text-purple-400 font-black text-[10px] uppercase tracking-widest group-hover:gap-4 transition-all">
                  <span>Send detailed pitch</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>
            </div>

            {/* Animation Component */}
            <div className="glass p-10 rounded-[3rem] border border-white/5 relative overflow-hidden text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center gap-10">
                <div className="flex-1">
                  <h3 className="font-display text-3xl font-black text-white mb-4 uppercase tracking-tight">GLOBAL SUPPORT <br /><span className="text-white/20 italic">PIPELINE.</span></h3>
                  <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
                    Our backend system is designed for low-latency communication. When you message us, your query is routed directly to a dedicated account manager based on your territory.
                  </p>
                  <div className="flex items-center gap-3">
                    <UserCheck className="text-blue-500 w-5 h-5" />
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Enterprise SLA Guaranteed</span>
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <SupportPipelineAnimation />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Office Specs & Location */}
          <div className="lg:col-span-5 space-y-8">
            {/* Operational Timing */}
            <div className="glass p-10 rounded-[3rem] border border-blue-500/10 relative overflow-hidden group">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center border border-blue-500/20">
                  <Clock className="text-blue-500 w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-black text-white uppercase tracking-widest">Office Hours</h3>
              </div>
              
              <div className="space-y-6">
                {[
                  { day: "Monday - Friday", time: "10:00 AM - 07:00 PM", status: "Active" },
                  { day: "Saturday", time: "10:00 AM - 04:00 PM", status: "Half Day" },
                  { day: "Sunday", time: "CLOSED", status: "Offline" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0 last:pb-0">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-gray-600" />
                      <span className="text-sm font-bold text-gray-300">{item.day}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-black text-white tracking-widest">{item.time}</p>
                      <p className={`text-[9px] font-bold uppercase tracking-widest ${item.status === 'Offline' ? 'text-red-500' : 'text-emerald-500'}`}>{item.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Address & HQ */}
            <div className="glass p-10 rounded-[3rem] border border-white/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-blue-600/5 blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center border border-emerald-500/20">
                    <MapPin className="text-emerald-500 w-5 h-5" />
                  </div>
                  <h3 className="font-display text-xl font-black text-white uppercase tracking-widest">Headquarters</h3>
                </div>
                <p className="text-gray-300 text-lg font-bold mb-2">Saheed Nagar, Bhubaneswar</p>
                <p className="text-gray-500 text-sm font-medium mb-8">Odisha, 751007, India</p>
                
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                  <ShieldCheck className="text-blue-500 w-6 h-6 shrink-0" />
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-relaxed">
                    Corporate registration valid for <span className="text-white">Music Distribution & OTT Streaming Platform</span> services.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Service Links */}
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => window.open(`https://wa.me/${APP_CONFIG.WHATSAPP_NUMBER}`)}
                className="w-full py-5 bg-white text-black font-black rounded-2xl hover:scale-105 transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-xs shadow-2xl"
              >
                <Zap className="w-4 h-4" /> Start Priority Onboarding
              </button>
              <button 
                onClick={() => window.open(`mailto:${APP_CONFIG.SUPPORT_EMAIL}`)}
                className="w-full py-5 glass border border-white/10 text-white font-black rounded-2xl hover:bg-white/5 transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-xs"
              >
                <Headphones className="w-4 h-4" /> Technical Support
              </button>
            </div>
          </div>
        </div>

        {/* Global Verification Footer */}
        <div className="mt-24 md:mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 opacity-40">
           <div className="flex items-center gap-4">
              <Check className="text-emerald-500 w-5 h-5" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Verified Agency Hub</span>
           </div>
           <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest text-center md:text-right">
              Digitalsight Innovations - Registered in Bhubaneswar, Odisha. Global Delivery via DDEX Network.
           </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
