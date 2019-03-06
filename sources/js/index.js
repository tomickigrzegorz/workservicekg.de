import mobileMenu from './modules/mobileMenu';
import stickyHeader from './modules/stickyHeader';
import documentQuerySelector from './helpers/elements';
import scrollTopButton from './modules/buttonScrolltop';
import smoothscrollAnchorPolyfill from './modules/smoothscrollAnchorPolyfill';

import '../../sources/scss/style.scss';

const classes = {
  classScrollButton: 'scroll-button',
  classHiddenButton: 'scroll-button--hidden',
  classHeaderContainer: 'header-container',
  classSticky: 'sticky',
  classMobile: 'mobile',
  classMenuOn: 'menu-on',
  classMenu: 'menu',
  classDate: 'date-footer'
};

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