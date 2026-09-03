import React, { useState } from 'react';
import { Camera, X, ZoomIn, Eye, Sparkles } from 'lucide-react';

export default function GallerySection() {
  const [filter, setFilter] = useState('all');
  const [activeModalImg, setActiveModalImg] = useState(null);

  const galleryItems = [
    {
      id: 1,
      category: 'oficina',
      title: 'Dinamômetro Servitec em Operação',
      subtitle: 'Sala acústica climatizada para aferição de potência e torque',
      image: '/assets/images/dinamometro.png',
      badge: 'OFICIAL SERVITEC',
      specs: 'Medição em rolos com telemetria precisa'
    },
    {
      id: 2,
      category: 'oficina',
      title: 'Instalações & Box de Preparação',
      subtitle: 'Estrutura completa para mecânica pesada, elevadores e acertos',
      image: '/assets/images/oficina-interior.png',
      badge: 'OFICINA',
      specs: 'Ferramental específico e bancada eletrônica'
    },
    {
      id: 3,
      category: 'oficina',
      title: 'Fachada Venon Performance',
      subtitle: 'Localização privilegiada na Av. Santos Dumont, 1623 em Colombo - PR',
      image: '/assets/images/fachada.png',
      badge: 'SEDE PRÓPRIA',
      specs: 'Fácil acesso e amplo estacionamento'
    },
    {
      id: 4,
      category: 'projetos',
      title: 'VW Golf GTI MK7.5 - Stage 2+',
      subtitle: 'Downpipe inox 3 pol, intake de carbono, calibração em dinamômetro',
      image: 'https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?auto=format&fit=crop&w=800&q=80',
      badge: 'STAGE 2+',
      specs: 'Original: 230cv ➔ Final: 335cv (+105cv)'
    },
    {
      id: 5,
      category: 'projetos',
      title: 'BMW 320i G20 - Remap B48 & Flex',
      subtitle: 'Mapa sob medida para etanol com acerto de ponto e pressão estável',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80',
      badge: 'REMAP CUSTOM',
      specs: 'Original: 184cv ➔ Final: 290cv (+106cv)'
    },
    {
      id: 6,
      category: 'race',
      title: 'Projeto Turbo FuelTech FT550',
      subtitle: 'Chicote motorsport, controle de tração ativo, 2-step e bicos Bosch 210lbs',
      image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
      badge: 'FUELTECH PRO',
      specs: 'Curva de 2.2 bar com proteção total'
    },
    {
      id: 7,
      category: 'projetos',
      title: 'Audi S3 Quattro - Stage 3 IS38 Híbrida',
      subtitle: 'Turbina híbrida, intercooler frontal, mapa agressivo com trocas rápidas DSG',
      image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80',
      badge: 'STAGE 3',
      specs: 'Original: 286cv ➔ Final: 420whp'
    },
    {
      id: 8,
      category: 'oficina',
      title: 'Avaliações Reais dos Clientes',
      subtitle: 'Mais de 150 avaliações 5 estrelas no Google com satisfação máxima',
      image: '/assets/images/reviews.png',
      badge: '5.0 ESTRELAS',
      specs: 'Reconhecimento comprovado da comunidade'
    }
  ];

  const filteredItems = filter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="galeria" className="py-24 relative bg-[#08090c] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#e11d48]/10 border border-[#e11d48]/30 px-4 py-1.5 rounded-full mb-3">
            <Camera className="w-3.5 h-3.5 text-[#e11d48]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#fb7185] uppercase">
              Showcase & Instalações
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
            PROJETOS & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff3b5c] to-[#e11d48]">ESTRUTURA</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light">
            Conheça nosso espaço, nossos equipamentos de precisão e alguns dos projetos de alta performance entregues com excelência.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'Tudo' },
              { id: 'oficina', label: 'Oficina & Dinamômetro' },
              { id: 'projetos', label: 'Carros Preparados' },
              { id: 'race', label: 'FuelTech & Pista' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg transition-all ${
                  filter === f.id
                    ? 'bg-[#e11d48] text-white font-bold shadow-luxury'
                    : 'bg-[#0e1119] text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalImg(item)}
              className="group rounded-2xl overflow-hidden bg-[#0d1017] border border-white/[0.08] hover:border-[#e11d48]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-luxury cursor-pointer flex flex-col"
            >
              <div className="relative h-56 overflow-hidden bg-[#08090c]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-95 group-hover:brightness-100"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                
                {/* Overlay Badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-black/85 backdrop-blur-md border border-[#e11d48]/40 text-[10px] font-mono font-bold text-[#fb7185] px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {item.badge}
                  </span>
                </div>

                {/* Hover Icon */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#e11d48] text-white flex items-center justify-center shadow-lg">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Card Meta */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-display font-bold text-white text-base group-hover:text-[#fb7185] transition-colors mb-1 line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-slate-400 text-xs line-clamp-2 mb-3 font-light">
                    {item.subtitle}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-[#fb7185] font-medium truncate">
                  ⚡ {item.specs}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeModalImg && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveModalImg(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#0d1017] border border-[#e11d48]/40 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalImg(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/80 text-white flex items-center justify-center border border-slate-700 hover:border-[#e11d48] transition"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="max-h-[65vh] w-full bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activeModalImg.image}
                alt={activeModalImg.title}
                className="max-h-[65vh] w-full object-contain"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80';
                }}
              />
            </div>

            {/* Modal Info */}
            <div className="p-6 bg-[#0a0c12] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-white/[0.08]">
              <div>
                <span className="text-xs font-mono font-bold text-[#fb7185] uppercase tracking-wider">
                  {activeModalImg.badge}
                </span>
                <h3 className="text-xl font-bold text-white font-display">
                  {activeModalImg.title}
                </h3>
                <p className="text-slate-300 text-sm mt-1 font-light">
                  {activeModalImg.subtitle}
                </p>
                <div className="text-xs font-mono text-emerald-400 mt-2">
                  Especificações: {activeModalImg.specs}
                </div>
              </div>

              <a
                href={`https://wa.me/5541996573270?text=Olá Venon! Vi a foto "${activeModalImg.title}" no site e gostaria de saber mais sobre esse serviço.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#e11d48] hover:bg-[#f43f5e] text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow-luxury transition whitespace-nowrap"
              >
                Quero um Projeto Assim
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
