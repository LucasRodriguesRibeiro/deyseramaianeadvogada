import React from 'react';
import { ArrowRight, Stethoscope, Briefcase, Smartphone, Sparkles } from 'lucide-react';
import officeBg from '../assets/images/lawyer_office_bg_1785798115042.jpg';
import videoPortraitBg from '../assets/images/video_lawyer_portrait_1785761105957.jpg';
import heroBg from '../assets/images/hero_lawyer_bg_1785760985867.jpg';
import prisonBg from '../assets/images/prison_handcuffs_bg_1785764557592.jpg';

interface FifthFoldProps {
  onOpenEmergencyModal: () => void;
}

export const FifthFold: React.FC<FifthFoldProps> = ({ onOpenEmergencyModal }) => {
  return (
    <section id="especialidades" className="relative w-full bg-[#0B0B0C] text-[#F7F7F5] py-20 sm:py-28 font-sans-clean border-t border-[#18191B]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3 text-left max-w-3xl">
          <div className="inline-flex items-center space-x-3 text-xs tracking-[0.25em] text-[#B8BBC0] uppercase font-semibold">
            <span className="w-8 h-[1px] bg-[#74777C]"></span>
            <span>ATUAÇÕES ESPECIALIZADAS</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-[2.75rem] font-normal text-[#F7F7F5] tracking-tight">
            DEFESA DE NICHO E PROTEÇÃO DE REPUTAÇÃO
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* 1. Médicos e Profissionais da Saúde */}
          <div className="bg-[#18191B] border border-[#74777C]/20 rounded-md overflow-hidden flex flex-col justify-between hover:border-[#B8BBC0]/50 transition-all duration-300 group shadow-lg">
            <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-[#0B0B0C]">
              <img
                src="/images/hero_lawyer_bg_1785760985867.jpg"
                alt="Médicos e Profissionais da Saúde"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = heroBg;
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 contrast-105 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18191B] via-[#18191B]/40 to-transparent"></div>
            </div>
            <div className="p-8 space-y-5 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-[#B8BBC0]">
                  <Stethoscope className="w-5 h-5 text-[#B8BBC0]" />
                  <span className="text-xs font-semibold tracking-widest uppercase">MÉDICOS, CLÍNICAS E SAÚDE</span>
                </div>
                <h3 className="font-serif-title text-2xl text-[#F7F7F5] leading-snug">
                  DEFESA CRIMINAL PARA QUEM TAMBÉM PRECISA PROTEGER SUA TRAJETÓRIA PROFISSIONAL.
                </h3>
                <p className="text-xs text-[#B8BBC0] leading-relaxed font-light">
                  Atuação estratégica em situações de natureza criminal envolvendo médicos, profissionais da saúde, clínicas e instituições, considerando não apenas os aspectos jurídicos do caso, mas também seus possíveis impactos profissionais e reputacionais.
                </p>
              </div>
              <div className="pt-2">
                <button
                  onClick={onOpenEmergencyModal}
                  className="silver-outline-button px-6 py-3 rounded-md text-xs uppercase tracking-wider flex items-center space-x-2 cursor-pointer"
                >
                  <span>SOLICITAR CONSULTA TÉCNICA</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* 2. Empresários e Empresas */}
          <div className="bg-[#18191B] border border-[#74777C]/20 rounded-md overflow-hidden flex flex-col justify-between hover:border-[#B8BBC0]/50 transition-all duration-300 group shadow-lg">
            <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-[#0B0B0C]">
              <img
                src="/images/lawyer_office_bg_1785798115042.jpg"
                alt="Empresários e Empresas"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = officeBg;
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 contrast-105 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18191B] via-[#18191B]/40 to-transparent"></div>
            </div>
            <div className="p-8 space-y-5 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-[#B8BBC0]">
                  <Briefcase className="w-5 h-5 text-[#B8BBC0]" />
                  <span className="text-xs font-semibold tracking-widest uppercase">EMPRESÁRIOS E EMPRESAS</span>
                </div>
                <h3 className="font-serif-title text-2xl text-[#F7F7F5] leading-snug">
                  DIREITO PENAL EMPRESARIAL E COMPLIANCE
                </h3>
                <p className="text-xs text-[#B8BBC0] leading-relaxed font-light">
                  Atuação na defesa de empresários, executivos e organizações diante de investigações, acusações criminais e situações capazes de gerar impactos jurídicos, patrimoniais e reputacionais.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2 pt-2">
                {["INVESTIGAÇÕES", "DEFESA CRIMINAL", "RISCOS PENAIS", "GESTÃO DE CRISES"].map((badge) => (
                  <span key={badge} className="bg-[#0B0B0C] border border-[#74777C]/30 text-[#B8BBC0] text-[10px] font-semibold tracking-widest px-3 py-1.5 rounded-sm uppercase">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 3. Crimes Digitais & Fraudes Bancárias */}
          <div className="bg-[#18191B] border border-[#74777C]/20 rounded-md overflow-hidden flex flex-col justify-between hover:border-[#B8BBC0]/50 transition-all duration-300 group shadow-lg">
            <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-[#0B0B0C]">
              <img
                src="/images/prison_handcuffs_bg_1785764557592.jpg"
                alt="Crimes Digitais e Fraudes"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = prisonBg;
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 contrast-105 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18191B] via-[#18191B]/40 to-transparent"></div>
            </div>
            <div className="p-8 space-y-5 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-[#B8BBC0]">
                  <Smartphone className="w-5 h-5 text-[#B8BBC0]" />
                  <span className="text-xs font-semibold tracking-widest uppercase">CRIMES DIGITAIS E FRAUDES</span>
                </div>
                <h3 className="font-serif-title text-2xl text-[#F7F7F5] leading-snug">
                  CRIMES DIGITAIS & FRAUDES BANCÁRIAS
                </h3>
                <p className="text-xs text-[#B8BBC0] leading-relaxed font-light">
                  Atuação jurídica em situações envolvendo crimes digitais, fraudes financeiras e prejuízos decorrentes de operações não reconhecidas ou condutas ilícitas praticadas no ambiente digital.
                </p>
              </div>
              <div className="pt-2">
                <button
                  onClick={onOpenEmergencyModal}
                  className="silver-button px-6 py-3 rounded-md text-xs font-bold uppercase tracking-wider flex items-center space-x-2 cursor-pointer"
                >
                  <span>SOLICITAR ANÁLISE →</span>
                </button>
              </div>
            </div>
          </div>

          {/* 4. Influenciadores e Criadores de Conteúdo */}
          <div className="bg-[#18191B] border border-[#74777C]/20 rounded-md overflow-hidden flex flex-col justify-between hover:border-[#B8BBC0]/50 transition-all duration-300 group shadow-lg">
            <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-[#0B0B0C]">
              <img
                src="/images/video_lawyer_portrait_1785761105957.jpg"
                alt="Influenciadores e Criadores de Conteúdo"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = videoPortraitBg;
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 contrast-105 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18191B] via-[#18191B]/40 to-transparent"></div>
            </div>
            <div className="p-8 space-y-5 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-[#B8BBC0]">
                  <Sparkles className="w-5 h-5 text-[#B8BBC0]" />
                  <span className="text-xs font-semibold tracking-widest uppercase">INFLUENCIADORES E CRIADORES</span>
                </div>
                <h3 className="font-serif-title text-2xl text-[#F7F7F5] leading-snug">
                  DEFESA CRIMINAL DE INFLUENCIADORES
                </h3>
                <p className="text-xs text-[#B8BBC0] leading-relaxed font-light">
                  Atuação jurídica especializada na defesa de influenciadores digitais, criadores de conteúdo e personalidades públicas em investigações, operações policiais e processos criminais no ambiente digital.
                </p>
              </div>
              <div className="pt-2">
                <button
                  onClick={onOpenEmergencyModal}
                  className="silver-outline-button px-6 py-3 rounded-md text-xs uppercase tracking-wider flex items-center space-x-2 cursor-pointer"
                >
                  <span>FALAR COM A ADVOGADA</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
