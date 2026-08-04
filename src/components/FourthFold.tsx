import React from 'react';
import { Lock, Leaf, Scale, ShieldCheck, Gavel, UserCheck } from 'lucide-react';

interface FourthFoldProps {
  onOpenEmergencyModal: () => void;
}

export const FourthFold: React.FC<FourthFoldProps> = ({ onOpenEmergencyModal }) => {
  const cards = [
    {
      icon: Lock,
      title: 'REQUERIMENTOS DE LIBERDADE IMEDIATA',
      description:
        'Não deixe que a liberdade de quem você ama fique em jogo. Conhecemos os caminhos mais rápidos e eficazes para libertar quem está preso, seja por meio de audiência de custódia, pedidos de relaxamento ou revogação de prisão, ou através do poderoso Habeas Corpus. Nossa equipe utiliza as mais modernas e atualizadas estratégias de defesa para buscar a soltura de nossos clientes.',
    },
    {
      icon: Leaf,
      title: 'DEFESA EM CASOS DE TRÁFICO',
      description:
        'O tráfico de drogas é um dos crimes mais graves, mas isso não significa que não haja solução. Mudanças recentes na legislação e na jurisprudência podem permitir, dependendo do caso, que o acusado nem mesmo responda a um processo. Nossa experiência e conhecimento garantem as maiores chances de sucesso na defesa.',
    },
    {
      icon: Scale,
      title: 'TRIBUNAL DO JÚRI',
      description:
        'Quando a liberdade está em jogo no Tribunal do Júri, você precisa de uma defesa que vá além do comum. Nossa equipe combina oratória poderosa com uma capacidade técnica multidisciplinar, podendo transformar condenações graves em resultados favoráveis. Confie em quem tem um histórico de sucesso comprovado.',
    },
    {
      icon: ShieldCheck,
      title: 'PROTEÇÃO ÀS VÍTIMAS',
      description:
        'Se você foi vítima de violência doméstica ou de crimes como injúria, difamação ou calúnia, estamos aqui para defender seus direitos com vigor. Atuamos fortemente no ajuizamento de queixas-crime e na assistência de acusação, oferecendo um serviço que coloca você em primeiro lugar.',
    },
    {
      icon: Gavel,
      title: 'EXECUÇÃO PENAL',
      description:
        'Mesmo após o encerramento de um processo, nossas batalhas continuam. Trabalhamos para anular condenações injustas, reduzir penas e assegurar os benefícios que a lei garante. Sua liberdade e justiça são nossas prioridades.',
    },
    {
      icon: UserCheck,
      title: 'ATUAÇÃO EM DELEGACIAS',
      description:
        'Estamos prontos para agir em casos de prisões em flagrante, conduzindo investigações defensivas que coletam provas favoráveis ao acusado e garantem a proteção dos seus direitos.',
    },
  ];

  return (
    <section id="servicos" className="relative w-full bg-[#06080e] text-slate-100 py-16 sm:py-24 lg:py-28 border-t border-slate-800/80 font-['Poppins',sans-serif]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-amber-400/90 text-xs sm:text-sm tracking-[0.22em] font-medium uppercase mb-2.5">
            Atuamos em todos os casos criminais
          </p>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-amber-200/90">
            Como eu posso te ajudar
          </h2>
        </div>

        {/* 6 Grid Cards Layout (3x2 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <div
                key={idx}
                className="bg-[#0b101c] border border-slate-800/90 hover:border-amber-500/40 rounded-2xl p-7 sm:p-8 flex flex-col justify-between text-center transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-amber-950/20 group"
              >
                <div className="flex flex-col items-center">
                  {/* Circular Golden Badge */}
                  <div className="w-14 h-14 rounded-full bg-amber-600/20 border border-amber-500/50 flex items-center justify-center text-amber-300 mb-6 group-hover:scale-110 group-hover:bg-amber-500/30 transition-all duration-300 shadow-inner">
                    <IconComponent className="w-7 h-7 stroke-[1.5]" />
                  </div>

                  {/* Card Title */}
                  <h3 className="font-bold text-sm sm:text-base tracking-wider text-slate-100 uppercase mb-4 leading-snug">
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-12 sm:mt-16 flex justify-center w-full">
          <button
            onClick={onOpenEmergencyModal}
            className="w-full sm:w-auto bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold px-9 py-4 rounded-xl text-xs sm:text-sm tracking-widest uppercase shadow-xl hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 transform hover:scale-[1.03] active:scale-95 cursor-pointer flex items-center justify-center space-x-2"
          >
            <span>Quero contratar a melhor defesa</span>
          </button>
        </div>

      </div>
    </section>
  );
};
