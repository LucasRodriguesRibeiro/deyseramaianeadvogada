import React from 'react';
import { ArrowRight, Stethoscope, Briefcase, Smartphone, Sparkles, Trees } from 'lucide-react';

interface FifthFoldProps {
  onOpenEmergencyModal: () => void;
}

export const FifthFold: React.FC<FifthFoldProps> = ({ onOpenEmergencyModal }) => {
  const sectors = [
    {
      icon: Briefcase,
      tag: "EMPRESAS & GESTORES",
      title: "Empresários, Executivos e Sociedades",
      desc: "Proteção contra riscos decorrentes de decisões corporativas, operações financeiras, tributárias, lavagem de dinheiro, fraudes e procedimentos de persecução penal."
    },
    {
      icon: Stethoscope,
      tag: "SAÚDE & MEDICINA",
      title: "Médicos, Clínicas e Instituições",
      desc: "Defesa técnica preventiva e atuante diante de questionamentos ético-penais e apuração de conduta profissional, preservando a reputação da carreira."
    },
    {
      icon: Trees,
      tag: "AGRONEGÓCIO & MEIO AMBIENTE",
      title: "Produtores Rurais e Atividade Ambiental",
      desc: "Atuação estratégica em investigações e processos por supostas infrações ambientais, autuações de órgãos de fiscalização, recursos naturais e licenciamento."
    },
    {
      icon: Smartphone,
      tag: "TECNOLOGIA & FINANÇAS",
      title: "Crimes Digitais e Fraudes Virtuais",
      desc: "Assistência jurídica especializada em investigações de crimes cibernéticos, fraudes bancárias, recuperação de ativos e ilícitos no ambiente digital."
    },
    {
      icon: Sparkles,
      tag: "MÍDIA & DIGITAL",
      title: "Influenciadores e Criadores de Conteúdo",
      desc: "Atuação estratégica na defesa de personalidades públicas e criadores de conteúdo diante de operações policiais, exposições e procedimentos na internet."
    }
  ];

  return (
    <section id="especialidades" className="relative w-full bg-[#0B0B0C] text-[#F7F7F5] py-20 sm:py-28 font-sans-clean border-t border-[#18191B]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-14">
        
        {/* Section Header */}
        <div className="space-y-3 text-left max-w-3xl border-b border-[#74777C]/20 pb-8">
          <div className="inline-flex items-center space-x-3 text-xs tracking-[0.25em] text-[#B8BBC0] uppercase font-semibold">
            <span className="w-8 h-[1px] bg-[#74777C]"></span>
            <span>GESTÃO DE RISCOS PENAIS</span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-[2.75rem] font-normal text-[#F7F7F5] tracking-tight">
            ATUAÇÃO POR SETOR E ATIVIDADE
          </h2>

          <p className="text-[#B8BBC0] text-sm sm:text-base font-light">
            A advocacia penal contemporânea atua onde o risco penal surge, salvaguardando a liberdade, o patrimônio e a reputação de profissionais e organizações.
          </p>
        </div>

        {/* Minimalist Sector List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <div
                key={idx}
                className="bg-[#18191B] border border-[#74777C]/20 rounded-md p-7 flex flex-col justify-between hover:border-[#B8BBC0]/50 transition-all duration-300 group shadow-md"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-[#B8BBC0]">
                      <Icon className="w-5 h-5" />
                      <span className="text-[10px] tracking-widest uppercase font-mono font-semibold">
                        {sec.tag}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-serif-title text-xl text-[#F7F7F5] leading-snug group-hover:text-[#FFFFFF] transition-colors">
                    {sec.title}
                  </h3>

                  <p className="text-xs text-[#B8BBC0] leading-relaxed font-light">
                    {sec.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#74777C]/15 flex items-center justify-between">
                  <button
                    onClick={onOpenEmergencyModal}
                    className="text-[11px] font-medium tracking-wider text-[#B8BBC0] group-hover:text-[#F7F7F5] flex items-center space-x-2 transition-colors cursor-pointer uppercase"
                  >
                    <span>CONSULTAR ATUAÇÃO</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
