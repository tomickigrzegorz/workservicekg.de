import documentQuerySelector from '../helpers/elements';

const MobileMenu = (classes) => {
  const { classMenu, classMobile, classMenuOn } = classes;

  const mobileMenu = documentQuerySelector(classMobile);
  const bodyClass = document.body;

  mobileMenu.addEventListener('click', () => {
    documentQuerySelector(classMenuOn) ?
      bodyClass.classList.remove(classMenuOn) :
      bodyClass.classList.add(classMenuOn);
  });

  MobileManuHide(classMenu, classMenuOn);
};

const MobileManuHide = (classMenu, classMenuOn) => {
  documentQuerySelector(classMenu).addEventListener('click', () => document.body.classList.remove(classMenuOn));
};

export default MobileMenu;