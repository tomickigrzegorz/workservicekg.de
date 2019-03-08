import documentQuerySelector from './helpers/elements';
import { classes } from './helpers/constants';

import MobileMenu from './modules/mobileMenu';
import StickyHeader from './modules/stickyHeader';
import ScrollTopButton from './modules/buttonScrolltop';
import SmoothscrollAnchorPolyfill from './modules/smoothscrollAnchorPolyfill';

import '../../sources/scss/style.scss';

window.addEventListener('load', () => {

  // smoothscroll menu and back-to-top
  SmoothscrollAnchorPolyfill.polyfill();

  // add full year to footer
  documentQuerySelector(classes.classDate).innerHTML = new Date().getFullYear();

  // show menu and triggered on mobile devices
  MobileMenu(classes);

  // add sticky class to header-container load
  StickyHeader(classes);

  window.addEventListener('scroll', () => {
    // add sticky class to header-container scroll
    StickyHeader(classes);
  });

  // add scroll button to body
  ScrollTopButton(classes);

});