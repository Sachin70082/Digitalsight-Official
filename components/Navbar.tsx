
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

 const handleGetStarted = () => {
  setIsOpen(false);
  window.open(
    "https://app.digitalsight.in/",
    "_blank",
    "noopener,noreferrer"
  );
};


  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'glass py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <Logo size="md" className="group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500" />
            <span className="font-display text-2xl font-black tracking-tighter text-white">DIGITALSIGHT</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            <div className="flex items-center space-x-8 mr-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-xs font-bold uppercase tracking-[0.2em] transition-all hover:text-white ${
                    location.pathname === item.path ? 'text-blue-500' : 'text-gray-400'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <button 
              onClick={handleGetStarted}
              className="bg-white text-black hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-white/5"
            >
              Login to Portal
            </button>
          </div>

          {/* Animated Mobile Menu Button */}
          <div className="md:hidden z-50">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="relative w-10 h-10 text-gray-300 focus:outline-none p-2 flex items-center justify-center hover:bg-white/5 rounded-lg transition-colors"
              aria-label="Toggle Menu"
            >
              <div className="relative w-6 h-5">
                <span className={`absolute left-0 block w-full h-0.5 bg-white transform transition-all duration-300 ease-in-out ${isOpen ? 'top-2 rotate-45' : 'top-0'}`} />
                <span className={`absolute left-0 block w-full h-0.5 bg-white transform transition-all duration-300 ease-in-out top-2 ${isOpen ? 'opacity-0 -translate-x-2' : 'opacity-100'}`} />
                <span className={`absolute left-0 block w-full h-0.5 bg-white transform transition-all duration-300 ease-in-out ${isOpen ? 'top-2 -rotate-45' : 'top-4'}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-black z-40 md:hidden transition-all duration-700 ease-in-out ${isOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-10'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-10 p-4">
          {NAV_ITEMS.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`text-3xl font-display font-black text-white hover:text-blue-500 transition-all uppercase tracking-tighter transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {item.label}
            </Link>
          ))}
          <button 
            onClick={handleGetStarted}
            className={`bg-blue-600 text-white px-12 py-5 rounded-full text-xl font-black uppercase tracking-widest shadow-2xl shadow-blue-600/30 transition-all transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: `${NAV_ITEMS.length * 100}ms` }}
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
