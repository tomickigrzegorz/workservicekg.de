import '../../sources/scss/style.scss';
import { classes } from './helpers/constants';
import documentQuerySelector from './helpers/elements';
import ActiveMenu from './modules/activeMenu';
import ScrollTopButton from './modules/buttonScrolltop';
import MobileMenu from './modules/mobileMenu';
import SmoothscrollAnchorPolyfill from './modules/smoothscrollAnchorPolyfill';
import StickyHeader from './modules/stickyHeader';


window.addEventListener('load', () => {

  // smoothscroll menu and back-to-top
  SmoothscrollAnchorPolyfill.polyfill();

  // add full year to footer
  documentQuerySelector(classes.classDate).innerHTML = new Date().getFullYear();

  // show menu and triggered on mobile devices
  MobileMenu(classes);

  // add class to click item
  ActiveMenu(classes);

  // add sticky class to header-container load
  StickyHeader(classes);

  window.addEventListener('scroll', () => {
    // add sticky class to header-container scroll
    StickyHeader(classes);
  });

  // add scroll button to body
  ScrollTopButton(classes);

});