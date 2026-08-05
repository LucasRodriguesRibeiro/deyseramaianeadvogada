import React, { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

interface PracticeAreasFoldProps {
  onOpenEmergencyModal: () => void;
}

export const PracticeAreasFold: React.FC<PracticeAreasFoldProps> = ({ onOpenEmergencyModal }) => {
  const [showAll, setShowAll] = useState(false);

  const practiceAreas = [
    {
      title: "DIREITO PENAL E PROCESSO PENAL",
      desc: "Defesa técnica e estratégica em investigações e processos criminais."
    },
    {
      title: "TRÁFICO DE DROGAS",
      desc: "Atuação especializada em investigações, prisões e processos relacionados à Lei de Drogas."
    },
    {
      title: "EXECUÇÃO PENAL",
      desc: "Atuação durante o cumprimento da pena e defesa dos direitos da pessoa condenada."
    },
    {
      title: "DIREITO PENAL MILITAR E DEFESA DE POLICIAIS E MILITARES",
      desc: "Defesa especializada de policiais militares, policiais civis, bombeiros militares e integrantes das Forças Armadas em investigações, processos criminais e procedimentos relacionados ao exercício da função."
    },
    {
      title: "CRIMES DIGITAIS",
      desc: "Atuação jurídica em crimes praticados no ambiente digital e investigações envolvendo tecnologia."
    },
    {
      title: "DIREITO PENAL EMPRESARIAL E COMPLIANCE CRIMINAL",
      desc: "Defesa estratégica de empresários, sócios, administradores, executivos e empresas em investigações e processos por crimes empresariais, econômicos, tributários, lavagem de dinheiro, fraudes e crimes contra a Administração Pública, desde a fase investigativa até as instâncias superiores."
    },
    {
      title: "MÉDICOS E CLÍNICAS",
      desc: "Defesa criminal estratégica de profissionais da saúde, clínicas e instituições."
    },
    {
      title: "FRAUDES BANCÁRIAS",
      desc: "Atuação em situações envolvendo fraudes financeiras e medidas voltadas à recuperação de prejuízos."
    },
    {
      title: "INVESTIGAÇÕES CRIMINAIS",
      desc: "Atuação desde as fases iniciais da investigação, com definição antecipada da estratégia de defesa."
    }
  ];

  const displayedAreas = showAll ? practiceAreas : practiceAreas.slice(0, 3);

  return (
    <section id="areas-de-atuacao" className="relative w-full bg-[#0B0B0C] text-[#F7F7F5] py-20 sm:py-28 font-sans-clean border-t border-[#18191B]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-12">
        
        {/* Section Title */}
        <div className="space-y-3 text-left">
          <div className="inline-flex items-center space-x-3 text-xs tracking-[0.25em] text-[#B8BBC0] uppercase font-semibold">
            <span className="w-8 h-[1px] bg-[#74777C]"></span>
            <span>ÁREAS DE ATUAÇÃO</span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-[2.75rem] font-normal text-[#F7F7F5] tracking-tight">
            ATUAÇÃO TÉCNICA E ESTRATÉGICA
          </h2>
        </div>

        {/* Minimalist Cards Grid (1 col mobile, 2 or 3 cols desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedAreas.map((area, idx) => (
            <div
              key={idx}
              className="bg-[#18191B] border border-[#74777C]/20 rounded-md p-6 flex flex-col justify-between hover:border-[#B8BBC0]/50 transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <div className="space-y-3">
                <div className="text-[10px] tracking-widest text-[#B8BBC0] font-mono">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <h3 className="font-semibold text-sm tracking-wider uppercase text-[#F7F7F5] leading-snug">
                  {area.title}
                </h3>
                <p className="text-xs text-[#B8BBC0] leading-relaxed font-light">
                  {area.desc}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-[#74777C]/15 flex items-center justify-between">
                <button
                  onClick={onOpenEmergencyModal}
                  className="text-[11px] font-medium tracking-wider text-[#B8BBC0] group-hover:text-[#F7F7F5] flex items-center space-x-2 transition-colors cursor-pointer uppercase"
                >
                  <span>SOLICITAR ANÁLISE</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Toggle Button "VER TODAS ÁREAS" */}
        <div className="pt-4 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="silver-outline-button px-8 py-4 rounded-md text-xs font-semibold uppercase tracking-widest flex items-center space-x-3 transition-all cursor-pointer"
          >
            <span>{showAll ? 'MOSTRAR MENOS ÁREAS' : 'VER TODAS ÁREAS'}</span>
            {showAll ? (
              <ChevronUp className="w-4 h-4 text-[#F7F7F5]" />
            ) : (
              <ChevronDown className="w-4 h-4 text-[#F7F7F5]" />
            )}
          </button>
        </div>

      </div>
    </section>
  );
};
