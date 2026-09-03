import React from 'react';
import { Gauge, CheckCircle2, ShieldCheck, Activity, BarChart3, AlertCircle } from 'lucide-react';

export default function DynoSection() {
  return (
    <section id="dinamometro" className="py-24 relative bg-gradient-to-b from-[#08090c] via-[#0d1017] to-[#08090c] border-t border-white/[0.06] overflow-hidden">
      
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#e11d48]/[0.06] rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image with Stats Overlay */}
          <div className="lg:col-span-6">
            <div className="relative">
              
              {/* Main Image */}
              <div className="rounded-2xl overflow-hidden border border-[#e11d48]/30 shadow-2xl relative">
                <img
                  src="/assets/images/dinamometro.png"
                  alt="Dinamômetro Servitec Venon Performance"
                  className="w-full h-[400px] sm:h-[480px] object-cover filter brightness-95"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090c] via-transparent to-transparent"></div>
                
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#090b10]/90 backdrop-blur-md border border-white/[0.1]">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-mono text-[#fb7185] uppercase tracking-widest font-semibold">Dinamômetro Oficial</div>
                      <div className="text-white font-display font-bold text-lg">Servitec Linha 2000 HP</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-mono text-slate-400">Precisão</div>
                      <div className="text-emerald-400 font-mono font-bold text-base">± 0.5%</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -top-6 -right-4 sm:-right-6 bg-[#0e1119] border border-[#e11d48]/35 rounded-xl p-4 shadow-luxury hidden sm:block">
                <div className="flex items-center gap-3">
                  <Activity className="w-7 h-7 text-[#fb7185]" />
                  <div>
                    <div className="text-xs font-mono text-slate-400">Telemetria Real</div>
                    <div className="text-sm font-bold text-white font-display">Sonda Wideband 4.9 LSU</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6">
            
            <div className="inline-flex items-center gap-2 bg-[#e11d48]/10 border border-[#e11d48]/30 px-4 py-1.5 rounded-full mb-4">
              <Gauge className="w-4 h-4 text-[#e11d48]" />
              <span className="text-xs font-mono font-bold tracking-widest text-[#fb7185] uppercase">
                Aferição de Potência & Torque
              </span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-6">
              SEM ACHISMOS. <br />
              NÚMEROS <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff3b5c] to-[#e11d48]">COMPROVADOS</span> NO ROLO.
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-light">
              Na <strong className="text-white font-medium">Venon Performance</strong>, cada cavalo de potência é medido e comprovado tecnicamente. O dinamômetro Servitec oficial permite simular condições reais de carga, resistência do ar e tração, assegurando confiabilidade na pista e no dia a dia.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#0e1119] border border-white/[0.06]">
                <BarChart3 className="w-5 h-5 text-[#e11d48] shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold text-sm">Gráfico Comparativo Antes vs. Depois</h4>
                  <p className="text-slate-400 text-xs mt-0.5 font-light">Você recebe o laudo técnico completo da curva de torque (kgfm) e potência (whp / cv) aferidas na roda e corrigidas para o motor.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#0e1119] border border-white/[0.06]">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold text-sm">Segurança Térmica e de Ponto de Ignição</h4>
                  <p className="text-slate-400 text-xs mt-0.5 font-light">Monitoramento rigoroso de EGT (temperatura dos gases de escape), pressão de turbo e detonação (knock) para evitar qualquer quebra.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#0e1119] border border-white/[0.06]">
                <AlertCircle className="w-5 h-5 text-[#fb7185] shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold text-sm">Diagnóstico Preciso de Falhas Ocultas</h4>
                  <p className="text-slate-400 text-xs mt-0.5 font-light">Detecta falhas de ignição, oscilação de pressão de combustível e vazamentos de pressurização que só aparecem em rotações elevadas.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5541996573270?text=Ol%C3%A1%20Venon!%20Gostaria%20de%20agendar%20uma%20passada%20de%20dinam%C3%B4metro%20para%20o%20meu%20carro."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#e11d48] hover:bg-[#f43f5e] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-luxury transition duration-300"
              >
                <Gauge className="w-4 h-4 text-white" />
                Agendar Passada no Dinamômetro
              </a>

              <a
                href="#orcamento"
                className="inline-flex items-center justify-center gap-2 bg-[#0e1119] hover:bg-[#141824] text-slate-300 hover:text-white border border-slate-800 text-xs uppercase tracking-wider font-semibold px-6 py-3.5 rounded-xl transition"
              >
                Calcular Potência Estimada
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
