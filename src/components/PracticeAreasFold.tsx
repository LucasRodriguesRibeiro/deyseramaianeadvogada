import React from 'react';
import { ShieldAlert, Gavel, Scale, FileText, Lock, Clock, MessageCircle, ChevronRight } from 'lucide-react';

interface PracticeAreasFoldProps {
  onOpenEmergencyModal: () => void;
}

export const PracticeAreasFold: React.FC<PracticeAreasFoldProps> = ({ onOpenEmergencyModal }) => {
  const areas = [
    {
      icon: <ShieldAlert className="w-7 h-7 text-[#d4af37]" />,
      title: "Prisões em Flagrante & Delegacias",
      desc: "Presença física imediata na delegacia para acompanhamento de depoimentos, garantia dos direitos constitucionais e combate a abusos."
    },
    {
      icon: <Gavel className="w-7 h-7 text-[#d4af37]" />,
      title: "Audiências de Custódia",
      desc: "Defesa estratégica formulada nas primeiras 24 horas para reverter prisões cautelares e buscar a liberdade provisória com ou sem fiança."
    },
    {
      icon: <FileText className="w-7 h-7 text-[#d4af37]" />,
      title: "Habeas Corpus de Urgência",
      desc: "Impetração célere e fundamentada perante os Tribunais de Justiça (TJ), Tribunal Regional Federal (TRF), STJ e STF."
    },
    {
      icon: <Lock className="w-7 h-7 text-[#d4af37]" />,
      title: "Revogação de Prisão Preventiva",
      desc: "Análise técnica minuciosa dos pressupostos da prisão cautelar para demonstrar a desnecessidade da segregação e obter a soltura."
    },
    {
      icon: <Scale className="w-7 h-7 text-[#d4af37]" />,
      title: "Defesa em Processos Criminais",
      desc: "Defesa completa em ações penais, Tribunal do Júri, crimes contra o patrimônio, lei de drogas, crimes financeiros e ambientais."
    },
    {
      icon: <Clock className="w-7 h-7 text-[#d4af37]" />,
      title: "Execução Penal & Progressão",
      desc: "Acompanhamento do cumprimento de pena, pedidos de progressão de regime (fechado, semiaberto, aberto), remição e livramento condicional."
    }
  ];

  return (
    <section className="relative py-20 bg-[#0d121c] text-slate-100 border-t border-slate-800/80 overflow-hidden">
      {/* Background Glow Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c8953c]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c8953c]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#f3e5ab] text-xs font-semibold tracking-widest uppercase">
            <span>2ª Dobra - Áreas de Atuação</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-100">
            Atuação Especializada em <span className="gold-text-gradient">Defesa Criminal de Urgência</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Não arrisque a liberdade de quem você ama com defesas genéricas. Atuamos exclusivamente na esfera criminal com agilidade e rigor técnico.
          </p>
        </div>

        {/* Practice Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {areas.map((area, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-2xl bg-[#121826]/80 border border-slate-800 hover:border-[#d4af37]/50 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
            >
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 w-fit mb-5 group-hover:border-[#d4af37]/40 transition-colors">
                {area.icon}
              </div>
              <h3 className="font-serif-display text-xl font-bold text-slate-100 mb-3 group-hover:text-[#f3e5ab] transition-colors">
                {area.title}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                {area.desc}
              </p>
              <button
                onClick={onOpenEmergencyModal}
                className="text-xs font-bold text-[#e6c670] hover:text-white flex items-center space-x-1 transition-colors group/link"
              >
                <span>Acionar Defesa para este caso</span>
                <ChevronRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Action Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#182133] via-[#211a10] to-[#182133] border border-[#d4af37]/30 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="font-serif-display text-2xl font-bold text-[#f3e5ab]">
              Precisa de um Advogado Criminalista na Delegacia Agora?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Nossa equipe está de plantão 24 horas por dia, pronta para deslocamento imediato e atendimento presencial.
            </p>
          </div>
          <button
            onClick={onOpenEmergencyModal}
            className="gold-button py-3.5 px-8 rounded-xl text-sm uppercase tracking-wider font-bold whitespace-nowrap flex items-center space-x-2"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Falar no Plantão 24h</span>
          </button>
        </div>

      </div>
    </section>
  );
};
