export const menuHome = document.querySelector('[data-js="menu-home"]');
export const menuForm = document.querySelector('[data-js="menu-form"]');
export const allCards = document.querySelector('[js-data="cards"]');
export const wholeForm = document.querySelector('[js-data="form"]');
export const singleCard = document.querySelectorAll('[js-data="card"]');



menuHome.addEventListener('click', () => {

  menuHome.classList.add('now');
  menuForm.classList.remove('now');
  allCards.classList.add('menu-active')
  allCards.classList.remove('menu-inactive')
  wholeForm.classList.add('menu-inactive')
  wholeForm.classList.remove('menu-active')

});

menuForm.addEventListener('click', () => {

  menuHome.classList.toggle('now');
  menuForm.classList.toggle('now');
  allCards.classList.add('menu-inactive')
  allCards.classList.remove('menu-active')
  wholeForm.classList.add('menu-active')
  wholeForm.classList.remove('menu-inactive')


});



