import documentQuerySelector from './helpers/elements';
import {
  classes
} from './helpers/constants';

import mobileMenu from './modules/mobileMenu';
import stickyHeader from './modules/stickyHeader';
import scrollTopButton from './modules/buttonScrolltop';
import smoothscrollAnchorPolyfill from './modules/smoothscrollAnchorPolyfill';

import '../../sources/scss/style.scss';

window.addEventListener('load', () => {

  // smoothscroll menu and back-to-top
  smoothscrollAnchorPolyfill.polyfill();

  // add full year to footer
  documentQuerySelector(classes.classDate).innerHTML = new Date().getFullYear();

  // show menu and triggered on mobile devices
  mobileMenu(classes);

  // add sticky class to header-container load
  stickyHeader(classes);

  window.addEventListener('scroll', () => {
    // add sticky class to header-container scroll
    stickyHeader(classes);
  });

  // add scroll button to body
  scrollTopButton(classes);

});