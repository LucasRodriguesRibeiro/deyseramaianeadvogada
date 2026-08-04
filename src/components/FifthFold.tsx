import React from 'react';
import { MessageCircle } from 'lucide-react';

interface FifthFoldProps {
  onOpenEmergencyModal: () => void;
}

export const FifthFold: React.FC<FifthFoldProps> = ({ onOpenEmergencyModal }) => {
  return (
    <section className="relative w-full bg-[#050608] text-slate-100 py-16 sm:py-24 lg:py-28 overflow-hidden border-t border-slate-800/80 font-['Poppins',sans-serif]">
      {/* Background Lawyer Office Image on the Right */}
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[52%] pointer-events-none z-0">
        <img
          src="/src/assets/images/advdeise-ramaiane.jfif"
          alt="Deyse Ramaiane Advocacia Criminal"
          className="w-full h-full object-cover object-[center_20%] grayscale contrast-125 brightness-90 opacity-35 lg:opacity-95"
        />
        {/* Soft dark gradients to blend into #050608 on the left and edges */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050608] via-[#050608]/80 lg:via-[#050608]/30 via-35% to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-transparent to-[#050608]/60"></div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        <div className="max-w-xl lg:max-w-2xl space-y-7 sm:space-y-8 text-left">
          
          {/* Main Title matching reference image */}
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-amber-200/95 leading-[1.18]">
            Por que escolher a Deyse Ramaiane <br className="hidden sm:inline" />
            Advocacia Criminal?
          </h2>

          {/* Callout 1 */}
          <div className="space-y-2.5">
            <h3 className="text-sm sm:text-base font-bold text-slate-100 tracking-wide">
              Não deixe sua liberdade nas mãos de qualquer um.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              Liderados pela Dra. Deyse Ramaiane, especialista na advocacia criminal, somos focados em soluções ágeis e eficientes na área penal. Nossa experiência, combinada com um atendimento personalizado e detalhado, assegura que você esteja sempre um passo à frente na defesa dos seus direitos e da sua liberdade.
            </p>
          </div>

          {/* Callout 2 */}
          <div className="space-y-2.5">
            <h3 className="text-sm sm:text-base font-bold text-slate-100 tracking-wide">
              Não perca tempo!
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              Cada minuto pode ser decisivo em um inquérito, prisão em flagrante ou processo. Contrate agora a melhor defesa técnica para proteger o seu maior bem: a liberdade.
            </p>
          </div>

          {/* Golden CTA Button matching reference image */}
          <div className="pt-2">
            <button
              onClick={onOpenEmergencyModal}
              className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold px-8 py-4 rounded-lg text-xs sm:text-sm tracking-wider uppercase shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 transform hover:scale-[1.02] active:scale-95 flex items-center space-x-2.5 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current text-slate-950" />
              <span>Quero contratar</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
