import React, { useState } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';

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
    <header className="absolute top-0 left-0 right-0 z-50 w-full bg-transparent py-3 sm:py-4 font-['Poppins',sans-serif]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between min-h-[72px]">
        
        {/* Brand Logo Image (Enlarged) */}
        <a href="#" className="flex items-center group shrink-0 py-1">
          <img
            src="/src/assets/images/logoadvogada.png"
            alt="Deyse Ramaiane Advocacia Criminal Logo"
            className="h-14 sm:h-18 lg:h-20 w-auto max-w-[260px] sm:max-w-[320px] object-contain brightness-110 drop-shadow-md group-hover:scale-[1.02] transition-transform"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9 text-xs font-medium tracking-[0.14em] text-slate-300 uppercase font-['Poppins',sans-serif]">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setActiveTab(item.label)}
              className={`relative py-1.5 transition-colors duration-200 hover:text-white ${
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
            className="border border-slate-400/90 hover:border-white text-slate-100 hover:text-white px-5 py-2.5 rounded-full text-xs font-medium tracking-[0.12em] uppercase flex items-center space-x-2.5 transition-all duration-300 hover:bg-white/10 cursor-pointer shadow-sm active:scale-95 font-['Poppins',sans-serif]"
          >
            <MessageCircle className="w-4 h-4 fill-current text-slate-200" />
            <span>FALAR COM A ADVOGADA</span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-md text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors"
          aria-label="Abrir menu de navegação"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#07090e]/98 backdrop-blur-lg border-b border-slate-800 px-5 pt-4 pb-7 space-y-3.5 animate-fadeIn">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => {
                setActiveTab(item.label);
                setMobileMenuOpen(false);
              }}
              className="block text-xs font-semibold tracking-widest text-slate-300 hover:text-white py-2.5 border-b border-slate-800/60 uppercase"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                onOpenEmergencyModal();
                setMobileMenuOpen(false);
              }}
              className="w-full silver-button py-3 px-4 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2.5 shadow-lg"
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



