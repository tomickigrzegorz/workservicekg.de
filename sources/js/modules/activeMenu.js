const ActiveMenu = ({ classMenu, classActive }) => {
  const menu = document.querySelectorAll(`.${classMenu} a`);

  for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener('click', () => {
      const current = document.querySelectorAll(`.${classActive}`);
      if (current.length > 0) {
        current[0].className = current[0].className.replace(classActive, '');
      }
      menu[i].className += classActive;
    });
  }
};

export default ActiveMenu;
