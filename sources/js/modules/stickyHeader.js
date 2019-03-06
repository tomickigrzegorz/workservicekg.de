import documentQuerySelector from '../helpers/elements';

export default function stickyHeader(classes) {
  const {
    classHeaderContainer,
    classSticky
  } = classes;

  const headerContainer = documentQuerySelector(classHeaderContainer);
  const currentScrollY = window.pageYOffset;
  (currentScrollY <= 120) ?
  headerContainer.classList.remove(classSticky): headerContainer.classList.add(classSticky);
}