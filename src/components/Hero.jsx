import React from 'react';
import { Gauge, Zap, ShieldCheck, ChevronRight, Award, Trophy, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden">
      {/* Background Sophisticated Atmospheric Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#c5a059]/[0.07] rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-10 right-10 w-96 h-96 bg-slate-800/20 rounded-full blur-[110px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Super Badge */}
            <div className="inline-flex items-center gap-2.5 bg-[#0d1017] border border-[#c5a059]/35 px-4 py-1.5 rounded-full mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#c5a059]"></span>
              <span className="text-xs font-mono font-semibold tracking-widest text-[#dfb76c] uppercase">
                Dinamômetro Servitec Oficial • Colombo - PR
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.08] mb-6">
              DOMINE A <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dfb76c] via-[#c5a059] to-[#f3e5ab]">POTÊNCIA</span> REAL DO SEU MOTOR
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mb-8 font-light">
              Remap de ECU sob medida, acerto de injeções programáveis <strong className="text-white font-medium">FuelTech</strong> e <strong className="text-white font-medium">Injepro</strong>, e calibração em dinamômetro oficial de última geração. Potência máxima com rigor mecânico.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12">
              <a
                href="#orcamento"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#c5a059] via-[#d4af37] to-[#b89047] hover:from-[#dfb76c] hover:to-[#c5a059] text-[#08090c] font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-luxury hover:shadow-luxury-lg transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
              >
                <Zap className="w-4 h-4 text-[#08090c] fill-[#08090c]" />
                <span>Simular Ganho & Orçamento</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/5541996573270?text=Ol%C3%A1%20Venon%20Performance!%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20prepara%C3%A7%C3%A3o%20e%20dinam%C3%B4metro."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#0e1119] hover:bg-[#141824] border border-slate-800 hover:border-[#c5a059]/50 text-slate-200 hover:text-white font-semibold text-sm px-7 py-4 rounded-xl transition duration-300"
              >
                <span>Falar com Preparador</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/[0.08] w-full">
              <div>
                <div className="font-display font-black text-2xl sm:text-3xl text-white flex items-baseline gap-1">
                  100% <span className="text-[#c5a059] text-base">Custom</span>
                </div>
                <div className="text-xs text-slate-400 font-mono uppercase tracking-wider mt-0.5">
                  Mapa Sob Medida
                </div>
              </div>

              <div>
                <div className="font-display font-black text-2xl sm:text-3xl text-white flex items-baseline gap-1">
                  Servitec <span className="text-[#c5a059] text-base">Oficial</span>
                </div>
                <div className="text-xs text-slate-400 font-mono uppercase tracking-wider mt-0.5">
                  Aferição Precisa
                </div>
              </div>

              <div>
                <div className="font-display font-black text-2xl sm:text-3xl text-white flex items-baseline gap-1">
                  5.0 <span className="text-[#c5a059] text-base">★</span>
                </div>
                <div className="text-xs text-slate-400 font-mono uppercase tracking-wider mt-0.5">
                  Google Reviews
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card with Workshop Photo */}
              <div className="rounded-2xl overflow-hidden border border-[#c5a059]/25 bg-[#0d1017] shadow-2xl relative group">
                <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                  <img
                    src="/assets/images/hero-oficina.png"
                    alt="Oficina Venon Performance Colombo"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                    onError={(e) => {
                      e.target.src = '/assets/images/dinamometro.png';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1017] via-transparent to-black/30"></div>
                  
                  {/* Floating Tag */}
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-[#c5a059]/30 rounded-lg px-3 py-1.5 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
                    <span className="font-mono text-xs font-bold text-[#dfb76c] tracking-wider uppercase">
                      Centro de Performance
                    </span>
                  </div>
                </div>

                {/* Telemetry Card Content */}
                <div className="p-6 bg-gradient-to-b from-[#0d1017] to-[#07080c]">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Estrutura & Engenharia</span>
                      <h4 className="text-white font-display font-bold text-lg">Preparação & Dinamômetro</h4>
                    </div>
                    <span className="px-3 py-1 bg-[#c5a059]/10 border border-[#c5a059]/30 text-[#dfb76c] text-xs font-mono font-bold rounded-full">
                      SEDE PRÓPRIA
                    </span>
                  </div>

                  {/* Dyno Simulated Metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-[#08090c] p-3 rounded-xl border border-slate-800">
                      <span className="text-[11px] text-slate-400 font-mono uppercase">Ganho Médio Potência</span>
                      <div className="text-xl font-bold font-display text-[#dfb76c] flex items-center gap-1 mt-0.5">
                        +25% a +45%
                      </div>
                    </div>

                    <div className="bg-[#08090c] p-3 rounded-xl border border-slate-800">
                      <span className="text-[11px] text-slate-400 font-mono uppercase">Ganho Médio Torque</span>
                      <div className="text-xl font-bold font-display text-white flex items-center gap-1 mt-0.5">
                        +30% a +50%
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar Style Spec */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-400">Resposta de Acelerador</span>
                      <span className="text-[#dfb76c] font-bold">Instantânea (Zero Delay)</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#c5a059] to-[#dfb76c] rounded-full w-[95%]"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: FuelTech & Injepro */}
              <div className="absolute -bottom-6 -left-6 bg-[#0c0f16]/95 border border-slate-800 rounded-xl p-3.5 shadow-2xl backdrop-blur-md hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#c5a059]/10 border border-[#c5a059]/30 flex items-center justify-center">
                  <Award className="w-5 h-5 text-[#dfb76c]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white uppercase font-mono">Especialista</div>
                  <div className="text-[11px] text-slate-400">FuelTech • Injepro • ECU Original</div>
                </div>
              </div>

              {/* Floating Badge 2: Certificado */}
              <div className="absolute -top-4 -right-4 bg-[#0c0f16]/95 border border-[#c5a059]/35 rounded-xl p-3 shadow-lg backdrop-blur-md hidden sm:flex items-center gap-2.5">
                <Trophy className="w-4 h-4 text-[#dfb76c]" />
                <span className="text-xs font-bold text-white font-display uppercase tracking-wider">
                  Alta Performance
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
