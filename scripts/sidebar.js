'use strict';

(() => {
  let p = $('.sidebar-container'),
    t; // Global scope for 'sidebar-container' and 'sidebar'
  // const _b = (t, p) => { // Observable callback
  //     let b = p.find('.sidebar-overlay');
  //     if (window.screen.width <= 576 && p && t) {
  //       if (p.is('.sidebar-toggled')) {
  //         if (b.length == 0) {
  //           b = $(document.createElement('div'));
  //           b.on('click', e => {
  //             p.removeClass('sidebar-toggled');
  //           });
  //           p.append(b);
  //         }
  //         b.attr('class', t.is('[with-backdrop]') ? 'sidebar-backdrop sidebar-overlay' : 'sidebar-overlay');
  //       } else {
  //         b.remove();
  //       }
  //     }
  // };
  // const _mc = (mt, o) => {
  //   for (var m of mt) {
  //     if (m.type == 'attributes' && m.attributeName == 'class') {
  //       _b(t, p);
  //     }
  //   }
  // };
  // const _m = new MutationObserver(_mc);
  // for (const _p of p) _m.observe(_p, {
  //   attributes: true
  // }); // Observe change in 'sidebar-container' classList
  if (window.screen.width <= 576) $('.page-container').click(e => {
    if (p && p.is('.sidebar-toggled') && !$(e.target).is('[data-toggle="sidebar"]')) p.removeClass('sidebar-toggled');
  });
  $('[data-toggle="sidebar"]').click(e => {
    t = $(e.target).data('target') && $($(e.target).data('target')) || !!$(e.target).parent('.sidebar').length && $(e.target).parent('.sidebar') || !!$(e.target).next('.sidebar').length && $(e.target).next('.sidebar');
    if (!t.length) return;
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