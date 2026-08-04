import React from 'react';
import {
  Clock,
  ShieldCheck,
  Lock,
  MessageCircle,
  Scale,
  Landmark,
  ShieldAlert,
  Monitor,
  ClipboardCheck,
  Search,
} from 'lucide-react';

interface HeroFoldProps {
  onOpenEmergencyModal: () => void;
}

export const HeroFold: React.FC<HeroFoldProps> = ({ onOpenEmergencyModal }) => {
  const practiceAreas = [
    {
      icon: Scale,
      title: 'TRÁFICO DE DROGAS',
      description:
        'Defesa especializada em crimes relacionados à Lei de Drogas, do flagrante até os tribunais.',
    },
    {
      icon: Landmark,
      title: 'CRIMINAL EMPRESARIAL',
      description:
        'Defesa de pessoas jurídicas e empresários em investigações e processos criminais empresariais.',
    },
    {
      icon: ShieldAlert,
      title: 'DEFESA DE MÉDICOS E CLÍNICAS',
      description:
        'Proteção jurídica para médicos, profissionais da saúde e estabelecimentos de saúde.',
    },
    {
      icon: Monitor,
      title: 'CRIMES DIGITAIS',
      description:
        'Atuação em delitos cibernéticos, invasões de dispositivos, estelionatos e fraudes digitais.',
    },
    {
      icon: ClipboardCheck,
      title: 'COMPLIANCE CRIMINAL',
      description:
        'Implementação de programas de integridade e prevenção de riscos penais.',
    },
    {
      icon: Search,
      title: 'INVESTIGAÇÕES E DEFESA PENAL',
      description:
        'Acompanhamento estratégico em inquéritos policiais e processos criminais.',
    },
  ];

  return (
    <section className="relative w-full bg-[#050608] text-slate-100 font-['Poppins',sans-serif] overflow-hidden">
      
      {/* Upper Hero Section - Espaçamento superior e inferior amplo e equilibrado */}
      <div className="relative w-full border-b border-slate-800/80 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-24 lg:pb-20 flex items-center min-h-[600px] lg:min-h-[660px]">
        
        {/* Right Background Lawyer Photo (Ajustado o enquadramento do rosto para ficar visível) */}
        <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[52%] pointer-events-none z-0 overflow-hidden">
          <img
            src="/src/assets/images/deise-ramaiane.jfif"
            alt="Deyse Ramaiane - Advocacia Criminal"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center lg:object-[60%_45%] grayscale contrast-110 brightness-95 opacity-50 lg:opacity-90"
          />
          {/* Smooth left-to-right fade gradient matching reference screenshot */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050608] via-[#050608]/75 via-40% to-transparent"></div>
          {/* Subtle top & bottom vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050608]/60 via-transparent to-[#050608]/90"></div>
        </div>

        {/* Hero Content Grid */}
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 w-full z-10 relative">
          <div className="max-w-xl lg:max-w-2xl space-y-3 sm:space-y-3.5 text-center lg:text-left flex flex-col items-center lg:items-start justify-center mx-auto lg:mx-0">
            
            {/* Top Tagline with subtle side lines */}
            <div className="flex items-center justify-center lg:justify-start space-x-3 text-xs tracking-[0.2em] font-light text-slate-300 uppercase w-full">
              <span className="w-5 sm:w-8 h-[1px] bg-slate-500"></span>
              <span className="text-[10px] sm:text-xs font-medium tracking-[0.18em] text-slate-200">ADVOGADA CRIMINALISTA DEYSE RAMAIANE</span>
              <span className="w-5 sm:w-8 h-[1px] bg-slate-500"></span>
            </div>

            {/* Main Headline - Cormorant Garamond Serif Ampliado em Destaque */}
            <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-[4rem] xl:text-[4.25rem] font-bold leading-[1.08] text-slate-100 tracking-tight">
              Defesa criminal <br className="hidden sm:inline" />
              com estratégia, <br className="hidden sm:inline" />
              discrição e resultado.
            </h1>

            {/* Subtitle Paragraph */}
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-lg font-light">
              Atuação técnica e personalizada em casos que envolvem liberdade, reputação e patrimônio.
            </p>

            {/* 3 Destaques Minimalistas - Sem caixas retangulares */}
            <div className="flex items-center justify-between py-3 border-y border-slate-800/60 w-full my-2">
              {/* Item 1 */}
              <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left space-y-1.5 sm:space-y-0 sm:space-x-2.5 flex-1 px-1">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-300 shrink-0">
                  <Scale className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.5]" />
                </div>
                <div className="leading-tight">
                  <span className="text-[9px] sm:text-[10px] text-slate-400 uppercase font-medium block">Atuação</span>
                  <span className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider block">Defesa Especializada</span>
                </div>
              </div>

              {/* Divisória Vertical Fina */}
              <div className="w-[1px] h-8 bg-slate-800/80 shrink-0"></div>

              {/* Item 2 */}
              <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left space-y-1.5 sm:space-y-0 sm:space-x-2.5 flex-1 px-1">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-300 shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.5]" />
                </div>
                <div className="leading-tight">
                  <span className="text-[9px] sm:text-[10px] text-slate-400 uppercase font-medium block">Alcance</span>
                  <span className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider block">Todo o Brasil</span>
                </div>
              </div>

              {/* Divisória Vertical Fina */}
              <div className="w-[1px] h-8 bg-slate-800/80 shrink-0"></div>

              {/* Item 3 */}
              <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left space-y-1.5 sm:space-y-0 sm:space-x-2.5 flex-1 px-1">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-300 shrink-0">
                  <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.5]" />
                </div>
                <div className="leading-tight">
                  <span className="text-[9px] sm:text-[10px] text-slate-400 uppercase font-medium block">Formato</span>
                  <span className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider block">Presencial / Online</span>
                </div>
              </div>
            </div>

            {/* Call to Action Button */}
            <div className="pt-2 flex justify-center lg:justify-start w-full sm:w-auto">
              <button
                onClick={onOpenEmergencyModal}
                className="silver-button w-full sm:w-auto px-8 py-3.5 rounded-lg text-xs font-bold uppercase tracking-widest flex items-center justify-center space-x-3 shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-95 border border-white/20 cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full bg-slate-900/20 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 fill-current text-slate-900" />
                </div>
                <span>ATENDIMENTO IMEDIATO</span>
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* ÁREAS DE ATUAÇÃO Section - Alinhado no container max-w-6xl */}
      <div id="areas-de-atuacao" className="py-10 sm:py-16 lg:py-20 max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Section Title */}
        <div className="text-center mb-6 sm:mb-10">
          <div className="flex items-center justify-center space-x-3 sm:space-x-4 text-xs tracking-[0.2em] sm:tracking-[0.3em] font-light text-slate-300 uppercase">
            <span className="w-6 sm:w-12 h-[1px] bg-slate-600"></span>
            <h2 className="font-serif-title text-lg sm:text-2xl text-slate-100 tracking-[0.15em] sm:tracking-[0.2em] font-medium">
              ÁREAS DE ATUAÇÃO
            </h2>
            <span className="w-6 sm:w-12 h-[1px] bg-slate-600"></span>
          </div>
        </div>

        {/* 2 Colunas no Mobile e 3 Colunas no Desktop alinhados às margens da página */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {practiceAreas.map((area, idx) => {
            const Icon = area.icon;
            return (
              <div
                key={idx}
                className="bg-[#07090e]/90 border border-slate-800/90 rounded-xl p-3 sm:p-5 flex flex-col items-center justify-between text-center hover:border-amber-500/40 transition-all duration-300 hover:bg-[#0c0f17] shadow-lg hover:shadow-xl group min-h-[190px] sm:min-h-[210px]"
              >
                {/* Top Section with Icon, Title, Description */}
                <div className="flex flex-col items-center space-y-2.5 sm:space-y-3 w-full">
                  {/* Thin stroke Icon */}
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-slate-800/50 border border-slate-700/60 flex items-center justify-center text-slate-200 group-hover:text-amber-300 group-hover:border-amber-500/40 transition-all duration-300">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.25]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-[10px] sm:text-xs tracking-wider text-slate-100 uppercase leading-tight sm:leading-snug">
                    {area.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[9.5px] sm:text-[11px] text-slate-400 leading-snug sm:leading-relaxed font-light">
                    {area.description}
                  </p>
                </div>

                {/* Bottom Saiba Mais Button Box */}
                <div className="pt-2.5 mt-2.5 border-t border-slate-800/60 w-full flex justify-center">
                  <button
                    onClick={onOpenEmergencyModal}
                    className="w-full py-1.5 px-2.5 rounded-lg bg-[#0e121c] group-hover:bg-amber-400 group-hover:text-slate-950 border border-slate-700/60 group-hover:border-amber-400 text-slate-200 text-[9px] sm:text-[10px] font-bold tracking-wider uppercase flex items-center justify-center space-x-1.5 transition-all duration-300 shadow-sm cursor-pointer"
                  >
                    <span>SAIBA MAIS</span>
                    <span className="text-[10px] sm:text-xs group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Floating WhatsApp Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={onOpenEmergencyModal}
          className="p-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer border border-white/20"
          aria-label="Atendimento urgente via WhatsApp"
        >
          <MessageCircle className="w-7 h-7 fill-current" />
        </button>
      </div>
    </section>
  );
};

