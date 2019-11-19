import documentQuerySelector from '../helpers/elements';

const MobileManuHide = (classMenu, classMenuOn) => {
  documentQuerySelector(classMenu).addEventListener('click', () =>
    document.body.classList.remove(classMenuOn)
  );
};

const MobileMenu = ({ classMenu, classMobile, classMenuOn }) => {
  const mobileMenu = documentQuerySelector(classMobile);
  const bodyClass = document.body;

  mobileMenu.addEventListener('click', () => {
    if (documentQuerySelector(classMenuOn)) {
      bodyClass.classList.remove(classMenuOn);
    } else {
      bodyClass.classList.add(classMenuOn);
    }
  });

  MobileManuHide(classMenu, classMenuOn);
};

export default MobileMenu;
