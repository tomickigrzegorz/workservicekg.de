const ActiveMenu = (classes) => {
  const { classMenu, classActive } = classes;

  const menu = document.querySelectorAll(`.${classMenu} a`);

  menu.forEach((item, i) => {
    item.addEventListener('click', () => {
      let current = document.querySelectorAll(`.${classActive}`);
      if (current.length > 0) {
        current[0].className = current[0].className.replace(classActive, '');
      }
      item.className += classActive;
    });

  });
};

export default ActiveMenu;