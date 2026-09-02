// Venon Performance - Core JavaScript Engine
document.addEventListener('DOMContentLoaded', () => {
  initSim();
  initFaq();
  initNav();
});

const DB = {
  '1.0-tsi': {
    name: 'VW 1.0 TSI EA211 (Polo, Virtus, Nivus, T-Cross, Up!)',
    stockHp: 128,
    stockTq: 20.4,
    stages: {
      'stage1': { name: 'Stage 1 (Software Venon)', hpGain: 25, tqGain: 5.5, desc: 'Calibra\u00e7\u00e3o individual via OBD mantendo 100% dos componentes originais. Resposta instant\u00e2nea de acelerador e ganho linear de torque.' },
      'stage2': { name: 'Stage 2 (Downpipe + Filtro + Remap)', hpGain: 38, tqGain: 7.6, desc: 'Downpipe em inox 304 com menor reten\u00e7\u00e3o t\u00e9rmica e filtro esportivo. Mapa calibrado no dinam\u00f4metro Servitec.' },
      'stage3': { name: 'Stage 3 (Turbo Upgrade + Intercooler)', hpGain: 65, tqGain: 10.5, desc: 'Rotor de compressor maior, intercooler dimensionado e mapa dedicado para extrair a m\u00e1xima efici\u00eancia volum\u00e9trica.' }
    }
  },
  '1.4-tsi': {
    name: 'VW/Audi 1.4 TSI 250 (Jetta, Taos, T-Cross Highline, A3)',
    stockHp: 150,
    stockTq: 25.5,
    stages: {
      'stage1': { name: 'Stage 1 (Software Venon)', hpGain: 32, tqGain: 6.5, desc: 'Otimiza\u00e7\u00e3o precisa de avan\u00e7o de igni\u00e7\u00e3o e press\u00e3o de turbo. Ultrapassagens r\u00e1pidas com total seguran\u00e7a mec\u00e2nica.' },
      'stage2': { name: 'Stage 2 (Downpipe + Intake + Remap)', hpGain: 48, tqGain: 9.5, desc: 'Fluxo livre de escape e intake esportivo com afina\u00e7\u00e3o precisa no dinam\u00f4metro Servitec oficial.' },
      'stage3': { name: 'Stage 3 (Big Turbo Custom)', hpGain: 85, tqGain: 13.0, desc: 'Turbina de alto fluxo, pressuriza\u00e7\u00e3o especial e acerto de alta performance com ampla faixa de torque.' }
    }
  },
  '2.0-tsi': {
    name: 'VW/Audi 2.0 TSI EA888 (Golf GTI, Jetta GLI, Audi S3)',
    stockHp: 230,
    stockTq: 35.7,
    stages: {
      'stage1': { name: 'Stage 1 (Software Venon)', hpGain: 65, tqGain: 10.0, desc: 'Ganho expressivo de +65 cv mantendo todo o conjunto mec\u00e2nico original intacto. Curva de torque linear e forte.' },
      'stage2': { name: 'Stage 2 (Downpipe + Intake + Remap ECU/TCU)', hpGain: 110, tqGain: 15.0, desc: 'Downpipe inox 304, intake esportivo e calibra\u00e7\u00e3o combinada de motor e c\u00e2mbio DSG com trocas ultrarr\u00e1pidas.' },
      'stage3': { name: 'Stage 3 (Turbo IS38 / H\u00edbrida / Forjado)', hpGain: 190, tqGain: 22.5, desc: 'Upgrade de turbo de grande porte, bicos e bombas auxiliares e mapa de competi\u00e7\u00e3o com mais de 420 cv na roda.' }
    }
  },
  'bmw-6cc': {
    name: 'BMW 6 Cilindros Turbo (335i, 340i, M140i, M2 / B58 / N55)',
    stockHp: 340,
    stockTq: 51.0,
    stages: {
      'stage1': { name: 'Stage 1 (Software Venon)', hpGain: 70, tqGain: 11.0, desc: 'Eleva\u00e7\u00e3o substancial de pot\u00eancia e torque sem altera\u00e7\u00f5es f\u00edsicas. Resposta brutal de acelera\u00e7\u00e3o.' },
      'stage2': { name: 'Stage 2 (Downpipe + Intake + Remap)', hpGain: 120, tqGain: 17.5, desc: 'Fluxo livre de escape, intake esportivo e mapa agressivo com op\u00e7\u00f5es de estalos controlados.' },
      'stage3': { name: 'Stage 3 (Pure Turbo / WMI)', hpGain: 220, tqGain: 27.0, desc: 'Turbinas h\u00edbridas ou inje\u00e7\u00e3o de metanol com afina\u00e7\u00e3o milim\u00e9trica no dinam\u00f4metro (+560 cv).' }
    }
  },
  'projeto-forjado': {
    name: 'Projeto Forjado / Arrancada / Pista (FuelTech)',
    stockHp: 180,
    stockTq: 24.0,
    stages: {
      'stage1': { name: 'Chicote N\u00e1utico & Instala\u00e7\u00e3o', hpGain: 50, tqGain: 8.0, desc: 'Instala\u00e7\u00e3o profissional de inje\u00e7\u00e3o program\u00e1vel com chicote em malha n\u00e1utica antichamas e sensores calibrados.' },
      'stage2': { name: 'Acerto de Rua & Pista', hpGain: 150, tqGain: 20.0, desc: 'Calibra\u00e7\u00e3o do mapa 3D de inje\u00e7\u00e3o e ponto de igni\u00e7\u00e3o no Servitec, compensa\u00e7\u00f5es t\u00e9rmicas e controle de tra\u00e7\u00e3o.' },
      'stage3': { name: 'Monster Build (+596 wHP Real Venon)', hpGain: 416, tqGain: 38.37, desc: 'Prepara\u00e7\u00e3o extrema como o monstro aferido na Venon: 596,83 wHP e 62,37 Kgf.m de torque no dinam\u00f4metro Servitec!' }
    }
  }
};

function initSim() {
  const carEl = document.getElementById('sim-car');
  const stageEl = document.getElementById('sim-stage');
  const pPops = document.getElementById('chk-pops');
  const pHard = document.getElementById('chk-hard');
  const pLaunch = document.getElementById('chk-launch');
  const pShift = document.getElementById('chk-shift');

  const finalHpEl = document.getElementById('sim-final-hp');
  const gainHpEl = document.getElementById('sim-gain-hp');
  const finalTqEl = document.getElementById('sim-final-tq');
  const gainTqEl = document.getElementById('sim-gain-tq');
  const stockHpEl = document.getElementById('sim-stock-hp');
  const stockTqEl = document.getElementById('sim-stock-tq');
  const descEl = document.getElementById('sim-desc');
  const ctaBtn = document.getElementById('sim-cta');

  if (!carEl || !stageEl) return;

  function update() {
    const carKey = carEl.value;
    const stageKey = stageEl.value;
    const data = DB[carKey];
    if (!data) return;

    const st = data.stages[stageKey] || data.stages['stage1'];
    const totalHp = Math.round(data.stockHp + st.hpGain);
    const totalTq = +(data.stockTq + st.tqGain).toFixed(1);

    if (finalHpEl) finalHpEl.textContent = totalHp + ' cv';
    if (gainHpEl) gainHpEl.textContent = '+' + st.hpGain + ' cv';
    if (finalTqEl) finalTqEl.textContent = totalTq + ' kgfm';
    if (gainTqEl) gainTqEl.textContent = '+' + st.tqGain.toFixed(1) + ' kgfm';
    if (stockHpEl) stockHpEl.textContent = data.stockHp + ' cv';
    if (stockTqEl) stockTqEl.textContent = data.stockTq.toFixed(1) + ' kgfm';
    if (descEl) descEl.textContent = st.desc;

    const extras = [];
    if (pPops && pPops.checked) extras.push('Pops & Bangs');
    if (pHard && pHard.checked) extras.push('Hard Cut');
    if (pLaunch && pLaunch.checked) extras.push('Launch Control');
    if (pShift && pShift.checked) extras.push('Shift Assistant');

    let msg = `Ol\u00e1 Venon Performance! Estive no simulador do site e montei o seguinte setup:%0A%0A` +
      `?? *Ve\u00edculo:* ${data.name}%0A` +
      `? *N\u00edvel:* ${st.name}%0A` +
      `?? *Resultado Estimado:* ${totalHp} cv (+${st.hpGain} cv) e ${totalTq} kgfm (+${st.tqGain.toFixed(1)} kgfm)%0A`;

    if (extras.length > 0) {
      msg += `?? *Recursos extras:* ${extras.join(', ')}%0A`;
    }

    msg += `%0AGostaria de verificar disponibilidade para agendamento!`;

    if (ctaBtn) {
      ctaBtn.href = `https://wa.me/5541996573270?text=${msg}`;
    }
  }

  carEl.addEventListener('change', update);
  stageEl.addEventListener('change', update);
  if (pPops) pPops.addEventListener('change', update);
  if (pHard) pHard.addEventListener('change', update);
  if (pLaunch) pLaunch.addEventListener('change', update);
  if (pShift) pShift.addEventListener('change', update);

  update();
}

function initFaq() {
  const boxes = document.querySelectorAll('.accordion-box');
  boxes.forEach(b => {
    const trigger = b.querySelector('.accordion-head');
    if (!trigger) return;
    trigger.addEventListener('click', () => {
      const isOpen = b.classList.contains('active');
      boxes.forEach(other => other.classList.remove('active'));
      if (!isOpen) b.classList.add('active');
    });
  });
}

function initNav() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const drawer = document.getElementById('mobile-panel');
  const closeBtn = document.getElementById('drawer-close');
  const links = document.querySelectorAll('.mobile-link');

  if (!toggleBtn || !drawer) return;

  function toggle() {
    drawer.classList.toggle('open');
    document.body.style.overflow = drawer.classList.contains('open') ? 'hidden' : '';
  }

  toggleBtn.addEventListener('click', toggle);
  if (closeBtn) closeBtn.addEventListener('click', toggle);
  links.forEach(l => l.addEventListener('click', toggle));
}

function copyAddress() {
  const text = "Av. Santos Dumont, 1623 - Ro\u00e7a Grande, Colombo - PR, 83403-518";
  navigator.clipboard.writeText("Av. Santos Dumont, 1623 - Ro?a Grande, Colombo - PR, 83403-518").then(() => {
    const toast = document.getElementById('toast');
    if (toast) {
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2500);
    }
  });
}
window.copyAddress = copyAddress;
