import React, { useState } from 'react';
import { Gauge, Cpu, Flame, Wrench, ShieldCheck, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Services() {
  const [activeTab, setActiveTab] = useState('all');

  const services = [
    {
      id: 'stage1',
      category: 'remap',
      title: 'Remap Stage 1',
      badge: 'MAIS PROCURADO',
      badgeColor: 'bg-[#c5a059]/15 text-[#dfb76c] border-[#c5a059]/40',
      description: 'Otimização 100% eletrônica mantendo a mecânica original de fábrica. Ganhos expressivos de torque, potência e eliminação total do delay do acelerador.',
      features: [
        'Sem necessidade de alterações mecânicas',
        'Ganho de 20% a 35% em motores turbo',
        'Resposta instantânea no pedal de aceleração',
        'Eficiência térmica e consumo otimizado em cruzeiro',
        'Garantia de segurança nos parâmetros de fábrica'
      ],
      icon: Cpu,
      whatsappMsg: 'Olá Venon! Gostaria de um orçamento para Remap Stage 1 no meu carro.'
    },
    {
      id: 'stage2',
      category: 'remap',
      title: 'Remap Stage 2 & 3',
      badge: 'MÁXIMA PERFORMANCE',
      badgeColor: 'bg-[#dfb76c]/15 text-[#f3e5ab] border-[#dfb76c]/40',
      description: 'Para quem busca extrair o potencial extremo do conjunto mecânico. Calibração desenvolvida para carros com Downpipe, intake, intercooler ou turbina maior.',
      features: [
        'Calibração customizada passo a passo em dinamômetro',
        'Ganhos expressivos de até 60%+ de potência',
        'Mapeamento individual por cilindro e ponto',
        'Mapas dedicados para Etanol, Gasolina Podium ou Metanol',
        'Configuração de Pops & Bangs e Launch Control'
      ],
      icon: Flame,
      whatsappMsg: 'Olá Venon! Quero fazer um projeto Stage 2/3 no meu carro. Vamos orçar?'
    },
    {
      id: 'dinamometro',
      category: 'dyno',
      title: 'Dinamômetro Servitec',
      badge: 'EQUIPAMENTO OFICIAL',
      badgeColor: 'bg-slate-800 text-slate-200 border-slate-700',
      description: 'Aferição de potência e torque de padrão internacional. Conheça com precisão os números reais de roda e motor do seu veículo antes e depois da preparação.',
      features: [
        'Dinamômetro de rolos Servitec calibrado',
        'Gráficos oficiais de Curva de Potência (whp/cv) e Torque (kgfm)',
        'Análise de Mistura Ar/Combustível com Sonda Wideband 4.9',
        'Diagnóstico preciso de falhas sob carga real',
        'Laudo técnico impresso e digital'
      ],
      icon: Gauge,
      whatsappMsg: 'Olá! Gostaria de agendar uma passada no dinamômetro Servitec.'
    },
    {
      id: 'fueltech',
      category: 'race',
      title: 'Acerto FuelTech & Injepro',
      badge: 'PRO MOTORSPORT',
      badgeColor: 'bg-[#c5a059]/15 text-[#dfb76c] border-[#c5a059]/40',
      description: 'Instalação, confecção de chicote elétrico motorsport e acerto fino de injeções eletrônicas programáveis para rua, pista e arrancada.',
      features: [
        'Calibração completa FT450, FT550, FT600 e Injepro',
        'Marcha lenta estável e dirigibilidade progressiva',
        'Controle de tração por rotação, ponto e velocidade de roda',
        'Mapas dedicados com 2-Step, 3-Step e Burnout',
        'Configuração de malha fechada e proteções ativas'
      ],
      icon: Sparkles,
      whatsappMsg: 'Olá! Preciso de acerto/instalação de FuelTech/Injepro na Venon.'
    },
    {
      id: 'pops',
      category: 'remap',
      title: 'Pops & Bangs / Antilag',
      badge: 'ESTILO & SOM',
      badgeColor: 'bg-slate-800 text-slate-200 border-slate-700',
      description: 'Estalos característicos na desaceleração e trocas de marcha com calibragem segura. Ativação inteligente pelo modo Sport ou botão dedicado.',
      features: [
        'Efeito sonoro esportivo nas reduções (Burble)',
        'Configurável pelo botão do modo Sport',
        'Intensidade calibrada para segurança dos componentes',
        'Preservação térmica das válvulas de escape',
        'Perfeita harmonia com escapamento esportivo inox'
      ],
      icon: ShieldCheck,
      whatsappMsg: 'Olá! Quero adicionar Pops and Bangs no meu carro.'
    },
    {
      id: 'mecanica',
      category: 'mechanics',
      title: 'Preparação & Revisão',
      badge: 'OFICINA COMPLETA',
      badgeColor: 'bg-[#c5a059]/15 text-[#dfb76c] border-[#c5a059]/40',
      description: 'Engenharia e montagem de upgrades: Downpipes, velas especiais de Iridium, bobinas esportivas, bombas de alta pressão e manutenção de alto padrão.',
      features: [
        'Instalação de Downpipes e escapamentos em Inox 304',
        'Velas especiais de alto grau térmico e Bobinas R8',
        'Troca de fluidos sintéticos de alta performance (Motul)',
        'Revisão preventiva específica para veículos preparados',
        'Diagnóstico computadorizado de injeção direta e indireta'
      ],
      icon: Wrench,
      whatsappMsg: 'Olá! Gostaria de um orçamento para mecânica/preparação na oficina.'
    }
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(s => s.category === activeTab);

  return (
    <section id="servicos" className="py-24 relative bg-[#08090c] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#c5a059]/10 border border-[#c5a059]/30 px-4 py-1.5 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#dfb76c] uppercase">
              Soluções de Engenharia & Performance
            </span>
          </div>
          
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight mb-5">
            SERVIÇOS DE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dfb76c] to-[#c5a059]">ALTO PADRÃO</span>
          </h2>
          
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            Cada veículo possui uma assinatura única. Desenvolvemos soluções sob medida para extrair o máximo de torque e potência com rigor técnico e sofisticação.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'Todos os Serviços' },
              { id: 'remap', label: 'Remap ECU' },
              { id: 'dyno', label: 'Dinamômetro' },
              { id: 'race', label: 'FuelTech & Injepro' },
              { id: 'mechanics', label: 'Mecânica & Upgrades' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-lg transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-[#c5a059] text-[#08090c] shadow-luxury font-bold'
                    : 'bg-[#0e1119] text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="rounded-2xl bg-gradient-to-b from-[#0f121a] to-[#0a0c12] border border-white/[0.08] hover:border-[#c5a059]/40 p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-luxury group"
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#08090c] border border-white/[0.08] group-hover:border-[#c5a059]/40 flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5 text-[#dfb76c]" />
                    </div>
                    <span className={`text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-md border ${service.badgeColor}`}>
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display font-bold text-2xl text-white mb-3 group-hover:text-[#dfb76c] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2.5 mb-8 border-t border-white/[0.06] pt-5">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <a
                  href={`https://wa.me/5541996573270?text=${encodeURIComponent(service.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#090b10] hover:bg-[#c5a059] text-slate-200 hover:text-[#08090c] border border-white/[0.1] hover:border-[#c5a059] font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl transition-all duration-300"
                >
                  <span>Orçar via WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
