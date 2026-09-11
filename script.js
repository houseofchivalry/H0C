document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');

  if (menu && nav) {
    menu.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      menu.setAttribute('aria-expanded', String(open));
    });

    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) {
        nav.classList.remove('is-open');
        menu.setAttribute('aria-expanded', 'false');
      }
    });
  }

  const top = document.createElement('a');
  top.className = 'back-to-top';
  top.href = '#start';
  top.setAttribute('aria-label', 'Wróć na górę strony');
  top.title = 'Wróć na górę';
  top.innerHTML = '↑';
  document.body.appendChild(top);

  const updateTopButton = () => {
    top.classList.toggle('is-visible', window.scrollY > 420);
  };
  window.addEventListener('scroll', updateTopButton, { passive: true });
  updateTopButton();
});
