
import React from 'react';
import { APP_CONFIG } from '../config';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${APP_CONFIG.WHATSAPP_NUMBER}?text=Hi Digitalsight, I'm interested in distributing my music!`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center animate-bounce-slow"
    >
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.031 6.172c-2.32 0-4.518.892-6.193 2.512-3.414 3.296-3.415 8.648-.003 11.944l-1.018 3.712 3.864-1.012c1.026.56 2.188.855 3.351.856h.001c4.71 0 8.541-3.83 8.543-8.54 0-2.28-.888-4.425-2.502-6.042-1.615-1.618-3.76-2.529-6.043-2.53zm5.035 11.876c-.232.651-1.34 1.196-1.85 1.274-.468.072-1.077.127-3.14-.723-2.64-1.085-4.346-3.766-4.478-3.94-.132-.174-1.074-1.428-1.074-2.724 0-1.296.677-1.933.918-2.193.241-.26.528-.326.704-.326.176 0 .352.001.506.008.163.007.382-.061.598.46.216.52.74 1.8.805 1.933.064.133.108.289.02.463-.088.174-.132.289-.264.444-.132.155-.278.347-.396.466-.131.13-.267.273-.114.536.153.262.68 1.118 1.46 1.814.999.893 1.841 1.171 2.103 1.302.262.131.415.109.57.033.153-.076.657-.765.834-1.027.175-.262.35-.218.59-.131.24.087 1.527.72 1.79.851.262.13.437.196.502.304.066.109.066.63-.166 1.281z"/>
      </svg>
    </a>
  );
};

export default WhatsAppButton;
