import SmoothScroll from 'smooth-scroll';
import '../../sources/scss/style.scss';
import { classes } from './helpers/constants';
import { documentQuerySelector } from './helpers/elements';
import ActiveMenu from './modules/activeMenu';
import ScrollTopButton from './modules/buttonScrolltop';
import MobileMenu from './modules/mobileMenu';
import StickyHeader from './modules/stickyHeader';


window.addEventListener('load', () => {

  // smoothscroll menu and back-to-top
  const scroll = new SmoothScroll('.scroll a[href*="#"]', {
    speed: 800
  });
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