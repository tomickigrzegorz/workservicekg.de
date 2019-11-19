import documentQuerySelector from '../helpers/elements';

const ScrollTopButtonCreare = (buttonName, hiddenName, classScroll) => {
  const button = document.createElement('div');
  const template = `
    <div class="${classScroll}">
      <a href="#top" class="${buttonName} ${hiddenName}"></a>
    </div>
  `;
  button.innerHTML = template;
  document.body.appendChild(button);
};

const ScrollTopButton = ({
  classScrollButton,
  classHiddenButton,
  classScroll,
}) => {
  ScrollTopButtonCreare(classScrollButton, classHiddenButton, classScroll);

  window.addEventListener('scroll', () => {
    const scrollbutton = documentQuerySelector(classScrollButton);
    const scrolltop =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (scrolltop > 200) {
      scrollbutton.classList.remove(classHiddenButton);
    } else {
      scrollbutton.classList.add(classHiddenButton);
    }
  });
};

export default ScrollTopButton;
