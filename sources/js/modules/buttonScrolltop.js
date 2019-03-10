import { documentQuerySelector } from '../helpers/elements';

const ScrollTopButton = (classes) => {
  const { classScrollButton, classHiddenButton, classScroll } = classes;

  ScrollTopButtonCreare(classScrollButton, classHiddenButton, classScroll);

  window.addEventListener('scroll', () => {
    const scrollbutton = documentQuerySelector(classScrollButton);
    const scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
    (scrolltop > 200) ?
      scrollbutton.classList.remove(classHiddenButton) :
      scrollbutton.classList.add(classHiddenButton);
  });

};

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

export default ScrollTopButton;