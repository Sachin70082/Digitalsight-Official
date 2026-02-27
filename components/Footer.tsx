
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';
import { APP_CONFIG } from '../config';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Logo size="md" />
              <span className="font-display text-2xl font-bold tracking-tighter">DIGITALSIGHT</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering artists and labels worldwide with premium music and video distribution, professional engineering, and global monetization strategies.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold mb-6 text-white uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/music-distribution" className="hover:text-blue-400 transition-colors">Music Distribution</Link></li>
              <li><Link to="/video-distribution" className="hover:text-blue-400 transition-colors">Video Distribution</Link></li>
              <li><Link to="/mixing-mastering" className="hover:text-blue-400 transition-colors">Mixing & Mastering</Link></li>
              <li><Link to="/content-id" className="hover:text-blue-400 transition-colors">Content ID Management</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-6 text-white uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/platforms" className="hover:text-blue-400 transition-colors">Partner Platforms</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Support</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Careers</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-display font-bold mb-6 text-white uppercase tracking-wider text-sm">Contact Info</h4>
            <div className="flex items-start space-x-3 text-gray-400 text-sm">
              <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
              <span>{APP_CONFIG.ADDRESS}</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-400 text-sm">
              <Mail className="w-5 h-5 text-blue-500 shrink-0" />
              <span>{APP_CONFIG.SUPPORT_EMAIL}</span>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} Digitalsight Innovations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
