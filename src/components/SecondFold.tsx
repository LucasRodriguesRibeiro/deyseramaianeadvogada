import React from 'react';

export const SecondFold: React.FC = () => {
  return (
    <section id="sobre" className="relative w-full bg-[#07080b] text-slate-100 py-16 sm:py-24 lg:py-28 border-t border-slate-800/80 overflow-hidden font-['Poppins',sans-serif]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        
        {/* Left Column: Text Content strictly matching the image text */}
        <div className="lg:col-span-6 space-y-6 sm:space-y-7 text-center lg:text-left flex flex-col items-center lg:items-start">
          
          {/* Main Title */}
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-[2.6rem] font-bold leading-tight tracking-tight text-white">
            Qual o prazo para defesa em <span className="silver-text-gradient">caso de prisão?</span>
          </h2>

          <div className="space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed font-normal w-full">
            <p className="font-semibold text-slate-100 text-base sm:text-lg">
              Se alguém foi preso em flagrante, cada minuto conta.
            </p>

            {/* Highlighted Custody Hearing Callout Card */}
            <div className="bg-[#0e121c]/90 border border-slate-800/90 rounded-xl p-4 sm:p-5 text-center lg:text-left space-y-2 shadow-lg">
              <p className="text-slate-200 text-xs sm:text-sm">
                <strong className="text-amber-300 font-bold uppercase tracking-wider block mb-1">⚖️ Audiência de Custódia:</strong>
                <strong className="text-white font-semibold">No prazo legal</strong> após a prisão, o acusado deve passar por uma audiência de custódia, onde o juiz decidirá se a prisão será mantida ou não.
              </p>
            </div>

            <p className="text-slate-200">
              Esse é o momento crítico em que uma defesa bem articulada <strong className="text-white font-semibold">pode fazer toda a diferença.</strong>
            </p>

            <p className="text-slate-300 text-xs sm:text-sm font-light">
              Além disso, em casos de prisão temporária ou preventiva, cada segundo que o acusado passa sem uma defesa qualificada pode significar uma tragédia.
            </p>
          </div>

        </div>

        {/* Right Column: Prison Handcuffs Image */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end w-full">
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden border border-slate-800/90 shadow-2xl group">
            <img
              src="/src/assets/images/prison_handcuffs_bg_1785764557592.jpg"
              alt="Mãos algemadas em grades de prisão"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter brightness-90 contrast-110 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07080b] via-transparent to-transparent opacity-60"></div>
          </div>
        </div>

      </div>
    </section>
  );
};
