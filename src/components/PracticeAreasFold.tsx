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
      title: "DIREITO PENAL EMPRESARIAL E COMPLIANCE CRIMINAL",
      desc: "Defesa de empresários, gestores, sócios e executivos em investigações e processos por crimes empresariais, econômicos, tributários, lavagem de dinheiro, fraudes e crimes contra a Administração Pública, desde a fase investigativa até as instâncias superiores."
    },
    {
      title: "DIREITO PENAL AMBIENTAL",
      desc: "Atuação estratégica na defesa de pessoas físicas, empresários, produtores rurais, gestores e empresas em investigações e processos penais envolvendo fauna, flora, desmatamento, queimadas, recursos naturais, mineração, poluição e licenciamento ambiental."
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
      title: "MÉDICOS E CLÍNICAS",
      desc: "Defesa criminal estratégica de profissionais da saúde, clínicas e instituições diante de questionamentos sobre a conduta profissional."
    },
    {
      title: "FRAUDES BANCÁRIAS",
      desc: "Atuação em situações envolvendo fraudes financeiras e medidas voltadas à recuperação de prejuízos."
    },
    {
      title: "DEFESA CRIMINAL DE ESTRANGEIROS",
      desc: "Assistência jurídica a estrangeiros investigados, presos ou acusados de crimes no Brasil, com atuação desde a delegacia e audiência de custódia até o processo criminal e a execução penal."
    },
    {
      title: "INQUÉRITOS, INVESTIGAÇÕES E OPERAÇÕES POLICIAIS",
      desc: "Atuação desde as fases iniciais da investigação, com definição antecipada da estratégia de defesa."
    },
    {
      title: "CRIMES PATRIMONIAIS",
      desc: "Atuação em investigações e processos envolvendo estelionato, apropriação indébita, furto, roubo, receptação e extorsão."
    },
    {
      title: "CRIMES FINANCEIROS E LAVAGEM DE DINHEIRO",
      desc: "Defesa em investigações e processos relacionados a lavagem de capitais, delitos financeiros e operações patrimoniais investigadas."
    },
    {
      title: "CRIMES TRIBUTÁRIOS E ECONÔMICOS",
      desc: "Atuação em crimes contra a ordem tributária, econômica e em investigações decorrentes da atividade empresarial."
    },
    {
      title: "CRIMES CONTRA A ADMINISTRAÇÃO PÚBLICA",
      desc: "Defesa em casos envolvendo corrupção, peculato, concussão, prevaricação e outros delitos relacionados à Administração Pública."
    },
    {
      title: "LICITAÇÕES E CONTRATOS PÚBLICOS",
      desc: "Atuação criminal em investigações envolvendo licitações, contratos administrativos, empresários, gestores e agentes públicos."
    },
    {
      title: "CRIMES CONTRA A HONRA E A IMAGEM",
      desc: "Atuação em casos de calúnia, difamação e injúria, inclusive quando praticados no ambiente digital ou em redes sociais."
    }
  ];

  const displayedAreas = showAll ? practiceAreas : practiceAreas.slice(0, 3);

  return (
    <section id="areas-de-atuacao" className="relative w-full bg-[#0B0B0C] text-[#F7F7F5] py-20 sm:py-28 font-sans-clean border-t border-[#18191B] overflow-hidden">
      {/* Background Metallic Hourglass Image */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full z-0 opacity-15 pointer-events-none">
        <img
          src="/images/hourglass_silver_dark_1785765462160.jpg"
          alt="Ampulheta Prata - Justiça Criminal"
          className="w-full h-full object-cover object-right filter contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0C] via-[#0B0B0C]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0C] via-transparent to-[#0B0B0C]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-12 relative z-10">
        
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
                  <span>AGENDAR ATENDIMENTO</span>
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
