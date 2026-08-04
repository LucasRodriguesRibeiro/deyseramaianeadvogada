import React, { useState, useEffect } from 'react';
import hourglassImg from '../assets/images/hourglass_luxury_silver.png';

interface ThirdFoldProps {
  onOpenEmergencyModal: () => void;
}

export const ThirdFold: React.FC<ThirdFoldProps> = ({ onOpenEmergencyModal }) => {
  // Live countdown simulation
  const [timeLeft, setTimeLeft] = useState({
    hours: 21,
    minutes: 34,
    seconds: 58,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTwoDigits = (num: number) => num.toString().padStart(2, '0');

  return (
    <section className="relative w-full bg-gradient-to-b from-[#0a0c10] via-[#121620] to-[#07080b] text-slate-100 py-16 sm:py-24 lg:py-28 border-t border-slate-800/80 overflow-hidden font-['Poppins',sans-serif]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Hourglass Asset (ordered 2nd on mobile, 1st on desktop) */}
        <div className="order-2 lg:order-1 lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-56 sm:w-80 aspect-[3/4] flex items-center justify-center">
            <div className="absolute inset-0 bg-amber-500/10 rounded-full filter blur-3xl"></div>
            <img
              src={hourglassImg}
              alt="Ampulheta de vidro e prata para defesa criminal"
              className="relative z-10 max-h-[340px] sm:max-h-[380px] w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] rounded-2xl border border-slate-800/50"
            />
          </div>
        </div>

        {/* Right Column: Countdown + Message + CTA (ordered 1st on mobile, 2nd on desktop) */}
        <div className="order-1 lg:order-2 lg:col-span-7 space-y-7 sm:space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
          
          {/* Countdown Boxes */}
          <div className="flex items-center justify-center lg:justify-start space-x-2.5 sm:space-x-5 w-full">
            {/* Hours */}
            <div className="flex flex-col items-center justify-center bg-[#800c0c] border border-red-700/60 rounded-xl px-3 py-2.5 sm:px-6 sm:py-4 min-w-[75px] sm:min-w-[110px] shadow-xl shadow-red-950/40">
              <span className="text-xl sm:text-4xl font-extrabold text-white tracking-tight">
                {formatTwoDigits(timeLeft.hours)}
              </span>
              <span className="text-[9px] sm:text-xs font-semibold text-red-200 mt-0.5 sm:mt-1 uppercase tracking-wider">
                Horas
              </span>
            </div>

            {/* Minutes */}
            <div className="flex flex-col items-center justify-center bg-[#800c0c] border border-red-700/60 rounded-xl px-3 py-2.5 sm:px-6 sm:py-4 min-w-[75px] sm:min-w-[110px] shadow-xl shadow-red-950/40">
              <span className="text-xl sm:text-4xl font-extrabold text-white tracking-tight">
                {formatTwoDigits(timeLeft.minutes)}
              </span>
              <span className="text-[9px] sm:text-xs font-semibold text-red-200 mt-0.5 sm:mt-1 uppercase tracking-wider">
                Minutos
              </span>
            </div>

            {/* Seconds */}
            <div className="flex flex-col items-center justify-center bg-[#800c0c] border border-red-700/60 rounded-xl px-3 py-2.5 sm:px-6 sm:py-4 min-w-[75px] sm:min-w-[110px] shadow-xl shadow-red-950/40">
              <span className="text-xl sm:text-4xl font-extrabold text-white tracking-tight">
                {formatTwoDigits(timeLeft.seconds)}
              </span>
              <span className="text-[9px] sm:text-xs font-semibold text-red-200 mt-0.5 sm:mt-1 uppercase tracking-wider">
                Segundos
              </span>
            </div>
          </div>

          {/* Title */}
          <h2 className="font-serif-title text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
            Não deixe o tempo jogar contra você!
          </h2>

          {/* Description */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
            Contrate nossa equipe de especialistas imediatamente para garantir que todos os prazos sejam cumpridos e que a melhor defesa seja apresentada desde o início.
          </p>

          {/* Action Button */}
          <div className="pt-2 w-full sm:w-auto flex justify-center lg:justify-start">
            <button
              onClick={onOpenEmergencyModal}
              className="silver-button w-full sm:w-auto text-xs sm:text-sm py-4 px-8 sm:px-10 rounded-xl font-bold uppercase tracking-widest shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              Quero falar com a advogada
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
