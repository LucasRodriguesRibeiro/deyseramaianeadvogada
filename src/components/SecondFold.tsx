import React from 'react';
import deiseImg from '../assets/images/deise-ramaiane.jpg';
import advDeiseImg from '../assets/images/advdeise-ramaiane.jpg';
import { Award, Globe, UserCheck } from 'lucide-react';

export const SecondFold: React.FC = () => {
  return (
    <section id="sobre" className="relative w-full bg-[#F7F7F5] text-[#0B0B0C] py-20 sm:py-28 font-sans-clean overflow-hidden">
      <div id="apresentacao" className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Professional Portrait of Dra. Deyse in FULL COLOR */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-md aspect-[4/5] rounded-lg overflow-hidden border border-[#B8BBC0]/60 shadow-2xl">
            <img
              src="/images/deise-ramaiane.jpg"
              alt="Dra. Deyse Ramaiane - Advocacia Criminal"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = deiseImg;
              }}
              className="w-full h-full object-cover object-top contrast-105 brightness-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C]/30 via-transparent to-transparent"></div>
          </div>
        </div>

        {/* Right Column: Text Content */}
        <div className="lg:col-span-7 space-y-7 text-left">
          
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-3 text-xs tracking-[0.25em] text-[#74777C] uppercase font-semibold">
              <span className="w-8 h-[1px] bg-[#74777C]"></span>
              <span>APRESENTAÇÃO PROFISSIONAL</span>
            </div>

            <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-[2.75rem] font-normal leading-tight text-[#0B0B0C] tracking-tight">
              MAIS DE UMA DÉCADA DEDICADA À ADVOCACIA.
            </h2>
          </div>

          <div className="space-y-4 text-[#18191B] text-base leading-relaxed font-light">
            <p>
              Deyse Ramaiane atua na advocacia criminal com formação especializada em Direito Penal, Processo Penal e Execução Penal, desenvolvendo uma atuação pautada em análise técnica, estratégia e acompanhamento individualizado de cada caso.
            </p>
            <p>
              Sua atuação abrange desde situações urgentes e investigações criminais até processos de maior complexidade, com atendimento em âmbito nacional.
            </p>
          </div>

          {/* Key Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#B8BBC0]/40">
            <div className="bg-[#18191B] text-[#F7F7F5] p-4.5 rounded-md space-y-1.5 shadow-sm">
              <Award className="w-5 h-5 text-[#B8BBC0]" />
              <div className="text-xs font-semibold tracking-wider uppercase leading-snug">
                Mais de uma década
              </div>
              <p className="text-[11px] text-[#B8BBC0] font-light">
                Dedicada à advocacia criminal
              </p>
            </div>

            <div className="bg-[#18191B] text-[#F7F7F5] p-4.5 rounded-md space-y-1.5 shadow-sm">
              <Globe className="w-5 h-5 text-[#B8BBC0]" />
              <div className="text-xs font-semibold tracking-wider uppercase leading-snug">
                Atuação Nacional
              </div>
              <p className="text-[11px] text-[#B8BBC0] font-light">
                Assistência jurídica estratégica
              </p>
            </div>

            <div className="bg-[#18191B] text-[#F7F7F5] p-4.5 rounded-md space-y-1.5 shadow-sm">
              <UserCheck className="w-5 h-5 text-[#B8BBC0]" />
              <div className="text-xs font-semibold tracking-wider uppercase leading-snug">
                Atendimento Personalizado
              </div>
              <p className="text-[11px] text-[#B8BBC0] font-light">
                Acompanhamento direto
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
