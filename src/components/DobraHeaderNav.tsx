import React, { useState } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';
import logoImg from '../assets/images/logoadvogada.png';

interface DobraHeaderNavProps {
  onOpenEmergencyModal: () => void;
}

export const DobraHeaderNav: React.FC<DobraHeaderNavProps> = ({
  onOpenEmergencyModal,
}) => {
  const [activeTab, setActiveTab] = useState('INÍCIO');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'INÍCIO', href: '#' },
    { label: 'SOBRE', href: '#sobre' },
    { label: 'ÁREAS DE ATUAÇÃO', href: '#areas-de-atuacao' },
    { label: 'CONTATO', href: '#contato' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#050608]/95 backdrop-blur-md border-b border-slate-800/60 py-1.5 sm:py-2 transition-all duration-300 font-['Poppins',sans-serif]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between min-h-[48px] sm:min-h-[54px]">
        
        {/* Brand Logo Image */}
        <a href="#" className="flex items-center group shrink-0 py-0.5">
          <img
            src={logoImg}
            alt="Deyse Ramaiane Advocacia Criminal Logo"
            className="h-9 sm:h-11 lg:h-12 w-auto max-w-[180px] sm:max-w-[240px] object-contain brightness-110 drop-shadow-md group-hover:scale-[1.02] transition-transform"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9 text-xs font-medium tracking-[0.14em] text-slate-300 uppercase font-['Poppins',sans-serif]">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setActiveTab(item.label)}
              className={`relative py-1 transition-colors duration-200 hover:text-white ${
                activeTab === item.label ? 'text-white font-semibold' : 'text-slate-300'
              }`}
            >
              {item.label}
              {activeTab === item.label && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-100 rounded-full"></span>
              )}
            </a>
          ))}
        </nav>

        {/* Header CTA Button - Pill Outline with WhatsApp Icon */}
        <div className="hidden sm:flex items-center shrink-0">
          <button
            onClick={onOpenEmergencyModal}
            className="border border-slate-400/90 hover:border-white text-slate-100 hover:text-white px-4 py-1.5 sm:px-4.5 sm:py-2 rounded-full text-[11px] font-medium tracking-[0.12em] uppercase flex items-center space-x-2 transition-all duration-300 hover:bg-white/10 cursor-pointer shadow-sm active:scale-95 font-['Poppins',sans-serif]"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current text-slate-200" />
            <span>FALAR COM A ADVOGADA</span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors focus:outline-none"
          aria-label="Abrir menu de navegação"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#07090e]/98 backdrop-blur-xl border-b border-slate-800 px-6 pt-5 pb-8 space-y-4 shadow-2xl animate-fadeIn">
          <div className="flex flex-col items-center justify-center space-y-2 divide-y divide-slate-800/60 text-center w-full">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => {
                  setActiveTab(item.label);
                  setMobileMenuOpen(false);
                }}
                className={`w-full block text-xs font-semibold tracking-widest py-3 uppercase transition-colors ${
                  activeTab === item.label ? 'text-amber-300' : 'text-slate-200 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-3 flex justify-center">
            <button
              onClick={() => {
                onOpenEmergencyModal();
                setMobileMenuOpen(false);
              }}
              className="w-full silver-button py-3.5 px-5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2.5 shadow-lg active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>FALAR COM A ADVOGADA</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};



