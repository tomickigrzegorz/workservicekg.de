import documentQuerySelector from '../helpers/elements';

export default function mobileMenu(classes) {
  const {
    classMenu,
    classMobile,
    classMenuOn
  } = classes;

  const mobileMenu = documentQuerySelector(classMobile);
  const bodyClass = document.body;

  mobileMenu.addEventListener('click', () => {
    documentQuerySelector(classMenuOn) ?
      bodyClass.classList.remove(classMenuOn) :
      bodyClass.classList.add(classMenuOn);
  });

  mmobileManuHide(classMenu, classMenuOn);
}

function mmobileManuHide(classMenu, classMenuOn) {
  documentQuerySelector(classMenu).addEventListener('click', () => document.body.classList.remove(classMenuOn));
}