import {
  disablePageScroll,
  enablePageScroll,
  addFillGapTarget,
  setFillGapMethod,
} from 'scroll-lock';

const siteBody = document.querySelector('.body');
const sitePreloader = document.querySelector('.preloader');

disablePageScroll(sitePreloader);
addFillGapTarget(sitePreloader);
setFillGapMethod('max-width');

window.addEventListener('load', () => {
  window.setTimeout(() => {
    siteBody.classList.add('loader-hidden');
    enablePageScroll(sitePreloader);
  }, 1500);

  window.setTimeout(() => {
    siteBody.classList.add('loaded');
    siteBody.classList.remove('loader-hidden');
  }, 2000);
});
