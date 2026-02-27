
import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = "", size = "md" }) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-16 h-16"
  };

  return (
    <div className={`${sizeClasses[size]} ${className} relative flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[#0061A8] via-[#004A80] to-[#00355C] shadow-lg`}>
      {/* Glossy overlay effect to match high-end aesthetics */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
      
      <svg viewBox="0 0 100 100" className="w-[65%] h-[65%] text-white fill-current drop-shadow-md">
        {/* Stylized 'D' path based on company branding */}
        <path d="M25 20 H58 C78 20 88 35 88 50 C88 65 78 80 58 80 H25 V20 Z M42 35 V48 H25 V52 H42 V65 H58 C68 65 75 58 75 50 C75 42 68 35 58 35 H42 Z" />
      </svg>
    </div>
  );
};

export default Logo;
