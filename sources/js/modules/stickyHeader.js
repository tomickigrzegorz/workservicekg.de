import documentQuerySelector from '../helpers/elements';

const StickyHeader = ({ classHeaderContainer, classSticky }) => {
  const headerContainer = documentQuerySelector(classHeaderContainer);
  const currentScrollY = window.pageYOffset;

  const heightTop =
    documentQuerySelector(classHeaderContainer).offsetHeight - 40;

  if (currentScrollY <= heightTop) {
    headerContainer.classList.remove(classSticky);
  } else {
    headerContainer.classList.add(classSticky);
  }
};

export default StickyHeader;
