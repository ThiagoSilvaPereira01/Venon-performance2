import React, { useState } from 'react';
import { Zap, Send, Check, Sparkles, Gauge, Car, Settings, Phone, Calendar, ArrowRight } from 'lucide-react';

export default function CalculatorWizard() {
  const [formData, setFormData] = useState({
    service: 'Remap Stage 1',
    brand: '',
    model: '',
    year: '',
    engine: '2.0 TSI / Turbo',
    fuel: 'Gasolina / Flex',
    currentMods: 'Original',
    addOns: ['Eliminação de Delay'],
    clientName: '',
    clientPhone: '',
    preferredDate: '',
  });

  const [step, setStep] = useState(1);

  // Common Popular Brands
  const popularBrands = ['Volkswagen', 'Audi', 'BMW', 'Chevrolet', 'Fiat', 'Ford', 'Honda', 'Toyota', 'Mercedes-Benz', 'Outra'];

  // Add-on options
  const addOnOptions = [
    'Pops & Bangs (Estalos no escape)',
    'Launch Control (Controle de largada)',
    'Hard Cut (Corte de giro rápido)',
    'Passada em Dinamômetro Servitec',
    'Eliminação de Limitador de Velocidade',
  ];

  const handleAddOnToggle = (addon) => {
    if (formData.addOns.includes(addon)) {
      setFormData({
        ...formData,
        addOns: formData.addOns.filter((item) => item !== addon),
      });
    } else {
      setFormData({
        ...formData,
        addOns: [...formData.addOns, addon],
      });
    }
  };

  // Calculate estimated gain representation
  const getEstimatedGain = () => {
    if (formData.service.includes('Stage 2')) {
      return { hp: '+45 a +90 CV', torque: '+8 a +14 kgfm', badge: 'Máxima Performance' };
    }
    if (formData.service.includes('Stage 1')) {
      return { hp: '+25 a +50 CV', torque: '+5 a +9 kgfm', badge: '100% Mecânica Original' };
    }
    if (formData.service.includes('FuelTech')) {
      return { hp: 'Conforme Projeto', torque: 'Curva Custom', badge: 'Gerenciamento Total' };
    }
    return { hp: 'Aferição Real', torque: 'Curva Completa', badge: 'Laudo Servitec' };
  };

  const estimated = getEstimatedGain();

  // Generate WhatsApp text
  const generateWhatsAppUrl = () => {
    const text = `🏁 *ORÇAMENTO / AGENDAMENTO - VENON PERFORMANCE* 🏁
-----------------------------------------
👤 *Nome:* ${formData.clientName || 'Cliente'}
📞 *Telefone:* ${formData.clientPhone || 'Não informado'}
🚗 *Veículo:* ${formData.brand || 'Não informado'} ${formData.model || ''}
📅 *Ano/Motor:* ${formData.year || '-'} • ${formData.engine}
⛽ *Combustível:* ${formData.fuel}
⚙️ *Configuração Atual:* ${formData.currentMods}

🎯 *Serviço Escolhido:* ${formData.service}
🔥 *Opcionais / Extras:* ${formData.addOns.length > 0 ? formData.addOns.join(', ') : 'Nenhum'}
📆 *Preferência de Data:* ${formData.preferredDate || 'A combinar'}
-----------------------------------------
Gostaria de confirmar os valores e a disponibilidade de horário na oficina!`;

    return `https://wa.me/5541996573270?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="orcamento" className="py-24 relative bg-[#090b10] border-t border-white/[0.06] overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#c5a059]/[0.05] rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#c5a059]/10 border border-[#c5a059]/30 px-4 py-1.5 rounded-full mb-3">
            <Zap className="w-3.5 h-3.5 text-[#c5a059] fill-[#c5a059]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#dfb76c] uppercase">
              Simulador & Cotação
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
            CONFIGURE SEU <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dfb76c] to-[#c5a059]">PROJETO</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light">
            Selecione as especificações do seu carro e receba uma proposta personalizada diretamente com nossos preparadores.
          </p>
        </div>

        {/* Wizard Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Form (8 Cols) */}
          <div className="lg:col-span-8 bg-[#0d1017] border border-white/[0.08] rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-md">
            
            {/* Step Navigation Indicator */}
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/[0.06]">
              {[
                { num: 1, title: 'Serviço' },
                { num: 2, title: 'Veículo' },
                { num: 3, title: 'Upgrades & Extras' },
                { num: 4, title: 'Finalizar' },
              ].map((s) => (
                <div
                  key={s.num}
                  onClick={() => setStep(s.num)}
                  className={`flex items-center gap-2 cursor-pointer transition ${
                    step === s.num
                      ? 'text-[#dfb76c] font-bold'
                      : step > s.num
                      ? 'text-emerald-400'
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
                      step === s.num
                        ? 'bg-[#c5a059] text-[#08090c]'
                        : step > s.num
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                        : 'bg-[#08090c] border border-slate-800 text-slate-400'
                    }`}
                  >
                    {step > s.num ? <Check className="w-3.5 h-3.5" /> : s.num}
                  </span>
                  <span className="hidden sm:inline text-xs tracking-wider uppercase font-mono">
                    {s.title}
                  </span>
                </div>
              ))}
            </div>

            {/* STEP 1: Escolha do Serviço */}
            {step === 1 && (
              <div className="space-y-6">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Settings className="w-4 h-4 text-[#c5a059]" />
                  Qual serviço você deseja realizar?
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Remap Stage 1', desc: 'Sem alterações mecânicas. Ganho seguro e imediato.' },
                    { title: 'Remap Stage 2 & 3', desc: 'Para carros com Downpipe, intake ou turbina maior.' },
                    { title: 'Dinamômetro Servitec', desc: 'Passadas de medição com laudo oficial de potência.' },
                    { title: 'Acerto FuelTech / Injepro', desc: 'Calibração completa de injeção programável.' },
                    { title: 'Manutenção & Upgrades', desc: 'Velas, bobinas, escape, bicos e revisão mecânica.' },
                    { title: 'Consultoria Personalizada', desc: 'Converse diretamente com o preparador responsável.' },
                  ].map((srv) => (
                    <div
                      key={srv.title}
                      onClick={() => setFormData({ ...formData, service: srv.title })}
                      className={`p-4 rounded-xl border cursor-pointer transition-all ${
                        formData.service === srv.title
                          ? 'bg-[#c5a059]/10 border-[#c5a059] shadow-sm'
                          : 'bg-[#090b10] border-white/[0.06] hover:border-slate-700 hover:bg-slate-900/60'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-white text-sm">{srv.title}</span>
                        {formData.service === srv.title && (
                          <span className="w-2 h-2 rounded-full bg-[#c5a059]"></span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 font-light">{srv.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={() => setStep(2)}
                    className="inline-flex items-center gap-2 bg-[#c5a059] hover:bg-[#dfb76c] text-[#08090c] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition"
                  >
                    Próximo: Dados do Carro <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Dados do Veículo */}
            {step === 2 && (
              <div className="space-y-6">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Car className="w-4 h-4 text-[#c5a059]" />
                  Qual é o seu veículo?
                </h3>

                {/* Popular Brand Pills */}
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-2 uppercase">
                    Selecione ou digite a montadora:
                  </label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {popularBrands.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setFormData({ ...formData, brand: b })}
                        className={`text-xs px-3 py-1.5 rounded-lg border transition ${
                          formData.brand === b
                            ? 'bg-[#c5a059] text-[#08090c] border-[#c5a059] font-semibold'
                            : 'bg-[#090b10] text-slate-300 border-white/[0.08] hover:border-slate-700'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                  <input
                    type="text"
                    placeholder="Outra marca ou confirme a montadora..."
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    className="w-full bg-[#08090c] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#c5a059]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">
                      Modelo e Versão (ex: Golf GTI, Jetta, Civic, BMW 320i)
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Jetta 2.0 TSI Highline"
                      value={formData.model}
                      onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                      className="w-full bg-[#08090c] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#c5a059]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">
                      Ano de Fabricação
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: 2018 / 2019"
                      value={formData.year}
                      onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                      className="w-full bg-[#08090c] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#c5a059]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">
                      Motorização
                    </label>
                    <select
                      value={formData.engine}
                      onChange={(e) => setFormData({ ...formData, engine: e.target.value })}
                      className="w-full bg-[#08090c] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#c5a059]"
                    >
                      <option value="1.0 / 1.4 / 1.6 Turbo">1.0 / 1.4 / 1.6 Turbo (TSI, THP, etc)</option>
                      <option value="2.0 TSI / Turbo">2.0 Turbo (EA888, B48, N20, etc)</option>
                      <option value="6 Cilindros / V6">6 Cilindros / V6 (B58, EA839, VR6)</option>
                      <option value="V8 Turbo ou Aspirado">V8 Turbo ou Aspirado</option>
                      <option value="Motor Aspirado (1.6 a 2.5)">Motor Aspirado (1.6 a 2.5)</option>
                      <option value="AP Turbo Forjado">AP Turbo Forjado</option>
                      <option value="Diesel Turbo">Diesel Turbo (Amarok, Hilux, Ranger, etc)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">
                      Combustível Principal
                    </label>
                    <select
                      value={formData.fuel}
                      onChange={(e) => setFormData({ ...formData, fuel: e.target.value })}
                      className="w-full bg-[#08090c] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#c5a059]"
                    >
                      <option value="Gasolina / Flex">Gasolina Comum / Flex</option>
                      <option value="Gasolina Premium / Podium">Gasolina Podium / Octapro</option>
                      <option value="100% Etanol">100% Etanol (E100)</option>
                      <option value="Diesel">Diesel S10</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4 flex justify-between">
                  <button
                    onClick={() => setStep(1)}
                    className="text-slate-400 hover:text-white text-xs uppercase font-mono px-4 py-2"
                  >
                    ← Voltar
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="inline-flex items-center gap-2 bg-[#c5a059] hover:bg-[#dfb76c] text-[#08090c] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition"
                  >
                    Próximo: Extras & Upgrades <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Upgrades & Add-ons */}
            {step === 3 && (
              <div className="space-y-6">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#c5a059]" />
                  Configuração atual e opcionais desejados
                </h3>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-2 uppercase">
                    O carro possui modificações mecânicas atualmente?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { val: '100% Original', desc: 'Sem modificações' },
                      { val: 'Downpipe / Filtro', desc: 'Upgrades leves' },
                      { val: 'Projeto Completo Forjado', desc: 'Turbina maior / Bicos' },
                    ].map((mod) => (
                      <div
                        key={mod.val}
                        onClick={() => setFormData({ ...formData, currentMods: mod.val })}
                        className={`p-3.5 rounded-xl border cursor-pointer text-center transition ${
                          formData.currentMods === mod.val
                            ? 'bg-[#c5a059]/10 border-[#c5a059] text-white'
                            : 'bg-[#08090c] border-white/[0.08] text-slate-400 hover:text-white'
                        }`}
                      >
                        <div className="font-bold text-xs">{mod.val}</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">{mod.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-2 uppercase">
                    Recursos Adicionais (Marque os que deseja):
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {addOnOptions.map((addon) => {
                      const isChecked = formData.addOns.includes(addon);
                      return (
                        <div
                          key={addon}
                          onClick={() => handleAddOnToggle(addon)}
                          className={`p-3 rounded-xl border cursor-pointer flex items-center justify-between text-xs transition ${
                            isChecked
                              ? 'bg-[#08090c] border-[#c5a059] text-white font-medium'
                              : 'bg-[#08090c]/60 border-white/[0.06] text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          <span>{addon}</span>
                          <span
                            className={`w-4 h-4 rounded flex items-center justify-center border ${
                              isChecked
                                ? 'bg-[#c5a059] border-[#c5a059] text-[#08090c]'
                                : 'border-slate-700 bg-[#08090c]'
                            }`}
                          >
                            {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-4 flex justify-between">
                  <button
                    onClick={() => setStep(2)}
                    className="text-slate-400 hover:text-white text-xs uppercase font-mono px-4 py-2"
                  >
                    ← Voltar
                  </button>
                  <button
                    onClick={() => setStep(4)}
                    className="inline-flex items-center gap-2 bg-[#c5a059] hover:bg-[#dfb76c] text-[#08090c] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition"
                  >
                    Próximo: Finalizar Orçamento <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: Finalizar e Enviar */}
            {step === 4 && (
              <div className="space-y-6">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Send className="w-4 h-4 text-[#c5a059]" />
                  Seus dados para agendamento
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">
                      Seu Nome
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Thiago Silva"
                      value={formData.clientName}
                      onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                      className="w-full bg-[#08090c] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#c5a059]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">
                      Seu WhatsApp / Telefone
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: (41) 99999-9999"
                      value={formData.clientPhone}
                      onChange={(e) => setFormData({ ...formData, clientPhone: e.target.value })}
                      className="w-full bg-[#08090c] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#c5a059]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">
                    Data ou Dia de Preferência
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Esta semana, próxima segunda-feira, ou aos sábados"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full bg-[#08090c] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#c5a059]"
                  />
                </div>

                {/* Final WhatsApp Call To Action Button */}
                <div className="p-5 rounded-xl bg-[#090b10] border border-[#c5a059]/30 mt-6">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <div className="text-[#dfb76c] font-bold text-sm flex items-center gap-1.5">
                        <Check className="w-4 h-4" /> Proposta Pronta para Envio!
                      </div>
                      <p className="text-xs text-slate-400 mt-1 font-light">
                        Ao clicar abaixo, uma mensagem formatada com todos os dados será aberta diretamente no WhatsApp da Venon Performance.
                      </p>
                    </div>

                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#c5a059] hover:bg-[#dfb76c] text-[#08090c] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-luxury transition whitespace-nowrap"
                    >
                      <Phone className="w-4 h-4" />
                      Enviar para WhatsApp
                    </a>
                  </div>
                </div>

                <div className="pt-2 flex justify-start">
                  <button
                    onClick={() => setStep(3)}
                    className="text-slate-400 hover:text-white text-xs uppercase font-mono px-4 py-2"
                  >
                    ← Voltar e ajustar detalhes
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* Live Telemetry Summary Sidebar (4 Cols) */}
          <div className="lg:col-span-4 bg-gradient-to-b from-[#0f121a] to-[#0a0c12] border border-white/[0.08] rounded-2xl p-6 shadow-2xl relative">
            <div className="absolute top-4 right-4">
              <span className="w-2 h-2 rounded-full bg-[#c5a059] inline-block"></span>
            </div>

            <h4 className="font-display font-bold text-white text-lg mb-4 flex items-center gap-2">
              <Gauge className="w-4 h-4 text-[#c5a059]" />
              Estimativa do Projeto
            </h4>

            {/* Estimated Stat Numbers */}
            <div className="space-y-3 mb-6">
              <div className="bg-[#08090c] p-3.5 rounded-xl border border-white/[0.06]">
                <span className="text-[11px] font-mono text-slate-400 uppercase">Ganho Estimado de Potência</span>
                <div className="text-2xl font-bold font-display text-[#dfb76c] mt-0.5">
                  {estimated.hp}
                </div>
              </div>

              <div className="bg-[#08090c] p-3.5 rounded-xl border border-white/[0.06]">
                <span className="text-[11px] font-mono text-slate-400 uppercase">Ganho Estimado de Torque</span>
                <div className="text-2xl font-bold font-display text-white mt-0.5">
                  {estimated.torque}
                </div>
              </div>
            </div>

            {/* Live Spec Summary */}
            <div className="border-t border-white/[0.06] pt-4 space-y-2.5 text-xs">
              <div className="flex justify-between text-slate-400">
                <span>Serviço:</span>
                <span className="text-white font-medium">{formData.service}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Veículo:</span>
                <span className="text-white font-medium truncate max-w-[160px] text-right">
                  {formData.brand || 'Não informado'} {formData.model}
                </span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Motor:</span>
                <span className="text-white font-medium truncate max-w-[160px] text-right">{formData.engine}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Configuração:</span>
                <span className="text-[#dfb76c] font-medium">{formData.currentMods}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Opcionais:</span>
                <span className="text-white font-medium text-right max-w-[160px] truncate">
                  {formData.addOns.length > 0 ? formData.addOns.join(', ') : 'Nenhum'}
                </span>
              </div>
            </div>

            {/* Direct Send Link */}
            <div className="mt-6 pt-4 border-t border-white/[0.06]">
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#c5a059] hover:bg-[#dfb76c] text-[#08090c] font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-luxury transition"
              >
                <Send className="w-3.5 h-3.5" />
                Pedir Cotação Agora
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
