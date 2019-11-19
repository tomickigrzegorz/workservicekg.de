import '../scss/style.scss';
import SmoothScroll from 'smooth-scroll';
import classes from './helpers/constants';
import ActiveMenu from './modules/activeMenu';
import documentQuerySelector from './helpers/elements';
import MobileMenu from './modules/mobileMenu';
import ScrollTopButton from './modules/buttonScrolltop';
import StickyHeader from './modules/stickyHeader';

// add full year to footer
documentQuerySelector(classes.classDate).innerHTML = new Date().getFullYear();

// show menu and triggered on mobile devices
MobileMenu(classes);

// add class to click item
ActiveMenu(classes);

// add sticky class to header-container load
StickyHeader(classes);

// add scroll button to body
ScrollTopButton(classes);

// smoothscroll menu and back-to-top
const scroll = new SmoothScroll('.scroll a[href*="#"]', {
  speed: 800,
  offset: 50,
});

window.addEventListener('scroll', () => {
  // add sticky class to header-container scroll
  StickyHeader(classes);
});
