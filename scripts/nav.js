// nav.js controls opened/closed states of mobile navigation

function initNav() {
  const nav = document.querySelector('nav'),
    toggle = document.querySelector('.nav-toggle');

  let active = false;

  function closeMenu () {
    nav.classList.remove('nav--active');
    toggle.innerHTML = 'menu';
    active = false;
  }

  toggle.addEventListener('click', () => {
    // closed state
    if (active) {
      closeMenu();
    }
    // open state
    else {
      toggle.innerHTML = 'close menu';
      nav.classList.add('nav--active');
      active = true;
    }
  });
}