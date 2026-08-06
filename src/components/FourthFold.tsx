import React from 'react';
import dobra4Img from '../assets/images/dobra4.jpeg';
import { 
  ArrowRight, 
  Search, 
  FileSearch, 
  UserCheck, 
  Unlock, 
  FileText, 
  Scale, 
  FileStack, 
  Landmark 
} from 'lucide-react';

interface FourthFoldProps {
  onOpenEmergencyModal: () => void;
}

export const FourthFold: React.FC<FourthFoldProps> = ({ onOpenEmergencyModal }) => {
  const steps = [
    { label: "FLAGRANTE", icon: Search },
    { label: "AUDIÊNCIA DE CUSTÓDIA", icon: UserCheck },
    { label: "LIBERDADE E MEDIDAS URGENTES", icon: Unlock },
    { label: "BUSCA E APREENSÃO", icon: FileSearch },
    { label: "INQUÉRITO POLICIAL", icon: FileText },
    { label: "PROCESSO CRIMINAL", icon: Scale },
    { label: "RECURSOS", icon: FileStack },
    { label: "EXECUÇÃO PENAL", icon: Landmark }
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
            Defesa técnica desde os primeiros atos da investigação até o processo e a execução penal, com análise criteriosa das provas, da legalidade dos procedimentos e das circunstâncias específicas de cada caso.
          </p>

          {/* Discrete Stages Bar with Icons */}
          <div className="pt-4 pb-4 border-y border-[#B8BBC0]/50 flex flex-wrap items-center gap-2.5 sm:gap-3">
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <React.Fragment key={step.label}>
                  <div className="bg-[#18191B] text-[#F7F7F5] px-4 py-2.5 rounded-lg flex items-center space-x-2.5 text-xs font-semibold tracking-wider shadow-sm hover:bg-[#000000] transition-colors">
                    <IconComponent className="w-4 h-4 text-[#D1D5DB] shrink-0" />
                    <span className="whitespace-nowrap">{step.label}</span>
                  </div>
                  {idx < steps.length - 1 && (
                    <span className="text-[#74777C] text-sm font-bold">•</span>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button
              onClick={onOpenEmergencyModal}
              className="silver-button w-full sm:w-auto px-8 py-4 rounded-md text-xs font-bold uppercase tracking-widest flex items-center justify-center space-x-3 cursor-pointer"
            >
              <span>AGENDAR ATENDIMENTO</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: Full Color Photo Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-md aspect-[4/3] sm:aspect-[14/10] rounded-lg overflow-hidden border border-[#B8BBC0]/50 shadow-xl group">
            <img
              src={dobra4Img}
              alt="Deyse Ramaiane - Atuação Especializada em Tráfico de Drogas"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/dobra4.jpeg";
              }}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 contrast-105 brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C]/40 via-transparent to-transparent"></div>
          </div>
        </div>

      </div>
    </section>
  );
};
