import React from 'react';
import {
  Phone,
  MessageCircle,
  Clock,
  ShieldCheck,
  Scale,
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
      {/* Upper Footer CTA Strip */}
      <div className="bg-gradient-to-r from-[#07090e] via-[#0f1422] to-[#07090e] border-b border-slate-800/80 py-10 px-6 sm:px-10 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1.5">
            <div className="flex items-center justify-center md:justify-start space-x-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>PLANTÃO CRIMINAL ATIVO 24 HORAS</span>
            </div>
            <h3 className="font-serif-title text-2xl sm:text-3xl text-slate-100 font-normal">
              Precisa de ajuda jurídica urgente agora?
            </h3>
            <p className="text-xs text-slate-400 font-light">
              Atendimento imediato em prisões em flagrante, delegacias e audiências de custódia.
            </p>
          </div>

          <button
            onClick={onOpenEmergencyModal}
            className="silver-button px-7 py-3.5 rounded-lg text-xs font-bold uppercase tracking-widest flex items-center space-x-2.5 shrink-0 shadow-2xl hover:scale-105 transition-transform"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>FALAR NO WHATSAPP</span>
          </button>
        </div>
      </div>

      {/* Main Footer Links & Info Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Column 1: Brand & Lawyer Info */}
        <div className="space-y-4">
          <a href="#" className="flex items-center group">
            <img
              src="/src/assets/images/logoadvogada.png"
              alt="Deyse Ramaiane Advocacia Criminal Logo"
              className="h-14 sm:h-18 lg:h-20 w-auto max-w-[280px] object-contain brightness-110 drop-shadow-md group-hover:scale-[1.02] transition-transform"
            />
          </a>

          <p className="text-xs text-slate-400 leading-relaxed font-light">
            Defesa criminal especializada e estratégica. Atuação personalizada com foco em agilidade, sigilo absoluto e proteção dos direitos fundamentais do cliente.
          </p>

          <div className="pt-2 text-xs text-slate-400 space-y-1">
            <p className="font-semibold text-slate-300">Dra. Deyse Ramaiane</p>
            <p className="text-[11px] text-slate-500">OAB/SP 412.980</p>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-3">
          <h4 className="font-serif-title text-lg font-medium text-slate-100 tracking-wider uppercase border-b border-slate-800 pb-2">
            Navegação
          </h4>
          <ul className="space-y-2 text-xs text-slate-400">
            <li>
              <a href="#" className="hover:text-white transition-colors flex items-center space-x-1.5">
                <span>›</span> <span>Início</span>
              </a>
            </li>
            <li>
              <a href="#sobre" className="hover:text-white transition-colors flex items-center space-x-1.5">
                <span>›</span> <span>Sobre a Advogada</span>
              </a>
            </li>
            <li>
              <a href="#areas-de-atuacao" className="hover:text-white transition-colors flex items-center space-x-1.5">
                <span>›</span> <span>Áreas de Atuação</span>
              </a>
            </li>
            <li>
              <a href="#trafico-de-drogas" className="hover:text-white transition-colors flex items-center space-x-1.5">
                <span>›</span> <span>Tráfico de Drogas</span>
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-white transition-colors flex items-center space-x-1.5">
                <span>›</span> <span>Depoimentos & Blog</span>
              </a>
            </li>
            <li>
              <a href="#contato" className="hover:text-white transition-colors flex items-center space-x-1.5">
                <span>›</span> <span>Contato e Plantão 24h</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Practice Areas */}
        <div className="space-y-3">
          <h4 className="font-serif-title text-lg font-medium text-slate-100 tracking-wider uppercase border-b border-slate-800 pb-2">
            Especialidades
          </h4>
          <ul className="space-y-2 text-xs text-slate-400">
            <li>• Prisões em Flagrante & Custódia</li>
            <li>• Pedidos de Liberdade e Habeas Corpus</li>
            <li>• Defesa em Casos de Tráfico de Drogas</li>
            <li>• Tribunal do Júri e Execução Penal</li>
            <li>• Crimes Empresariais e Digitais</li>
            <li>• Investigação Defensiva em Delegacias</li>
          </ul>
        </div>

        {/* Column 4: Contact & Emergency */}
        <div className="space-y-3">
          <h4 className="font-serif-title text-lg font-medium text-slate-100 tracking-wider uppercase border-b border-slate-800 pb-2">
            Atendimento 24h
          </h4>
          <div className="space-y-3 text-xs text-slate-300">
            <div className="flex items-start space-x-2.5">
              <Phone className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <div>
                <span className="block text-[10px] text-slate-500 uppercase font-medium">Plantão telefônico / WhatsApp:</span>
                <a href="tel:5592993480017" className="font-semibold text-slate-200 hover:text-white transition-colors">
                  (92) 99348-0017
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-2.5">
              <Mail className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <div>
                <span className="block text-[10px] text-slate-500 uppercase font-medium">E-mail:</span>
                <a href="mailto:deyeramaianeadv@gmail.com" className="font-semibold text-slate-200 hover:text-white transition-colors break-all">
                  deyeramaianeadv@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-2.5">
              <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="block text-[10px] text-slate-500 uppercase font-medium">WhatsApp Urgência:</span>
                <span className="font-semibold text-emerald-400">Disponível 24/7</span>
              </div>
            </div>

            <div className="flex items-start space-x-2.5">
              <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <div>
                <span className="block text-[10px] text-slate-500 uppercase font-medium">Atendimento:</span>
                <span>Atuação em todo o Brasil (Presencial e Online)</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* OAB Code of Ethics Disclaimer */}
      <div className="bg-[#020203] border-t border-slate-800/60 py-6 px-6 sm:px-10 lg:px-12 text-[10px] text-slate-500 text-center leading-relaxed font-light">
        <div className="max-w-7xl mx-auto space-y-2">
          <p>
             Este site possui caráter meramente informativo e educacional, respeitando estritamente os provimentos e o Código de Ética e Disciplina da Ordem dos Advogados do Brasil (OAB/Provimento 205/2021). Não realiza promessa de resultados nem contratação direta sem prévia análise técnica do caso concreto.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-slate-800/40 text-[11px] text-slate-500">
            <span>
              © {new Date().getFullYear()} Deyse Ramaiane Advocacia Criminal. Todos os direitos reservados.
            </span>
            <button
              onClick={scrollToTop}
              className="mt-2 sm:mt-0 flex items-center space-x-1 text-slate-400 hover:text-white transition-colors"
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
