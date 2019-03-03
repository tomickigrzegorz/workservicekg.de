function showMenuMobile() {
  const mobileMenu = document.querySelector('.mobile');
  const bodyClass = document.body;
  mobileMenu.addEventListener('click', () => {
    document.querySelector('.menu-on')
      ? bodyClass.classList.remove('menu-on')
      : bodyClass.classList.add('menu-on');
  });
}

window.addEventListener('load', showMenuMobile());
