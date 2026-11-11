/*
 * Mapa de niveles compartido por todos los juegos de Desafío de Habilidad.
 *
 * Uso:
 *   const niveles = Niveles.crear({
 *     clave: 'miJuego',            // prefijo para guardar el progreso en el celular
 *     contenedor: elemento,        // donde se dibuja la grilla de niveles
 *     minimoVisible: 12,           // cuántos niveles mostrar como mínimo
 *     total: 15,                   // (opcional) si el juego tiene una cantidad fija de niveles
 *     maxAnterior: 1,              // (opcional) nivel desbloqueado guardado por versiones viejas
 *     alElegir: nivel => { ... },  // se llama al tocar un nivel desbloqueado
 *   });
 *   niveles.completar(nivel, estrellas)  // 1 a 3 estrellas; desbloquea el siguiente
 *   niveles.desbloqueado()               // nivel más alto disponible
 *   niveles.render()
 *   Niveles.estrellasHTML(n)             // ★★☆ para mostrar en pantallas de resultado
 */
(function () {
  'use strict';

  const CSS = `
  .niv-sec { margin-top: 18px; text-align: left; }
  .niv-sec .niv-tit { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px; }
  .niv-sec .niv-tit b { font-size: 13px; letter-spacing: 1.2px; text-transform: uppercase; color: #555; }
  .niv-sec .niv-tit span { font-size: 13px; color: #777; font-weight: 600; }
  .niv-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
  .niv-btn {
    border: 0; border-radius: 12px; padding: 8px 0 6px; background: #fff; color: #1c1c1c;
    box-shadow: 0 2px 0 rgba(0,0,0,.12), inset 0 0 0 1.5px rgba(0,0,0,.08);
    display: flex; flex-direction: column; align-items: center; gap: 2px; font-family: inherit;
  }
  .niv-btn .n { font-size: 18px; font-weight: 800; line-height: 1.1; }
  .niv-btn .s { font-size: 11px; letter-spacing: 1px; color: #f2a900; line-height: 1; }
  .niv-btn .s i { font-style: normal; color: #d6d0c2; }
  .niv-btn.actual { background: #ffe58a; box-shadow: 0 2px 0 rgba(0,0,0,.12), inset 0 0 0 2px #e0a800; }
  .niv-btn.bloq { background: #e9e4d8; color: #a9a294; box-shadow: none; }
  .niv-btn.bloq .s { color: #a9a294; }
  .niv-btn:not(.bloq):active { transform: scale(.95); }
  .niv-estrellas { font-size: 34px; letter-spacing: 4px; color: #f2a900; margin: 4px 0 2px; }
  .niv-estrellas i { font-style: normal; color: #d6d0c2; }
  `;

  function estrellasHTML(n, max = 3) {
    let s = '';
    for (let i = 0; i < max; i++) s += i < n ? '★' : '<i>★</i>';
    return s;
  }

  function crear(op) {
    if (!document.getElementById('niv-css')) {
      const st = document.createElement('style');
      st.id = 'niv-css'; st.textContent = CSS;
      document.head.appendChild(st);
    }
    const key = op.clave + '.niveles';
    const leer = () => {
      try { return JSON.parse(localStorage.getItem(key)) || null; } catch (_) { return null; }
    };
    let datos = leer() || { max: 1, estrellas: {} };
    if (op.maxAnterior && op.maxAnterior > datos.max) datos.max = op.maxAnterior;
    const guardar = () => { try { localStorage.setItem(key, JSON.stringify(datos)); } catch (_) {} };
    guardar();

    function totalEstrellas() { return Object.values(datos.estrellas).reduce((a, b) => a + b, 0); }

    function render() {
      const el = op.contenedor;
      if (!el) return;
      let visibles = Math.max(op.minimoVisible || 12, Math.ceil((datos.max + 2) / 4) * 4);
      if (op.total) visibles = op.total;
      let html = `<div class="niv-tit"><b>Niveles</b><span>★ ${totalEstrellas()}</span></div><div class="niv-grid">`;
      for (let n = 1; n <= visibles; n++) {
        const bloq = n > datos.max;
        const e = datos.estrellas[n] || 0;
        const cls = bloq ? 'bloq' : n === datos.max ? 'actual' : '';
        html += `<button class="niv-btn ${cls}" data-n="${n}" ${bloq ? 'disabled' : ''}>
          <span class="n">${bloq ? '🔒' : n}</span>
          <span class="s">${bloq ? '&nbsp;' : estrellasHTML(e)}</span></button>`;
      }
      html += '</div>';
      el.innerHTML = html;
      el.classList.add('niv-sec');
      el.querySelectorAll('.niv-btn:not(.bloq)').forEach(b =>
        b.addEventListener('click', () => op.alElegir && op.alElegir(+b.dataset.n)));
    }

    function completar(nivel, estrellas) {
      const antes = datos.estrellas[nivel] || 0;
      const mejora = estrellas > antes;
      if (mejora) datos.estrellas[nivel] = estrellas;
      if (nivel + 1 > datos.max) datos.max = op.total ? Math.min(op.total, nivel + 1) : nivel + 1;
      guardar();
      render();
      return { mejora, antes };
    }

    render();
    return { render, completar, desbloqueado: () => datos.max, estrellas: n => datos.estrellas[n] || 0 };
  }

  window.Niveles = { crear, estrellasHTML };
})();
