import documentQuerySelector from '../helpers/elements';

const StickyHeader = (classes) => {
  const { classHeaderContainer, classSticky } = classes;

  const headerContainer = documentQuerySelector(classHeaderContainer);
  const currentScrollY = window.pageYOffset;
  (currentScrollY <= 120) ?
    headerContainer.classList.remove(classSticky) : headerContainer.classList.add(classSticky);
};

export default StickyHeader;