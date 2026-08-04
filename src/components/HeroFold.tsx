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
      
      {/* Upper Hero Section */}
      <div className="relative w-full border-b border-slate-800/80 pt-28 pb-14 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 flex items-center min-h-[640px] lg:min-h-[700px]">
        
        {/* Right Background Lawyer Photo (Positioned & Blended to match reference screenshot) */}
        <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[52%] pointer-events-none z-0 overflow-hidden">
          <img
            src="/src/assets/images/deise-ramaiane.jfif"
            alt="Deyse Ramaiane - Advocacia Criminal"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-top lg:object-[60%_20%] grayscale contrast-115 brightness-95 opacity-40 lg:opacity-100"
          />
          {/* Smooth left-to-right fade gradient matching reference screenshot */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050608] via-[#050608]/75 via-40% to-transparent"></div>
          {/* Subtle top & bottom vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050608]/60 via-transparent to-[#050608]/90"></div>
        </div>

        {/* Hero Content Grid */}
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full z-10 relative">
          <div className="max-w-xl lg:max-w-2xl space-y-5 sm:space-y-6 text-left flex flex-col justify-center">
            
            {/* Top Tagline with subtle side lines */}
            <div className="flex items-center space-x-3 text-xs tracking-[0.2em] font-light text-slate-300 uppercase">
              <span className="w-8 h-[1px] bg-slate-500"></span>
              <span>ADVOCACIA CRIMINAL ESTRATÉGICA</span>
              <span className="w-8 h-[1px] bg-slate-500"></span>
            </div>

            {/* Main Headline - Cormorant Garamond Serif */}
            <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.05] sm:leading-[1.08] text-slate-100 tracking-tight">
              Defesa criminal <br />
              com estratégia, <br />
              discrição e resultado.
            </h1>

            {/* Subtitle Paragraph */}
            <p className="text-slate-300 text-sm sm:text-base leading-snug max-w-lg font-light">
              Atuação técnica e personalizada em casos que envolvem liberdade, reputação e patrimônio.
            </p>

            {/* 3 Badge Features in a Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-3.5 pt-1 pb-1 text-slate-200">
              <div className="flex items-center space-x-3 sm:space-x-2.5">
                <Clock className="w-5 h-5 text-slate-200 shrink-0 stroke-[1.25]" />
                <div className="text-[10px] sm:text-[11px] font-medium tracking-wider uppercase leading-snug">
                  ATENDIMENTO <br />
                  <span className="text-slate-100 font-bold">24 HORAS</span>
                </div>
              </div>

              <div className="flex items-center space-x-3 sm:space-x-2.5">
                <ShieldCheck className="w-5 h-5 text-slate-200 shrink-0 stroke-[1.25]" />
                <div className="text-[10px] sm:text-[11px] font-medium tracking-wider uppercase leading-snug">
                  ATUAÇÃO EM <br />
                  <span className="text-slate-100 font-bold">TODO O BRASIL</span>
                </div>
              </div>

              <div className="flex items-center space-x-3 sm:space-x-2.5">
                <Lock className="w-5 h-5 text-slate-200 shrink-0 stroke-[1.25]" />
                <div className="text-[10px] sm:text-[11px] font-medium tracking-wider uppercase leading-snug">
                  ATENDIMENTO <br />
                  <span className="text-slate-100 font-bold">PRESENCIAL E ONLINE</span>
                </div>
              </div>
            </div>

            {/* Call to Action Button */}
            <div className="pt-1">
              <button
                onClick={onOpenEmergencyModal}
                className="silver-button px-7 py-3.5 rounded-lg text-xs font-bold uppercase tracking-widest flex items-center justify-center space-x-3 shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-95 border border-white/20 cursor-pointer"
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

      {/* ÁREAS DE ATUAÇÃO Section - 6 Columns in a Single Row on Desktop */}
      <div id="areas-de-atuacao" className="py-16 sm:py-24 lg:py-28 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Section Title matching image: — ÁREAS DE ATUAÇÃO — */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center space-x-4 text-xs tracking-[0.3em] font-light text-slate-300 uppercase">
            <span className="w-12 sm:w-16 h-[1px] bg-slate-600"></span>
            <span className="font-serif-title text-2xl sm:text-3xl text-slate-100 tracking-[0.2em] font-medium">
              ÁREAS DE ATUAÇÃO
            </span>
            <span className="w-12 sm:w-16 h-[1px] bg-slate-600"></span>
          </div>
        </div>

        {/* 6 Grid Columns Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {practiceAreas.map((area, idx) => {
            const Icon = area.icon;
            return (
              <div
                key={idx}
                className="bg-[#07090e]/90 border border-slate-800/90 rounded-lg p-5 sm:p-6 flex flex-col items-center justify-between text-center hover:border-slate-500 transition-all duration-300 hover:bg-[#0c0f17] shadow-xl hover:shadow-2xl group min-h-[300px]"
              >
                {/* Top Section with Icon, Title, Description */}
                <div className="flex flex-col items-center space-y-3.5 w-full">
                  {/* Thin stroke Icon */}
                  <div className="w-12 h-12 flex items-center justify-center text-slate-200 group-hover:text-white transition-colors">
                    <Icon className="w-8 h-8 stroke-[1.25]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-[11px] sm:text-[12px] tracking-wider text-slate-100 uppercase leading-snug">
                    {area.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[10px] sm:text-[11px] text-slate-400 leading-relaxed font-light">
                    {area.description}
                  </p>
                </div>

                {/* Bottom Saiba Mais Link */}
                <div className="pt-4 mt-3 border-t border-slate-800/50 w-full flex justify-center">
                  <button
                    onClick={onOpenEmergencyModal}
                    className="text-[10px] font-semibold text-slate-300 group-hover:text-white flex items-center justify-center space-x-1.5 tracking-widest uppercase transition-colors"
                  >
                    <span>SAIBA MAIS</span>
                    <span className="text-xs group-hover:translate-x-1 transition-transform">→</span>
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

