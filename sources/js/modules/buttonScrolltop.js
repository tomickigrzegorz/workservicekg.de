import documentQuerySelector from '../helpers/elements';

const ScrollTopButton = (classes) => {
  const { classScrollButton, classHiddenButton } = classes;

  ScrollTopButtonCreare(classScrollButton, classHiddenButton);

  window.addEventListener('scroll', () => {
    const scrollbutton = documentQuerySelector(classScrollButton);
    const scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
    (scrolltop > 200) ?
      scrollbutton.classList.remove(classHiddenButton) :
      scrollbutton.classList.add(classHiddenButton);
  });

};

const ScrollTopButtonCreare = (buttonName, hiddenName) => {
  const button = document.createElement('a');
  button.classList.add(buttonName, hiddenName);
  button.setAttribute('href', '#top');
  document.body.appendChild(button);
};

export default ScrollTopButton;