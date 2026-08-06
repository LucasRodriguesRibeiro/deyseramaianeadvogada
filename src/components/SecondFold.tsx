import React from 'react';
import dobra2Img from '../assets/images/dobra2.jpeg';
import { Briefcase, UserCheck, Landmark, Smartphone, ShieldCheck } from 'lucide-react';

export const SecondFold: React.FC = () => {
  const quadroItems = [
    {
      title: "EMPRESARIAL",
      desc: "Prevenção e defesa diante de riscos e investigações criminais.",
      icon: Briefcase
    },
    {
      title: "PROFISSIONAL",
      desc: "Proteção jurídica em situações decorrentes do exercício profissional.",
      icon: UserCheck
    },
    {
      title: "FINANCEIRO",
      desc: "Atuação diante de investigações envolvendo operações financeiras e patrimônio.",
      icon: Landmark
    },
    {
      title: "DIGITAL",
      desc: "Defesa e orientação em situações com repercussão criminal no ambiente digital.",
      icon: Smartphone
    },
    {
      title: "PREVENTIVO",
      desc: "Identificação e gestão de riscos antes da instauração de procedimentos criminais.",
      icon: ShieldCheck
    }
  ];

  return (
    <section id="sobre" className="relative w-full bg-[#F7F7F5] text-[#0B0B0C] py-16 sm:py-24 font-sans-clean overflow-hidden">
      <div id="apresentacao" className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* Left Column: Professional Portrait */}
        <div className="lg:col-span-5 flex flex-col items-center relative lg:sticky lg:top-24">
          <div className="relative w-full max-w-md aspect-[4/5] rounded-lg overflow-hidden border border-[#B8BBC0]/60 shadow-xl">
            <img
              src={dobra2Img}
              alt="Deyse Ramaiane - Advocacia Criminal Estratégica"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/images/sobre_ramaiane.jpeg";
              }}
              className="w-full h-full object-cover object-top contrast-105 brightness-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C]/30 via-transparent to-transparent"></div>
          </div>
        </div>

        {/* Right Column: Narrative + Quadro + Quote */}
        <div className="lg:col-span-7 space-y-8 text-left">
          
          {/* Header */}
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-3 text-xs tracking-[0.25em] text-[#74777C] uppercase font-semibold">
              <span className="w-8 h-[1px] bg-[#74777C]"></span>
              <span>SOBRE RAMAIANE</span>
            </div>

            <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-[2.5rem] font-normal leading-tight text-[#0B0B0C] tracking-tight uppercase">
              O DIREITO PENAL ESTÁ ONDE O RISCO PENAL ESTÁ.
            </h2>
          </div>

          {/* Paragraphs */}
          <div className="space-y-4 text-[#18191B] text-base leading-relaxed font-light">
            <p>
              Ao longo de mais de uma década dedicada à advocacia criminal, desenvolvi uma atuação pautada em técnica, estratégia e análise individualizada de cada caso.
            </p>
            <p>
              A advocacia criminal contemporânea ultrapassa os limites da defesa tradicional. O risco penal pode surgir em decisões empresariais, atividades profissionais, operações financeiras, relações digitais e situações da vida privada.
            </p>
            <p>
              Por isso, a atuação começa antes mesmo do processo: na prevenção, orientação e construção da estratégia de defesa, sempre voltada à proteção da liberdade, do patrimônio e da reputação.
            </p>
          </div>

          {/* Quadro: Areas / Focus Cards */}
          <div className="pt-2 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#74777C]">
              Áreas de Foco e Prevenção de Riscos
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {quadroItems.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={item.title}
                    className={`bg-[#FFFFFF] border border-[#B8BBC0]/50 p-4 rounded-md space-y-2 shadow-sm hover:border-[#0B0B0C]/40 transition-colors ${
                      idx === 4 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <div className="flex items-center space-x-2.5 text-[#0B0B0C]">
                      <IconComponent className="w-4 h-4 text-[#74777C]" />
                      <span className="text-xs font-bold tracking-wider uppercase">{item.title}</span>
                    </div>
                    <p className="text-xs text-[#52555A] leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quote & Signature Block */}
          <div className="pt-6 border-t border-[#B8BBC0]/50 space-y-4">
            <blockquote className="font-serif-title italic text-lg sm:text-xl text-[#0B0B0C] leading-snug">
              “A defesa criminal não começa no processo. Começa na identificação do risco”.
            </blockquote>
            
            <div className="pt-2 flex flex-col items-start">
              <span className="font-signature text-5xl sm:text-6xl text-[#0B0B0C] leading-tight select-none tracking-normal font-normal">
                Ramaiane
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

