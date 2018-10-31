'use strict';

(() => {
  $('[data-toggle="collapse"]').click(e => {
    const t = $($(e.target).data('target'));
    t.parent('.sidebar-container').toggleClass('sidebar-toggled');
  });
})();