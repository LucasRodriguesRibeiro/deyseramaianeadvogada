import React from 'react';
import { MessageCircle } from 'lucide-react';
import dobra1Img from '../assets/images/dobra1.jfif';

interface HeroFoldProps {
  onOpenEmergencyModal: () => void;
}

export const HeroFold: React.FC<HeroFoldProps> = ({ onOpenEmergencyModal }) => {
  return (
    <section className="relative w-full bg-[#0B0B0C] text-[#F7F7F5] font-sans-clean overflow-hidden min-h-[85vh] lg:min-h-[90vh] flex items-center">
      
      {/* Right Background Lawyer Photo in FULL VIVID COLOR - Bright and Clear */}
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[60%] pointer-events-none z-0 overflow-hidden">
        <img
          src={dobra1Img}
          alt="Dra. Deyse Ramaiane - Advocacia Criminal"
          className="w-full h-full object-cover object-[70%_20%] lg:object-[62%_25%] contrast-105 brightness-105 opacity-90 lg:opacity-100"
        />
        {/* Soft, subtle edge gradient transition so text is readable while photo remains fully bright and clear */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0C] via-[#0B0B0C]/75 via-35% lg:via-25% to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0C]/30 via-transparent to-[#0B0B0C]/80"></div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full z-10 relative py-24 lg:py-32">
        <div className="max-w-xl lg:max-w-xl space-y-8 text-left">
          
          {/* Main Display Title - Identical to Reference Screenshot */}
          <div className="space-y-3">
            <h1 className="font-serif-title text-6xl sm:text-7xl lg:text-[5.5rem] xl:text-[6.2rem] font-light leading-[0.92] text-[#F7F7F5] tracking-tight uppercase">
              DRA.<br />
              RAMAIANE
            </h1>
            <p className="text-xs sm:text-sm tracking-[0.3em] text-[#B8BBC0] uppercase font-medium pt-1">
              ADVOCACIA CRIMINAL
            </p>
          </div>

          {/* Action Button - Identical to Reference Screenshot */}
          <div className="pt-4">
            <button
              onClick={onOpenEmergencyModal}
              className="border border-[#F7F7F5]/80 hover:border-[#F7F7F5] bg-[#0B0B0C]/60 hover:bg-white/10 text-[#F7F7F5] px-7 py-3.5 rounded-sm text-xs font-semibold uppercase tracking-widest flex items-center space-x-3 transition-all cursor-pointer backdrop-blur-sm"
            >
              <MessageCircle className="w-4 h-4 text-[#F7F7F5]" />
              <span>FALAR COM A ADVOGADA</span>
            </button>
          </div>

        </div>
      </div>

      {/* Floating Emergency Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={onOpenEmergencyModal}
          className="p-4 bg-[#18191B] hover:bg-[#232528] text-[#F7F7F5] rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer border border-[#B8BBC0]/30"
          aria-label="Solicitar Atendimento Urgente"
        >
          <MessageCircle className="w-6 h-6 text-[#B8BBC0]" />
        </button>
      </div>

    </section>
  );
};


