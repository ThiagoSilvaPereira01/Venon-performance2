import React from 'react';
import { Instagram, Phone, MapPin, ArrowUp, MessageCircle } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-[#050608] border-t border-white/[0.06] text-slate-400 py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/[0.06]">
            
            {/* Col 1: Brand Info */}
            <div className="space-y-4">
              <a href="#" className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#e11d48] to-[#9f1239] p-[1px] shadow-lg">
                  <div className="w-full h-full bg-[#0d0f15] rounded-[11px] flex items-center justify-center">
                    <span className="font-display font-black text-xl text-[#fb7185]">V</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-black text-xl tracking-wider text-white">
                    VENON
                  </span>
                  <span className="font-mono text-[9px] tracking-[0.28em] text-[#e11d48] font-bold uppercase -mt-1">
                    PERFORMANCE
                  </span>
                </div>
              </a>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Centro especializado em reprogramação eletrônica de alta precisão, calibração de injeções programáveis e dinamômetro oficial Servitec na região de Colombo e Curitiba.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://www.instagram.com/venonperformance/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#0d1017] border border-white/[0.08] flex items-center justify-center text-slate-300 hover:text-[#fb7185] hover:border-[#e11d48] transition"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/5541996573270"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#0d1017] border border-white/[0.08] flex items-center justify-center text-slate-300 hover:text-[#fb7185] hover:border-[#e11d48] transition"
                  aria-label="WhatsApp"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Col 2: Serviços */}
            <div>
              <h4 className="font-display font-bold text-white text-sm tracking-wider uppercase mb-4">
                Serviços de Performance
              </h4>
              <ul className="space-y-2.5 text-xs font-light">
                <li><a href="#servicos" className="hover:text-[#fb7185] transition">Remap Stage 1 (ECU Original)</a></li>
                <li><a href="#servicos" className="hover:text-[#fb7185] transition">Remap Stage 2 & 3 Custom</a></li>
                <li><a href="#dinamometro" className="hover:text-[#fb7185] transition">Dinamômetro Servitec 2000 HP</a></li>
                <li><a href="#servicos" className="hover:text-[#fb7185] transition">FuelTech FT450 / FT550 / FT600</a></li>
                <li><a href="#servicos" className="hover:text-[#fb7185] transition">Acerto Injepro T10000 / S8000</a></li>
                <li><a href="#servicos" className="hover:text-[#fb7185] transition">Pops & Bangs e Launch Control</a></li>
              </ul>
            </div>

            {/* Col 3: Links Rápidos */}
            <div>
              <h4 className="font-display font-bold text-white text-sm tracking-wider uppercase mb-4">
                Navegação
              </h4>
              <ul className="space-y-2.5 text-xs font-light">
                <li><a href="#orcamento" className="hover:text-[#fb7185] transition">Simulador de Ganhos</a></li>
                <li><a href="#galeria" className="hover:text-[#fb7185] transition">Fotos da Oficina & Projetos</a></li>
                <li><a href="#avaliacoes" className="hover:text-[#fb7185] transition">Avaliações do Google (5.0)</a></li>
                <li><a href="#localizacao" className="hover:text-[#fb7185] transition">Localização e Rotas</a></li>
                <li><a href="https://wa.me/5541996573270" target="_blank" rel="noopener noreferrer" className="hover:text-[#fb7185] transition">Agendamento via WhatsApp</a></li>
              </ul>
            </div>

            {/* Col 4: Contato Direto */}
            <div>
              <h4 className="font-display font-bold text-white text-sm tracking-wider uppercase mb-4">
                Atendimento Técnico
              </h4>
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#e11d48] shrink-0 mt-0.5" />
                  <span className="font-light">Av. Santos Dumont, 1623 - Colombo • PR</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#e11d48] shrink-0" />
                  <a href="tel:41996573270" className="hover:text-white transition font-medium">(41) 99657-3270</a>
                </div>
                <div className="p-3.5 rounded-xl bg-[#0a0c12] border border-white/[0.06] mt-2">
                  <span className="text-[11px] font-mono text-[#fb7185] font-semibold block">Horário da Oficina:</span>
                  <span className="text-[11px] text-slate-300 font-light">Seg - Sex: 08:30h às 18:00h</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light">
            <p>© {new Date().getFullYear()} Venon Performance. Todos os direitos reservados.</p>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-[#fb7185] transition group"
            >
              <span>Voltar ao Topo</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5541996573270?text=Ol%C3%A1%20Venon%20Performance!%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20o%20meu%20carro."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#e11d48] hover:bg-[#f43f5e] text-white p-3.5 sm:p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center border border-white/20 group"
        aria-label="Falar no WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e11d48] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#fb7185] border border-white"></span>
        </span>
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-white" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 text-xs font-bold pl-0 group-hover:pl-2 text-white">
          WhatsApp Venon
        </span>
      </a>
    </>
  );
}
