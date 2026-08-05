import React, { useState } from 'react';
import { DobraHeaderNav } from './components/DobraHeaderNav';
import { HeroFold } from './components/HeroFold';
import { SecondFold } from './components/SecondFold';
import { PracticeAreasFold } from './components/PracticeAreasFold';
import { ThirdFold } from './components/ThirdFold';
import { FourthFold } from './components/FourthFold';
import { FifthFold } from './components/FifthFold';
import { HowItWorksFold } from './components/HowItWorksFold';
import { EditorialContentFold } from './components/EditorialContentFold';
import { FinalCallFold } from './components/FinalCallFold';
import { TestimonialsFold } from './components/TestimonialsFold';
import { FooterFold } from './components/FooterFold';
import { EmergencyModal } from './components/EmergencyModal';
import { EmergencyContact } from './types';

export default function App() {
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);

  const emergencyContact: EmergencyContact = {
    lawyerName: "Dra. Deyse Ramaiane",
    oabNumber: "Advocacia Criminal Estratégica",
    phone: "(92) 99348-0017",
    whatsappNumber: "5592993480017",
    whatsappMessage: "Olá Dra. Deyse Ramaiane, preciso de atendimento em advocacia criminalista.",
  };

  const handleOpenModal = () => setIsEmergencyModalOpen(true);

  return (
    <div className="min-h-screen bg-[#0B0B0C] text-[#F7F7F5] flex flex-col selection:bg-[#B8BBC0] selection:text-[#0B0B0C]">
      
      {/* Header Navigation Bar */}
      <DobraHeaderNav onOpenEmergencyModal={handleOpenModal} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* Capa Principal / Hero */}
        <HeroFold onOpenEmergencyModal={handleOpenModal} />

        {/* 1. Apresentação Profissional */}
        <SecondFold />

        {/* 2. Áreas de Atuação */}
        <PracticeAreasFold onOpenEmergencyModal={handleOpenModal} />

        {/* 3. Situações que Exigem Atuação Imediata */}
        <ThirdFold onOpenEmergencyModal={handleOpenModal} />

        {/* 4. Destaque - Tráfico de Drogas */}
        <FourthFold onOpenEmergencyModal={handleOpenModal} />

        {/* 5. Atuações Especializadas (Médicos, Empresas, Crimes Digitais, Influenciadores) */}
        <FifthFold onOpenEmergencyModal={handleOpenModal} />

        {/* 6. Como Funciona o Atendimento */}
        <HowItWorksFold onOpenEmergencyModal={handleOpenModal} />

        {/* 7. Conteúdo e Autoridade */}
        <EditorialContentFold onOpenEmergencyModal={handleOpenModal} />

        {/* 8. Chamada Final */}
        <FinalCallFold onOpenEmergencyModal={handleOpenModal} />

        {/* 9. Depoimentos */}
        <TestimonialsFold onOpenEmergencyModal={handleOpenModal} />
      </main>

      {/* Rodapé */}
      <FooterFold onOpenEmergencyModal={handleOpenModal} />

      {/* Emergency / Contact Modal */}
      <EmergencyModal
        isOpen={isEmergencyModalOpen}
        onClose={() => setIsEmergencyModalOpen(false)}
        contact={emergencyContact}
      />

    </div>
  );
}




