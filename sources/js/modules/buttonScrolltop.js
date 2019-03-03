function createButton() {
  let button = document.createElement('a');
  button.classList.add('scroll-button');
  button.classList.add('scroll-button--hidden');
  button.setAttribute('href', '#top');

  document.body.appendChild(button);
}

function scrollTop() {
  return document.documentElement.scrollTop || document.body.scrollTop;
}

window.addEventListener('load', function() {
  createButton();
  scrollTop();

  window.addEventListener('scroll', function() {
    let element = document.querySelector('.scroll-button');
    scrollTop() > 200
      ? element.classList.remove('scroll-button--hidden')
      : element.classList.add('scroll-button--hidden');
  });
});
