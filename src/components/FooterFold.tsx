import React from 'react';
import {
  Phone,
  MessageCircle,
  MapPin,
  Mail,
  ArrowUp,
} from 'lucide-react';

interface FooterFoldProps {
  onOpenEmergencyModal: () => void;
}

export const FooterFold: React.FC<FooterFoldProps> = ({ onOpenEmergencyModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contato" className="bg-[#030406] text-slate-300 border-t border-slate-800/80 font-['Poppins',sans-serif]">
      {/* Upper CTA Banner */}
      <div className="bg-gradient-to-r from-[#07090e] via-[#0f1422] to-[#07090e] border-b border-slate-800/80 py-8 px-6 sm:px-10 lg:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
          <div className="space-y-1">
            <div className="flex items-center justify-center md:justify-start space-x-2 text-emerald-400 text-[11px] font-semibold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>ATENDIMENTO ESPECIALIZADO</span>
            </div>
            <h3 className="font-serif-title text-xl sm:text-2xl text-slate-100 font-medium">
              Precisa de auxílio jurídico imediato?
            </h3>
          </div>

          <button
            onClick={onOpenEmergencyModal}
            className="silver-button px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-widest flex items-center space-x-2 shrink-0 shadow-xl hover:scale-105 transition-transform cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>FALAR NO WHATSAPP</span>
          </button>
        </div>
      </div>

      {/* Main Footer Content - Clean 3 Columns */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
        
        {/* Column 1: Brand & Lawyer Info */}
        <div className="space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
          <a href="#" className="flex items-center justify-center md:justify-start group">
            <img
              src="/src/assets/images/logoadvogada.png"
              alt="Deyse Ramaiane Advocacia Criminal Logo"
              className="h-12 sm:h-16 w-auto max-w-[240px] object-contain brightness-110 drop-shadow-md group-hover:scale-[1.02] transition-transform"
            />
          </a>
          <p className="text-xs text-slate-400 leading-relaxed font-light max-w-sm">
            Defesa criminal especializada e estratégica com foco em agilidade, sigilo absoluto e proteção dos direitos do cliente.
          </p>
          <div className="text-xs text-slate-400">
            <p className="font-semibold text-slate-200">Dra. Deyse Ramaiane</p>
            <p className="text-[11px] text-slate-500">Advocacia Criminal</p>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-3 flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="font-serif-title text-base font-medium text-slate-100 tracking-wider uppercase border-b border-slate-800/80 pb-2 w-full md:w-auto">
            Navegação
          </h4>
          <ul className="space-y-2 text-xs text-slate-400 flex flex-col items-center md:items-start">
            <li>
              <a href="#" className="hover:text-white transition-colors">Início</a>
            </li>
            <li>
              <a href="#sobre" className="hover:text-white transition-colors">Sobre a Advogada</a>
            </li>
            <li>
              <a href="#areas-de-atuacao" className="hover:text-white transition-colors">Áreas de Atuação</a>
            </li>
            <li>
              <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
            </li>
            <li>
              <a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="space-y-3 flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="font-serif-title text-base font-medium text-slate-100 tracking-wider uppercase border-b border-slate-800/80 pb-2 w-full md:w-auto">
            Contato
          </h4>
          <div className="space-y-3 text-xs text-slate-300 flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2.5">
              <Phone className="w-4 h-4 text-slate-400 shrink-0" />
              <a href="tel:5592993480017" className="font-medium text-slate-200 hover:text-white transition-colors">
                (92) 99348-0017
              </a>
            </div>

            <div className="flex items-center space-x-2.5">
              <Mail className="w-4 h-4 text-slate-400 shrink-0" />
              <a href="mailto:deyeramaianeadv@gmail.com" className="font-medium text-slate-200 hover:text-white transition-colors">
                deyeramaianeadv@gmail.com
              </a>
            </div>

            <div className="flex items-center space-x-2.5">
              <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
              <span className="text-slate-400">Atuação em todo o Brasil (Presencial e Online)</span>
            </div>
          </div>
        </div>

      </div>

      {/* OAB Code of Ethics Disclaimer & Copyright */}
      <div className="bg-[#020203] border-t border-slate-800/60 py-6 px-6 sm:px-10 lg:px-12 text-[10px] text-slate-500 text-center leading-relaxed font-light">
        <div className="max-w-6xl mx-auto space-y-3">
          <p className="max-w-4xl mx-auto">
            Este site possui caráter meramente informativo e educacional, respeitando estritamente os provimentos e o Código de Ética e Disciplina da OAB (Provimento 205/2021).
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between pt-3 border-t border-slate-800/40 text-[11px] text-slate-500 gap-2">
            <span>
              © {new Date().getFullYear()} Deyse Ramaiane Advocacia Criminal. Todos os direitos reservados.
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
