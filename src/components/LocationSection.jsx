import React from 'react';
import { MapPin, Clock, Phone, Navigation, ExternalLink } from 'lucide-react';

export default function LocationSection() {
  const addressQuery = encodeURIComponent('Av. Santos Dumont, 1623, Colombo - PR');
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${addressQuery}`;
  const wazeUrl = `https://waze.com/ul?q=${addressQuery}`;
  const mapEmbedUrl = "https://maps.google.com/maps?q=Av.+Santos+Dumont,+1623+-+Ro%C3%A7a+Grande,+Colombo+-+PR&t=&z=16&ie=UTF8&iwloc=&output=embed";

  return (
    <section id="localizacao" className="py-24 relative bg-[#08090c] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#c5a059]/10 border border-[#c5a059]/30 px-4 py-1.5 rounded-full mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#dfb76c] uppercase">
              Onde Estamos
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
            VISITE NOSSA <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dfb76c] to-[#c5a059]">OFICINA</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light">
            Sede própria e de fácil acesso na grande Curitiba, com estrutura pronta para receber seu veículo.
          </p>
        </div>

        {/* Location Info & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Info Details (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Address Box */}
            <div className="p-6 rounded-2xl bg-[#0d1017] border border-white/[0.08] flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#c5a059]/10 border border-[#c5a059]/30 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-[#c5a059]" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Endereço Oficial</span>
                <h4 className="text-white font-bold text-base mt-0.5">Av. Santos Dumont, 1623</h4>
                <p className="text-slate-400 text-sm font-light">Roça Grande, Colombo - PR</p>
                <p className="text-xs text-[#dfb76c] font-mono mt-1">Fácil acesso pela Rodovia da Uva e rápida ligação com Curitiba</p>
              </div>
            </div>

            {/* Hours Box */}
            <div className="p-6 rounded-2xl bg-[#0d1017] border border-white/[0.08] flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-slate-300" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Horário de Atendimento</span>
                <h4 className="text-white font-bold text-sm mt-0.5">Segunda a Sexta: 08:30 às 18:00</h4>
                <p className="text-slate-400 text-xs mt-0.5 font-light">Sábado: Com agendamento prévio de dinamômetro</p>
              </div>
            </div>

            {/* Direct Contact */}
            <div className="p-6 rounded-2xl bg-[#0d1017] border border-white/[0.08] flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#c5a059]/10 border border-[#c5a059]/30 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-[#c5a059]" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Contato Direto</span>
                <h4 className="text-white font-bold text-base mt-0.5">(41) 99657-3270</h4>
                <p className="text-slate-400 text-xs mt-0.5 font-light">Atendimento técnico para dúvidas, projetos e agendamentos</p>
              </div>
            </div>

            {/* Routing Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#0d1017] hover:bg-[#141824] border border-white/[0.1] hover:border-[#c5a059] text-white font-semibold text-xs py-3 px-4 rounded-xl transition"
              >
                <Navigation className="w-4 h-4 text-[#c5a059]" />
                Abrir no Google Maps
              </a>

              <a
                href={wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#0d1017] hover:bg-[#141824] border border-white/[0.1] hover:border-[#c5a059] text-slate-300 hover:text-white font-semibold text-xs py-3 px-4 rounded-xl transition"
              >
                <ExternalLink className="w-4 h-4 text-slate-400" />
                Navegar via Waze
              </a>
            </div>

          </div>

          {/* Interactive Live Google Maps (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl relative bg-[#0d1017]">
              
              {/* Map Top Bar */}
              <div className="px-5 py-3 border-b border-white/[0.08] bg-[#090b10] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#c5a059]"></span>
                  <span className="text-xs font-mono text-white font-semibold uppercase tracking-wider">
                    Mapa de Navegação • Venon Performance
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">Colombo - PR</span>
              </div>

              {/* Real Responsive Interactive Google Map iframe */}
              <div className="relative h-[380px] w-full">
                <iframe
                  title="Mapa da Venon Performance"
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'contrast(102%) brightness(95%)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
