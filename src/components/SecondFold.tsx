import React, { useState } from 'react';
import dobra2Img from '../assets/images/dobra2.jfif';
import { Award, Globe, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';

export const SecondFold: React.FC = () => {
  const [showFullText, setShowFullText] = useState(false);

  return (
    <section id="sobre" className="relative w-full bg-[#F7F7F5] text-[#0B0B0C] py-16 sm:py-24 font-sans-clean overflow-hidden">
      <div id="apresentacao" className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Column: Professional Portrait of Dra. Deyse */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-full max-w-md aspect-[4/5] rounded-lg overflow-hidden border border-[#B8BBC0]/60 shadow-xl">
            <img
              src={dobra2Img}
              alt="Dra. Deyse Ramaiane - Advocacia Criminal Estratégica"
              className="w-full h-full object-cover object-top contrast-105 brightness-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C]/30 via-transparent to-transparent"></div>
          </div>

          {/* Highlights Mini Badge Bar */}
          <div className="grid grid-cols-3 gap-3 w-full max-w-md mt-5">
            <div className="bg-[#18191B] text-[#F7F7F5] p-3 rounded-md text-center space-y-1">
              <Award className="w-4 h-4 mx-auto text-[#B8BBC0]" />
              <div className="text-[11px] font-semibold uppercase tracking-wider">10+ Anos</div>
              <p className="text-[10px] text-[#B8BBC0]">Experiência Penal</p>
            </div>
            <div className="bg-[#18191B] text-[#F7F7F5] p-3 rounded-md text-center space-y-1">
              <Globe className="w-4 h-4 mx-auto text-[#B8BBC0]" />
              <div className="text-[11px] font-semibold uppercase tracking-wider">Nacional</div>
              <p className="text-[10px] text-[#B8BBC0]">Atuação Estratégica</p>
            </div>
            <div className="bg-[#18191B] text-[#F7F7F5] p-3 rounded-md text-center space-y-1">
              <ShieldCheck className="w-4 h-4 mx-auto text-[#B8BBC0]" />
              <div className="text-[11px] font-semibold uppercase tracking-wider">Preventiva</div>
              <p className="text-[10px] text-[#B8BBC0]">Gestão de Riscos</p>
            </div>
          </div>
        </div>

        {/* Right Column: Concise Core Narrative */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          {/* Header */}
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-3 text-xs tracking-[0.25em] text-[#74777C] uppercase font-semibold">
              <span className="w-8 h-[1px] bg-[#74777C]"></span>
              <span>SOBRE RAMAIANE</span>
            </div>

            <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-[2.6rem] font-normal leading-tight text-[#0B0B0C] tracking-tight">
              O DIREITO PENAL ESTÁ ONDE O RISCO PENAL ESTÁ.
            </h2>
          </div>

          {/* Core Essential Paragraphs */}
          <div className="space-y-4 text-[#18191B] text-sm sm:text-base leading-relaxed font-light">
            <p>
              Ao longo de mais de uma década dedicada à advocacia criminal, construí uma forma técnica, moderna e estratégica de exercer a profissão.
            </p>
            <p>
              A defesa penal contemporânea vai muito além dos conceitos tradicionais: ela está presente nas <strong>decisões empresariais</strong>, na <strong>conduta médica</strong>, na <strong>atividade ambiental</strong>, no <strong>ambiente digital</strong> e nas <strong>operações financeiras</strong>.
            </p>
            <p>
              Qualquer atividade profissional ou empresarial pode estar exposta ao risco penal. Nossa atuação antecipa estes cenários para proteger a liberdade, o patrimônio e a reputação.
            </p>

            {/* Expandable Section for Full Manifesto */}
            {showFullText && (
              <div className="pt-3 space-y-4 text-xs sm:text-sm text-[#18191B] border-t border-[#B8BBC0]/40 animate-fadeIn">
                <p>
                  Isso não significa partir da ideia de que determinada profissão está associada a crimes, mas sim compreender que decisões profissionais podem ter repercussões de natureza penal que exigem atuação técnica especializada e preventiva.
                </p>
                <div className="bg-[#FFFFFF] p-4 rounded-md border border-[#B8BBC0]/50 space-y-1.5 text-xs text-[#0B0B0C]">
                  <p>• <strong>Decisão empresarial:</strong> pode originar uma investigação.</p>
                  <p>• <strong>Conduta médica:</strong> pode ser questionada criminalmente.</p>
                  <p>• <strong>Operação financeira:</strong> pode despertar a atenção dos órgãos de persecução.</p>
                  <p>• <strong>Atividade ambiental:</strong> pode produzir repercussões penais.</p>
                  <p>• <strong>Relação no ambiente digital:</strong> pode chegar à esfera criminal.</p>
                </div>
                <p className="italic">
                  A defesa penal contemporânea não possui um único perfil de cliente. Ela começa onde surge o risco.
                </p>
              </div>
            )}
          </div>

          {/* Toggle Full Manifesto Button */}
          <div>
            <button
              onClick={() => setShowFullText(!showFullText)}
              className="text-xs font-semibold uppercase tracking-wider text-[#0B0B0C] hover:text-[#74777C] flex items-center space-x-2 transition-colors cursor-pointer"
            >
              <span>{showFullText ? 'REDUZIR TEXTO' : 'LER APRESENTAÇÃO COMPLETA'}</span>
              {showFullText ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {/* Signature Block */}
          <div className="pt-4 border-t border-[#B8BBC0]/40 flex flex-col space-y-1">
            <span className="font-serif-title italic text-2xl text-[#0B0B0C]">
              — D. Ramaiane
            </span>
            <span className="text-xs tracking-[0.2em] font-semibold text-[#74777C] uppercase">
              Advocacia Criminal Estratégica
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
