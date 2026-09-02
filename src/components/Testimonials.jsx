import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Carlos Eduardo M.',
      car: 'VW Jetta 2.0 TSI (Stage 2)',
      rating: 5,
      date: 'Google Review',
      comment: 'Lugar de gente que entende de verdade de preparação! Fiz meu Stage 2 com eles, o carro ficou fantástico em torque e extremamente liso no dia a dia. Aferição no dinamômetro Servitec deu muita segurança.',
    },
    {
      name: 'Rodrigo Siqueira',
      car: 'Gol Turbo Forjado (FuelTech FT550)',
      rating: 5,
      date: 'Google Review',
      comment: 'Sensacional o atendimento do Thiago e de toda equipe Venon. Acerto de FuelTech impecável, partida a frio de primeira e potência garantida na pista. Recomendo de olhos fechados!',
    },
    {
      name: 'Felipe Alencar',
      car: 'BMW 320i ActiveFlex (Stage 1 Custom)',
      rating: 5,
      date: 'Google Review',
      comment: 'Mudou completamente a dinâmica do carro! Tirou o delay chato do acelerador e o carro virou outro na retomada. Transparência total com gráfico antes e depois no dinamômetro.',
    },
  ];

  return (
    <section id="avaliacoes" className="py-24 relative bg-gradient-to-b from-[#08090c] via-[#0d1017] to-[#08090c] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#c5a059]/10 border border-[#c5a059]/30 px-4 py-1.5 rounded-full mb-3">
            <Star className="w-3.5 h-3.5 text-[#c5a059] fill-[#c5a059]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#dfb76c] uppercase">
              Confiança & Reputação
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
            QUEM EXPERIMENTOU, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dfb76c] to-[#c5a059]">APROVA</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light">
            Avaliações 100% reais de clientes que confiam suas máquinas à nossa equipe técnica.
          </p>

          {/* Google Score Badge */}
          <div className="inline-flex items-center gap-3 bg-[#0d1017] border border-white/[0.08] rounded-full px-5 py-2 mt-6 shadow-md">
            <div className="flex text-[#dfb76c]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#dfb76c]" />
              ))}
            </div>
            <span className="text-white font-bold text-sm">5.0 / 5.0</span>
            <span className="text-slate-400 text-xs">no Google Maps</span>
          </div>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#0d1017] border border-white/[0.08] p-7 flex flex-col justify-between hover:border-[#c5a059]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-luxury relative group"
            >
              <Quote className="w-8 h-8 text-[#c5a059]/15 absolute top-6 right-6" />

              <div>
                <div className="flex items-center gap-1 text-[#dfb76c] mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#dfb76c]" />
                  ))}
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <div>
                  <div className="font-bold text-white text-sm flex items-center gap-1.5">
                    {rev.name}
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="text-xs font-mono text-[#dfb76c] mt-0.5">{rev.car}</div>
                </div>

                <span className="text-[10px] font-mono text-slate-500 uppercase">
                  {rev.date}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
