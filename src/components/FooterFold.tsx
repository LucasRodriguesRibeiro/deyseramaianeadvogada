import React from 'react';
import {
  Phone,
  MessageCircle,
  MapPin,
  Mail,
  ArrowUp,
} from 'lucide-react';
import logoImg from '../assets/images/logoadvogada.png';

interface FooterFoldProps {
  onOpenEmergencyModal: () => void;
}

export const FooterFold: React.FC<FooterFoldProps> = ({ onOpenEmergencyModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contato" className="bg-[#0B0B0C] text-[#B8BBC0] border-t border-[#18191B] font-sans-clean">
      {/* Upper Call Banner */}
      <div className="bg-[#18191B] border-b border-[#74777C]/20 py-8 px-6 sm:px-10 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
          <div className="space-y-1">
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B8BBC0]">
              ATENDIMENTO EM ÂMBITO NACIONAL
            </div>
            <h3 className="font-serif-title text-xl sm:text-2xl text-[#F7F7F5]">
              Precisa de orientação jurídica especializada?
            </h3>
          </div>

          <button
            onClick={onOpenEmergencyModal}
            className="silver-button px-6 py-3 rounded-md text-xs font-bold uppercase tracking-widest flex items-center space-x-2 shrink-0 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>SOLICITAR ATENDIMENTO</span>
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
        
        {/* Column 1: Brand & Lawyer Info */}
        <div className="space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
          <a href="#" className="flex items-center justify-center md:justify-start group">
            <img
              src={logoImg}
              alt="Deyse Ramaiane Advocacia Criminal Logo"
              className="h-12 sm:h-16 w-auto max-w-[240px] object-contain brightness-110 drop-shadow-md group-hover:scale-[1.02] transition-transform"
            />
          </a>
          <p className="text-xs text-[#B8BBC0] leading-relaxed font-light max-w-sm">
            Atuação em Direito Penal, Processo Penal e Execução Penal com foco em análise técnica, estratégia e acompanhamento individualizado.
          </p>
          <div className="text-xs text-[#B8BBC0]">
            <p className="font-semibold text-[#F7F7F5] uppercase tracking-wider">DEYSE RAMAIANE</p>
            <p className="text-[11px] text-[#74777C] uppercase tracking-widest">Advocacia Criminal Estratégica</p>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-3 flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="font-serif-title text-sm font-medium text-[#F7F7F5] tracking-wider uppercase border-b border-[#74777C]/20 pb-2 w-full md:w-auto">
            Navegação
          </h4>
          <ul className="space-y-2 text-xs text-[#B8BBC0] flex flex-col items-center md:items-start">
            <li>
              <a href="#" className="hover:text-[#F7F7F5] transition-colors">Início</a>
            </li>
            <li>
              <a href="#apresentacao" className="hover:text-[#F7F7F5] transition-colors">Apresentação Profissional</a>
            </li>
            <li>
              <a href="#areas-de-atuacao" className="hover:text-[#F7F7F5] transition-colors">Áreas de Atuação</a>
            </li>
            <li>
              <a href="#urgencias" className="hover:text-[#F7F7F5] transition-colors">Situações de Urgência</a>
            </li>
            <li>
              <a href="#trafico-de-drogas" className="hover:text-[#F7F7F5] transition-colors">Tráfico de Drogas</a>
            </li>
            <li>
              <a href="#especialidades" className="hover:text-[#F7F7F5] transition-colors">Atuações Especializadas</a>
            </li>
            <li>
              <a href="#como-funciona" className="hover:text-[#F7F7F5] transition-colors">Como Funciona</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="space-y-3 flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="font-serif-title text-sm font-medium text-[#F7F7F5] tracking-wider uppercase border-b border-[#74777C]/20 pb-2 w-full md:w-auto">
            Contato & Atendimento
          </h4>
          <div className="space-y-3 text-xs text-[#B8BBC0] flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2.5">
              <Phone className="w-4 h-4 text-[#74777C] shrink-0" />
              <a href="tel:5592993480017" className="font-medium text-[#F7F7F5] hover:text-[#B8BBC0] transition-colors">
                (92) 99348-0017
              </a>
            </div>

            <div className="flex items-center space-x-2.5">
              <Mail className="w-4 h-4 text-[#74777C] shrink-0" />
              <a href="mailto:deyeramaianeadv@gmail.com" className="font-medium text-[#F7F7F5] hover:text-[#B8BBC0] transition-colors">
                deyeramaianeadv@gmail.com
              </a>
            </div>

            <div className="flex items-center space-x-2.5">
              <MapPin className="w-4 h-4 text-[#74777C] shrink-0" />
              <span className="text-[#B8BBC0]">Atendimento em Âmbito Nacional (Presencial e Digital)</span>
            </div>
          </div>
        </div>

      </div>

      {/* OAB Code of Ethics Disclaimer & Copyright */}
      <div className="bg-[#050506] border-t border-[#18191B] py-6 px-6 sm:px-10 lg:px-12 text-[10px] text-[#74777C] text-center leading-relaxed font-light">
        <div className="max-w-7xl mx-auto space-y-3">
          <p className="max-w-4xl mx-auto">
            Este site possui caráter meramente institucional e informativo, em conformidade com o Código de Ética e Disciplina da OAB (Provimento 205/2021).
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between pt-3 border-t border-[#18191B] text-[11px] text-[#74777C] gap-2">
            <span>
              © {new Date().getFullYear()} Deyse Ramaiane Advocacia Criminal Estratégica. Todos os direitos reservados.
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1 text-[#B8BBC0] hover:text-[#F7F7F5] transition-colors cursor-pointer uppercase text-[10px] tracking-wider"
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
