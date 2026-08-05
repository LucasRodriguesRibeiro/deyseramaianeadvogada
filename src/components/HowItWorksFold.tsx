import React from 'react';
import { Search, Compass, ShieldCheck, UserCheck } from 'lucide-react';

interface HowItWorksFoldProps {
  onOpenEmergencyModal: () => void;
}

export const HowItWorksFold: React.FC<HowItWorksFoldProps> = ({ onOpenEmergencyModal }) => {
  const steps = [
    {
      num: "01",
      icon: Search,
      title: "ANÁLISE INICIAL DO CASO",
      desc: "Compreensão detalhada da situação e verificação dos elementos urgentes."
    },
    {
      num: "02",
      icon: Compass,
      title: "DEFINIÇÃO DA ESTRATÉGIA",
      desc: "Estabelecimento das medidas defensivas prioritárias e da linha de atuação."
    },
    {
      num: "03",
      icon: ShieldCheck,
      title: "ATUAÇÃO TÉCNICA E IMEDIATA",
      desc: "Execução das medidas jurídicas cabíveis perante autoridade policial ou judiciária."
    },
    {
      num: "04",
      icon: UserCheck,
      title: "ACOMPANHAMENTO E INFORMAÇÃO",
      desc: "Atualização constante sobre o andamento do caso e orientação contínua."
    }
  ];

  return (
    <section id="como-funciona" className="relative w-full bg-[#F7F7F5] text-[#0B0B0C] py-20 sm:py-28 font-sans-clean border-t border-[#B8BBC0]/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3 text-left max-w-3xl">
          <div className="inline-flex items-center space-x-3 text-xs tracking-[0.25em] text-[#74777C] uppercase font-semibold">
            <span className="w-8 h-[1px] bg-[#74777C]"></span>
            <span>PROCESSO DE ATENDIMENTO</span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-[2.75rem] font-normal text-[#0B0B0C] tracking-tight">
            COMO FUNCIONA O ATENDIMENTO
          </h2>
          <p className="text-[#74777C] text-sm sm:text-base font-light">
            Metodologia transparente e estruturada para garantir a melhor condução do seu caso.
          </p>
        </div>

        {/* 4 Steps Visual Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-[#FFFFFF] border border-[#B8BBC0]/40 p-6 sm:p-7 rounded-md shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold tracking-widest text-[#74777C]">
                      {step.num}
                    </span>
                    <Icon className="w-5 h-5 text-[#18191B]" />
                  </div>

                  <h3 className="font-semibold text-xs tracking-wider uppercase text-[#0B0B0C] leading-snug pt-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#74777C] leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>

                <div className="w-full h-[2px] bg-[#0B0B0C]/10"></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
