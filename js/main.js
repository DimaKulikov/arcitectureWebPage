// clone the menu from header and put it in the mobile drawer
const headerNav = document.querySelector('.header__nav');
const drawer = document.querySelector('.drawer');
const mobileNav = drawer.querySelector('.drawer__menu');
const menuClone = headerNav.cloneNode(true);
menuClone.classList.remove('header__nav');
mobileNav.append(menuClone);

// 
const burgerBtn = document.querySelector('.header__menu-btn');
const drawerCloseBtn = drawer.querySelector('.drawer__close-btn');
burgerBtn.addEventListener('click', openDrawer);
drawerCloseBtn.addEventListener('click', closeDrawer);
function openDrawer() {
  drawer.classList.add('drawer_opened');
}
function closeDrawer() {
  drawer.classList.remove('drawer_opened');
}

window.addEventListener('resize', function hideMobileOnResize(){
  if (window.innerWidth > 768) {
    closeDrawer();
  }
})

