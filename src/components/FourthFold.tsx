import React from 'react';
import { ArrowRight } from 'lucide-react';
import drugLawBg from '../assets/images/drug_law_defense_bg.png';

interface FourthFoldProps {
  onOpenEmergencyModal: () => void;
}

export const FourthFold: React.FC<FourthFoldProps> = ({ onOpenEmergencyModal }) => {
  const steps = [
    "Flagrante",
    "Busca e apreensão",
    "Audiência de custódia",
    "Processo criminal",
    "Recursos",
    "Execução penal"
  ];

  return (
    <section id="trafico-de-drogas" className="relative w-full bg-[#F7F7F5] text-[#0B0B0C] py-20 sm:py-28 font-sans-clean overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text & Content */}
        <div className="lg:col-span-7 space-y-8 text-left">
          {/* Header Tag */}
          <div className="inline-flex items-center space-x-3 text-xs tracking-[0.25em] text-[#74777C] uppercase font-semibold">
            <span className="w-8 h-[1px] bg-[#74777C]"></span>
            <span>POSICIONAMENTO ESPECIALIZADO</span>
          </div>

          {/* Title */}
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-[2.75rem] font-normal text-[#0B0B0C] tracking-tight">
            ATUAÇÃO ESPECIALIZADA EM TRÁFICO DE DROGAS
          </h2>

          {/* Text Paragraph */}
          <p className="text-[#18191B] text-base sm:text-lg leading-relaxed font-light">
            Defesa técnica em investigações e processos relacionados à Lei de Drogas, com análise individualizada das circunstâncias do caso, das provas produzidas e da legalidade dos atos investigativos.
          </p>

          {/* Discrete Stages Bar */}
          <div className="pt-4 pb-2 border-y border-[#B8BBC0]/50 flex flex-wrap items-center gap-2 text-xs font-medium text-[#18191B] tracking-wider uppercase">
            {steps.map((step, idx) => (
              <React.Fragment key={step}>
                <span className="bg-[#18191B] text-[#F7F7F5] px-3.5 py-1.5 rounded-sm">
                  {step}
                </span>
                {idx < steps.length - 1 && (
                  <span className="text-[#74777C]">•</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button
              onClick={onOpenEmergencyModal}
              className="silver-button px-8 py-4 rounded-md text-xs font-bold uppercase tracking-widest flex items-center space-x-3 cursor-pointer"
            >
              <span>CONHECER A ATUAÇÃO</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: Full Color Photo Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-md aspect-[4/3] sm:aspect-[14/10] rounded-lg overflow-hidden border border-[#B8BBC0]/50 shadow-xl group">
            <img
              src={drugLawBg}
              alt="Atuação Especializada em Tráfico de Drogas e Lei de Drogas"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 contrast-105 brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C]/40 via-transparent to-transparent"></div>
          </div>
        </div>

      </div>
    </section>
  );
};
