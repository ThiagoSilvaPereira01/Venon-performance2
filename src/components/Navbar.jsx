import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Instagram, MapPin, Gauge } from 'lucide-react';

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
      {/* Top Bar */}
      <div className="bg-[#050608] border-b border-white/[0.05] text-[11px] py-1.5 px-4 text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 bg-[#e11d48]/10 border border-[#e11d48]/30 text-[#fb7185] font-mono text-[10px] px-2 py-0.5 rounded font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e11d48]"></span>
              Colombo • PR
            </span>
            <span className="flex items-center gap-1.5 text-slate-400 font-light">
              <MapPin className="w-3 h-3 text-[#e11d48]" />
              Av. Santos Dumont, 1623 • Roça Grande
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://wa.me/5541996573270"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-300 hover:text-[#fb7185] transition"
            >
              <Phone className="w-3 h-3 text-[#e11d48]" />
              (41) 99657-3270
            </a>
            <a
              href="https://www.instagram.com/venonperformance/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-400 hover:text-[#fb7185] transition"
            >
              <Instagram className="w-3 h-3 text-[#e11d48]" />
              @venonperformance
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#08090c]/95 backdrop-blur-md border-b border-[#e11d48]/25 py-2.5 shadow-2xl'
            : 'bg-[#08090c]/90 backdrop-blur-sm border-b border-white/[0.05] py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#e11d48] to-[#9f1239] p-[1px] shadow-sm">
              <div className="w-full h-full bg-[#0d0f15] rounded-[7px] flex items-center justify-center group-hover:bg-[#141824] transition">
                <span className="font-display font-black text-lg text-[#fb7185]">V</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="font-display font-black text-xl tracking-wider text-slate-100">
                  VENON
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#e11d48]"></span>
              </div>
              <span className="font-mono text-[8px] tracking-[0.28em] text-[#e11d48] font-semibold uppercase -mt-0.5">
                PERFORMANCE
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6 shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-medium text-slate-300 hover:text-[#fb7185] transition-colors relative py-1 whitespace-nowrap hover:after:w-full after:w-0 after:h-[1.5px] after:bg-[#e11d48] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button & Burger */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#orcamento"
              className="inline-flex items-center gap-1.5 whitespace-nowrap bg-[#0e1119] hover:bg-[#e11d48] text-[#fb7185] hover:text-white border border-[#e11d48]/50 hover:border-[#e11d48] font-bold text-[11px] uppercase tracking-wider px-3.5 py-2 rounded-lg transition-all duration-200 shadow-sm"
            >
              <Gauge className="w-3.5 h-3.5" />
              <span>Orçamento</span>
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden p-2 rounded-lg bg-[#0e1119] border border-white/[0.08] text-slate-300 hover:text-white hover:border-[#e11d48] transition"
              aria-label="Abrir Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-40 xl:hidden">
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="fixed right-0 top-0 bottom-0 w-80 max-w-[85%] bg-[#0d0f15] border-l border-[#e11d48]/30 p-6 flex flex-col justify-between shadow-2xl z-50">
            <div>
              <div className="flex justify-between items-center pb-4 border-b border-white/[0.08]">
                <span className="font-display font-bold text-white text-base tracking-wider">
                  MENU VENON
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-md text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-2 mt-5">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-medium text-slate-300 hover:text-[#fb7185] py-2.5 border-b border-white/[0.04] transition flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <span className="text-[#e11d48] text-xs">→</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-5 border-t border-white/[0.08] flex flex-col gap-3">
              <a
                href="#orcamento"
                onClick={() => setIsOpen(false)}
                className="w-full text-center bg-[#e11d48] hover:bg-[#f43f5e] text-white font-bold text-xs uppercase tracking-wider py-3 rounded-lg transition shadow-md"
              >
                Simular Orçamento
              </a>
              <a
                href="https://wa.me/5541996573270"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-[#0e1119] border border-white/[0.1] text-slate-300 hover:text-white font-medium text-xs py-3 rounded-lg transition flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#e11d48]" />
                WhatsApp Oficial
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
