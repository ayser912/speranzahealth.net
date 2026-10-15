/* Viewer protections: these deter casual copying; they cannot stop screenshots (no website can).
   The per-viewer watermark burned into every image is what makes a leaked copy traceable. */
(function () {
  var body = document.body;
  if (!body.classList.contains('secure')) return;

  // No context menu, dragging, selection or long-press saving on protected media.
  document.addEventListener('contextmenu', function (e) { if (e.target.closest('.protected, img, video')) e.preventDefault(); });
  document.addEventListener('dragstart', function (e) { if (e.target.closest('img, video')) e.preventDefault(); });

  // Hide everything when the page is not in front (app switcher, other window, some capture tools).
  function hide() { body.classList.add('veiled'); }
  function show() { body.classList.remove('veiled'); }
  document.addEventListener('visibilitychange', function () { document.hidden ? hide() : show(); });
  window.addEventListener('blur', hide);
  window.addEventListener('focus', show);
  window.addEventListener('beforeprint', hide);
  window.addEventListener('afterprint', show);

  // Press and hold to reveal (mouse, touch, pen). Space/Enter toggles for keyboard users.
  document.querySelectorAll('[data-hold]').forEach(function (el) {
    var on = function () { el.classList.add('revealed'); };
    var off = function () { el.classList.remove('revealed'); };
    el.addEventListener('pointerdown', function (e) {
      if (e.target.matches('input[type=range]')) { on(); return; }
      on();
    });
    ['pointerup', 'pointercancel', 'pointerleave'].forEach(function (t) { el.addEventListener(t, off); });
    el.addEventListener('keydown', function (e) {
      if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); el.classList.toggle('revealed'); }
    });
    el.addEventListener('blur', off);
    var v = el.querySelector('video');
    if (v) {
      // Videos stay visible while playing; covered again when paused.
      v.addEventListener('play', on);
      v.addEventListener('pause', off);
      v.addEventListener('ended', off);
    }
  });

  // Before/after slider.
  document.querySelectorAll('[data-compare]').forEach(function (box) {
    var r = box.querySelector('input[type=range]');
    var top = box.querySelector('.cmp-top');
    var set = function () { top.style.clipPath = 'inset(0 ' + (100 - r.value) + '% 0 0)'; };
    r.addEventListener('input', set);
    set();
  });

  // Session ends after 30 minutes: return to the start page.
  setTimeout(function () { location.href = '/'; }, 30 * 60 * 1000 + 5000);
})();
