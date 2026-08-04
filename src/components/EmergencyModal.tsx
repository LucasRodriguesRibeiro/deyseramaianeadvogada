import React, { useState } from 'react';
import { X, PhoneCall, MessageCircle, Shield, AlertTriangle, CheckCircle2, Clock } from 'lucide-react';
import { EmergencyContact } from '../types';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
  contact: EmergencyContact;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({ isOpen, onClose, contact }) => {
  const [personName, setPersonName] = useState('');
  const [urgencyType, setUrgencyType] = useState('Prisão em Flagrante');
  const [city, setCity] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const encodedWhatsAppUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    `URGENTE - ATENDIMENTO CRIMINAL 24H\n` +
    `Nome: ${personName || 'Não informado'}\n` +
    `Tipo de Ocorrência: ${urgencyType}\n` +
    `Cidade/DP: ${city || 'Não informada'}\n` +
    `Mensagem: Preciso de auxílio jurídico imediato para defesa criminal.`
  )}`;

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(contact.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-lg overflow-hidden bg-[#0e1118] border border-slate-700/80 rounded-2xl shadow-2xl text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-gradient-to-r from-[#121622] to-[#090c12]">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-200">
              <AlertTriangle className="w-5 h-5 text-slate-200" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-100">Plantão Criminal 24 Horas</h3>
              <p className="text-xs text-slate-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Advogado criminalista disponível agora
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 transition-colors rounded-lg hover:text-white hover:bg-slate-800"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
          <div className="p-3 text-xs border rounded-xl bg-slate-900 border-slate-700 text-slate-200 flex items-start space-x-2">
            <Clock className="w-4 h-4 shrink-0 mt-0.5 text-slate-300" />
            <span>
              <strong>Cada minuto importa:</strong> Atendimento imediato para prisão em flagrante, audiência de custódia e mandados de prisão.
            </span>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                Nome de quem solicita o atendimento
              </label>
              <input
                type="text"
                value={personName}
                onChange={(e) => setPersonName(e.target.value)}
                placeholder="Ex: Maria (Esposa do detido)"
                className="w-full px-4 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-slate-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                Motivo da Urgência
              </label>
              <select
                value={urgencyType}
                onChange={(e) => setUrgencyType(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-slate-400"
              >
                <option value="Prisão em Flagrante">Prisão em Flagrante / Delegacia</option>
                <option value="Audiência de Custódia">Audiência de Custódia</option>
                <option value="Mandado de Prisão Cautelar">Mandado de Prisão / Preventiva</option>
                <option value="Habeas Corpus de Urgência">Habeas Corpus de Urgência</option>
                <option value="Outro assunto criminal">Outro assunto criminal urgente</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                Cidade ou Delegacia de localização
              </label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Ex: Manaus - AM / Delegacia de Polícia"
                className="w-full px-4 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-slate-400"
              />
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <a
              href={encodedWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="silver-button w-full flex items-center justify-center space-x-2 py-3.5 px-6 rounded-xl text-center text-sm uppercase tracking-wide cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Falar no WhatsApp Imediatamente</span>
            </a>

            <div className="flex items-center gap-2">
              <a
                href={`tel:${contact.phone}`}
                className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl text-xs font-medium text-slate-200 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>Ligar Agora ({contact.phone})</span>
              </a>

              <button
                onClick={handleCopyPhone}
                className="px-4 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl text-xs font-medium text-slate-300 transition-colors"
              >
                {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : 'Copiar'}
              </button>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1 text-slate-400">
              <Shield className="w-3.5 h-3.5 text-slate-300" />
              Advocacia Criminal Sigilosa & Especializada
            </span>
            <span>{contact.oabNumber}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

