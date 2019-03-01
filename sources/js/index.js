import './modules/nav';
import './modules/header';
import './modules/scrolltop';
import './modules/smoothscroll';

import '../../sources/scss/modules/_header.scss';

window.addEventListener('load', function () {

  document.querySelector('.menu').addEventListener('click', function () {
    document.body.classList.remove('menu-on');
  });
});


document.querySelector('.date-footer').innerHTML = new Date().getFullYear();