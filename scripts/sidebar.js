'use strict';

(() => {
  let p = $('.sidebar-container'),
    t; // Global scope for 'sidebar-container' and 'sidebar'
  const _b = (t, p) => { // Observable callback
    if (window.screen.width <= 576 && p && t) {
      const b = document.createElement('div');
      b.className = t.is('[with-backdrop]') ? 'sidebar-backdrop sidebar-overlay' : 'sidebar-overlay';
      console.log('Checking backdrop: ', b, p.is('.sidebar-toggled'));
      p.is('.sidebar-toggled') ? p.append(b) : b.parentNode.removeChild(b);
      b.addEventListener('click', e => {
        p.removeClass('sidebar-toggled');
      });
    }
  };
  const _mc = (mt, o) => {
    for (var m of mt) {
      if (m.type == 'attributes' && m.attributeName == 'class') {
        _b(t, p);
      }
    }
  };
  const _m = new MutationObserver(_mc);
  for (const _p of p) _m.observe(_p, {
    attributes: true
  }); // Observe change in 'sidebar-container' classList
  $('[data-toggle="sidebar"]').click(e => {
    // t = $($(e.target).data('target')) || $(e.target).parent('.sidebar') || $(e.target).next('.sidebar') || $('.sidebar');
    t = $('.sidebar');
    p = t.parent('.sidebar-container');
    p.toggleClass('sidebar-toggled');
  }); // Listen for click event on sidebar toggler button
  document.addEventListener('keyup', e => { // Close sidebar on ESC key pressed
    if (window.screen.width <= 576 && p && p.is('.sidebar-toggled') && e.keyCode === 27) {
      e.preventDefault();
      // Process event...
      p.removeClass('sidebar-toggled');
    }
  }, false);
})();