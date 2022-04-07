import { disablePageScroll, enablePageScroll } from 'scroll-lock';

const burgerBtnOpen = document.querySelector('.site-header__burger');
const burgerBtnClose = document.querySelector('.content-header__close');
const navOverlay = document.querySelector('.site-header__overlay');
const navContent = document.querySelector('.site-header__content');
const navLinks = document.querySelectorAll('.nav-header__link');

function openingMenu() {
  navOverlay.classList.add('ui-burger-active');
  navContent.classList.add('ui-burger-active');

  disablePageScroll(navOverlay);
}

function closingMenu() {
  navOverlay.classList.remove('ui-burger-active');
  navContent.classList.remove('ui-burger-active');

  enablePageScroll(navOverlay);
}

burgerBtnOpen.addEventListener('click', () => {
  openingMenu();
});

burgerBtnClose.addEventListener('click', () => {
  closingMenu();
});

navLinks.forEach((el) => {
  el.addEventListener('click', () => {
    closingMenu();
  });
});
