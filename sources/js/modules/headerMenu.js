var lastKnownScrollY = 0;
var currentScrollY = 0;
var ticking = false;
var idOfHeader = '.header-container';
var eleHeader = null;

const classes = {
  pinned: 'header-pin',
  unpinned: 'header-unpin',
  top: 'header-top'
};

function onScroll() {
  currentScrollY = window.pageYOffset;
  if (currentScrollY <= 120) {
    eleHeader.classList.remove(classes.pinned);
    eleHeader.classList.add(classes.top);
  } else {
    eleHeader.classList.remove(classes.top);
  }
  requestTick();
}

function requestTick() {
  if (!ticking) {
    requestAnimationFrame(update);
  }
  ticking = true;
}

function update() {
  if (currentScrollY < lastKnownScrollY) {
    pin();
  } else if (currentScrollY > lastKnownScrollY) {
    unpin();
  }
  lastKnownScrollY = currentScrollY;
  ticking = false;
}

function pin() {
  if (eleHeader.classList.contains(classes.unpinned)) {
    eleHeader.classList.remove(classes.unpinned);
    eleHeader.classList.add(classes.pinned);
  }
}

function unpin() {
  if (
    eleHeader.classList.contains(classes.pinned) ||
    !eleHeader.classList.contains(classes.unpinned)
  ) {
    eleHeader.classList.remove(classes.pinned);
    eleHeader.classList.add(classes.unpinned);
  }
}

window.addEventListener('load', function() {
  currentScrollY = window.pageYOffset;
  if (currentScrollY <= 120) {
    document.querySelector('.header-container').classList.add(classes.top);
  }
  eleHeader = document.querySelector(idOfHeader);
  document.addEventListener('scroll', onScroll, false);
});
