import React from 'react';
import { MessageCircle, ShieldCheck, PhoneCall, Award } from 'lucide-react';
import dobra1Img from '../assets/images/dobra1.jfif';

interface HeroFoldProps {
  onOpenEmergencyModal: () => void;
}

export const HeroFold: React.FC<HeroFoldProps> = ({ onOpenEmergencyModal }) => {
  return (
    <section className="relative w-full bg-[#0B0B0C] text-[#F7F7F5] font-sans-clean overflow-hidden min-h-[90vh] lg:min-h-[92vh] flex items-end lg:items-center">
      
      {/* Background Lawyer Photo */}
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[60%] pointer-events-none z-0 overflow-hidden">
        <img
          src={dobra1Img}
          alt="Dra. Deyse Ramaiane - Advocacia Criminal Estratégica"
          className="w-full h-full object-cover object-[78%_12%] sm:object-[70%_20%] lg:object-[62%_25%] contrast-105 brightness-90 lg:brightness-105 opacity-60 sm:opacity-80 lg:opacity-100"
        />
        
        {/* Mobile Gradient Mask: Rich dark vignette at bottom framing portrait above */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/90 via-60% to-[#0B0B0C]/20 lg:hidden"></div>

        {/* Desktop Edge Gradient Overlay */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#0B0B0C] via-[#0B0B0C]/75 via-25% to-transparent"></div>
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-b from-[#0B0B0C]/30 via-transparent to-[#0B0B0C]/80"></div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-12 w-full z-10 relative pb-12 pt-32 sm:py-24 lg:py-32">
        <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0 flex flex-col items-center lg:items-start space-y-6 sm:space-y-8">
          
          {/* Top Luxury Tag Badge */}
          <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-[#18191B]/90 border border-[#B8BBC0]/30 backdrop-blur-md shadow-lg">
            <ShieldCheck className="w-3.5 h-3.5 text-[#B8BBC0]" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.22em] text-[#F7F7F5] uppercase">
              ADVOCACIA CRIMINAL ESTRATÉGICA
            </span>
          </div>

          {/* Main Display Title */}
          <div className="space-y-3 w-full">
            <h1 className="font-serif-title text-4xl xs:text-5xl sm:text-7xl lg:text-[5.5rem] xl:text-[6.2rem] font-light leading-[0.94] text-[#F7F7F5] tracking-tight uppercase drop-shadow-xl">
              DRA. DEYSE<br />
              <span className="bg-gradient-to-r from-white via-[#EBEBE8] to-[#B8BBC0] bg-clip-text text-transparent font-normal">
                RAMAIANE
              </span>
            </h1>

            {/* Central Philosophy Subtitle */}
            <p className="font-serif-title italic text-sm sm:text-lg lg:text-xl text-[#B8BBC0] max-w-lg mx-auto lg:mx-0 leading-relaxed pt-1">
              "O Direito Penal está onde o risco penal está."
            </p>
          </div>

          {/* Quick Highlights Micro-Bar for Mobile & Desktop */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
            <div className="flex items-center space-x-1.5 bg-[#18191B]/80 border border-[#74777C]/30 px-3 py-1 rounded-sm text-[10px] sm:text-xs text-[#B8BBC0] uppercase tracking-wider font-medium">
              <Award className="w-3 h-3 text-[#B8BBC0]" />
              <span>10+ Anos de Atuação</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-[#18191B]/80 border border-[#74777C]/30 px-3 py-1 rounded-sm text-[10px] sm:text-xs text-[#B8BBC0] uppercase tracking-wider font-medium">
              <span>Atuação Nacional</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-[#18191B]/80 border border-[#74777C]/30 px-3 py-1 rounded-sm text-[10px] sm:text-xs text-[#B8BBC0] uppercase tracking-wider font-medium">
              <span>Preventiva & Urgências</span>
            </div>
          </div>

          {/* CTA Buttons Grid */}
          <div className="w-full max-w-md lg:max-w-none pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
            <button
              onClick={onOpenEmergencyModal}
              className="silver-button w-full sm:w-auto px-7 py-3.5 rounded-md text-xs font-bold uppercase tracking-widest flex items-center justify-center space-x-3 cursor-pointer shadow-2xl active:scale-95 transition-transform"
            >
              <MessageCircle className="w-4 h-4" />
              <span>FALAR COM A ADVOGADA →</span>
            </button>

            <button
              onClick={onOpenEmergencyModal}
              className="silver-outline-button w-full sm:w-auto px-6 py-3.5 rounded-md text-xs uppercase tracking-wider flex items-center justify-center space-x-2.5 cursor-pointer backdrop-blur-md active:scale-95 transition-transform"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#B8BBC0]" />
              <span>ATENDIMENTO DE URGÊNCIA 24H</span>
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


