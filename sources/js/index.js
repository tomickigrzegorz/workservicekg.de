import './modules/mobileMenu';
import './modules/headerMenu';
import './modules/buttonScrolltop';
import './modules/smoothScroll';

import '../../sources/scss/style.scss';

window.addEventListener('load', function () {
  document.querySelector('.menu').addEventListener('click', function () {
    document.body.classList.remove('menu-on');
  });
});

// add full year to footer
document.querySelector('.date-footer').innerHTML = new Date().getFullYear();