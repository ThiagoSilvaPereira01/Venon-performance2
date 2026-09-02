import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Instagram, MapPin, Gauge, Shield } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Dinamômetro', href: '#dinamometro' },
    { label: 'Simulador', href: '#orcamento' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Localização', href: '#localizacao' },
  ];

  return (
    <>
      {/* Top Bar - Refined & Subtle */}
      <div className="bg-[#06070a] border-b border-white/[0.06] text-xs py-2 px-4 text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 bg-[#c5a059]/10 border border-[#c5a059]/30 text-[#dfb76c] font-mono text-[11px] px-2.5 py-0.5 rounded font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]"></span>
              Colombo • PR
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
              Av. Santos Dumont, 1623 • Roça Grande
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://wa.me/5541996573270"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-200 hover:text-[#dfb76c] font-medium transition"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
              (41) 99657-3270
            </a>
            <a
              href="https://www.instagram.com/venonperformance/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-400 hover:text-[#dfb76c] transition"
            >
              <Instagram className="w-3.5 h-3.5 text-[#c5a059]" />
              @venonperformance
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#08090c]/95 backdrop-blur-md border-b border-[#c5a059]/20 py-2.5 shadow-2xl'
            : 'bg-[#08090c]/85 backdrop-blur-sm border-b border-white/[0.05] py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#c5a059] to-[#866523] p-[1px] shadow-md">
              <div className="w-full h-full bg-[#0d0f15] rounded-[11px] flex items-center justify-center group-hover:bg-[#141824] transition">
                <span className="font-display font-black text-lg text-[#dfb76c]">V</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="font-display font-black text-xl tracking-wider text-white">
                  VENON
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]"></span>
              </div>
              <span className="font-mono text-[8px] tracking-[0.28em] text-[#c5a059] font-bold uppercase -mt-0.5">
                PERFORMANCE
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs xl:text-sm font-medium text-slate-300 hover:text-white transition-colors relative py-1 whitespace-nowrap hover:after:w-full after:w-0 after:h-[2px] after:bg-[#c5a059] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Burger */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#orcamento"
              className="hidden sm:inline-flex items-center gap-2 whitespace-nowrap bg-gradient-to-r from-[#c5a059] via-[#d4af37] to-[#b89047] hover:from-[#dfb76c] hover:to-[#c5a059] text-[#08090c] font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-lg shadow-sm hover:shadow-luxury transition-all duration-300 hover:-translate-y-0.5"
            >
              <Gauge className="w-3.5 h-3.5 text-[#08090c]" />
              <span>Solicitar Orçamento</span>
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-[#c5a059] transition"
              aria-label="Abrir Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="fixed right-0 top-0 bottom-0 w-80 max-w-[85%] bg-[#0d0f15] border-l border-[#c5a059]/30 p-6 flex flex-col justify-between shadow-2xl z-50">
            <div>
              <div className="flex justify-between items-center pb-5 border-b border-slate-800">
                <span className="font-display font-bold text-white text-lg tracking-wider">
                  MENU VENON
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-md text-slate-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col gap-3 mt-6">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-medium text-slate-200 hover:text-[#dfb76c] py-2.5 border-b border-slate-800/60 transition flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <span className="text-[#c5a059]">→</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 flex flex-col gap-3">
              <a
                href="#orcamento"
                onClick={() => setIsOpen(false)}
                className="w-full text-center bg-[#c5a059] hover:bg-[#dfb76c] text-[#08090c] font-bold py-3 rounded-lg transition"
              >
                Simular Ganho / Orçamento
              </a>
              <a
                href="https://wa.me/5541996573270"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-slate-900 border border-slate-700 text-slate-200 hover:text-white font-medium py-3 rounded-lg transition flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#c5a059]" />
                WhatsApp Oficial
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
