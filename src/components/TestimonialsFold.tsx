import React from 'react';
import { Star, ShieldCheck, Quote, MessageCircle } from 'lucide-react';

interface TestimonialsFoldProps {
  onOpenEmergencyModal: () => void;
}

export const TestimonialsFold: React.FC<TestimonialsFoldProps> = ({ onOpenEmergencyModal }) => {
  const testimonials = [
    {
      name: 'M. S.',
      role: 'Atendimento Prisão em Flagrante',
      rating: 5,
      date: 'Há 2 semanas',
      comment:
        'A Dra. Deyse agiu com extrema rapidez na audiência de custódia do meu irmão. Conseguiu a liberdade provisória no mesmo dia com uma fundamentação impecável. Eterna gratidão!',
    },
    {
      name: 'R. A. F.',
      role: 'Defesa em Inquérito Policial',
      rating: 5,
      date: 'Há 1 mês',
      comment:
        'Excelente profissional! Manteve a família informada a todo momento com total transparência e discrição. Conseguiu o arquivamento do inquérito antes de qualquer denúncia.',
    },
    {
      name: 'L. C. V.',
      role: 'Processo Lei de Drogas',
      rating: 5,
      date: 'Há 2 meses',
      comment:
        'A melhor advogada criminalista. Tinha um caso extremamente delicado envolvendo a Lei de Drogas, e a Dra. Deyse elaborou uma tese técnica impecável que levou à absolvição.',
    },
    {
      name: 'A. P. M.',
      role: 'Habeas Corpus / Liberdade',
      rating: 5,
      date: 'Há 3 meses',
      comment:
        'Atendimento humanizado e resposta imediata às 3h da manhã. O Habeas Corpus impetrado por ela foi concedido no Tribunal. Transmite segurança e domínio total da matéria.',
    },
  ];

  return (
    <section id="depoimentos" className="relative w-full bg-[#06080e] text-slate-100 py-16 sm:py-24 lg:py-28 border-t border-slate-800/80 font-['Poppins',sans-serif]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-3.5">
          <div className="flex items-center justify-center space-x-3 text-xs tracking-[0.25em] font-light text-slate-400 uppercase">
            <span className="w-12 h-[1px] bg-slate-600"></span>
            <span className="font-serif-title text-xl sm:text-2xl text-slate-200 tracking-widest">
              AVALIAÇÕES E DEPOIMENTOS
            </span>
            <span className="w-12 h-[1px] bg-slate-600"></span>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-slate-100">
            O que nossos clientes dizem
          </h2>

          {/* Rating Summary Badge */}
          <div className="inline-flex items-center space-x-2.5 bg-[#0c0f18] border border-slate-800/90 px-4 py-2 rounded-full mt-2 shadow-md">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-xs font-semibold text-slate-200">5.0 de 5.0</span>
            <span className="text-xs text-slate-400">| Avaliações verificadas</span>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0b0e16]/90 border border-slate-800/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-slate-500 transition-all duration-300 hover:bg-[#101420] shadow-xl group min-h-[260px]"
            >
              <div className="space-y-4">
                {/* Header with Quote Icon & Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-slate-600 group-hover:text-slate-400 transition-colors" />
                </div>

                {/* Comment Text */}
                <p className="text-xs text-slate-300 leading-relaxed font-light italic">
                  "{item.comment}"
                </p>
              </div>

              {/* Client Info */}
              <div className="pt-4 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-1.5">
                    <span className="font-bold text-xs text-slate-100">{item.name}</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <span className="text-[10px] text-slate-400 block mt-0.5">{item.role}</span>
                </div>
                <span className="text-[9px] text-slate-500">{item.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-12 text-center flex justify-center w-full">
          <button
            onClick={onOpenEmergencyModal}
            className="silver-button w-full sm:w-auto px-8 py-3.5 rounded-lg text-xs font-bold uppercase tracking-widest inline-flex items-center justify-center space-x-2.5 shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>FALAR COM A ADVOGADA AGORA</span>
          </button>
        </div>

      </div>
    </section>
  );
};
