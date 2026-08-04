import React, { useState } from 'react';
import { HeroFold } from './components/HeroFold';
import { SecondFold } from './components/SecondFold';
import { ThirdFold } from './components/ThirdFold';
import { FourthFold } from './components/FourthFold';
import { FifthFold } from './components/FifthFold';
import { TestimonialsFold } from './components/TestimonialsFold';
import { FooterFold } from './components/FooterFold';
import { DobraHeaderNav } from './components/DobraHeaderNav';
import { EmergencyModal } from './components/EmergencyModal';
import { EmergencyContact } from './types';

export default function App() {
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);

  const emergencyContact: EmergencyContact = {
    lawyerName: "Dra. Deyse Ramaiane",
    oabNumber: "Advocacia Criminal",
    phone: "(92) 99348-0017",
    whatsappNumber: "5592993480017",
    whatsappMessage: "Olá Dra. Deyse Ramaiane, preciso de atendimento em advocacia criminalista.",
  };

  return (
    <div className="min-h-screen bg-[#07080b] text-slate-100 flex flex-col selection:bg-slate-300 selection:text-black">
      
      {/* Header Nav Bar */}
      <DobraHeaderNav
        onOpenEmergencyModal={() => setIsEmergencyModalOpen(true)}
      />

      {/* Main Sections */}
      <main className="flex-1 w-full">
        {/* Primeira Dobra (Hero + Áreas de Atuação) */}
        <HeroFold
          onOpenEmergencyModal={() => setIsEmergencyModalOpen(true)}
        />

        {/* Segunda Dobra */}
        <SecondFold />

        {/* Terceira Dobra */}
        <ThirdFold
          onOpenEmergencyModal={() => setIsEmergencyModalOpen(true)}
        />

        {/* Quarta Dobra - Como eu posso te ajudar */}
        <FourthFold
          onOpenEmergencyModal={() => setIsEmergencyModalOpen(true)}
        />

        {/* Quinta Dobra - Por que escolher a Deyse Ramaiane Advocacia Criminal */}
        <FifthFold
          onOpenEmergencyModal={() => setIsEmergencyModalOpen(true)}
        />

        {/* Sexta Dobra - Depoimentos e Avaliações de Clientes */}
        <TestimonialsFold
          onOpenEmergencyModal={() => setIsEmergencyModalOpen(true)}
        />
      </main>

      {/* Sétima Dobra - Rodapé completo */}
      <FooterFold
        onOpenEmergencyModal={() => setIsEmergencyModalOpen(true)}
      />

      {/* Emergency Contact Modal */}
      <EmergencyModal
        isOpen={isEmergencyModalOpen}
        onClose={() => setIsEmergencyModalOpen(false)}
        contact={emergencyContact}
      />

    </div>
  );
}



