const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeElem = document.querySelector('.menu__close');
const menuOverlay = document.querySelector('.menu__overlay');
const menuListItems = document.querySelectorAll('.menu__list > li');

menuListItems.forEach(item => {
  item.addEventListener('click', () => {
    menu.classList.remove('active');
  })
})

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
});

menuOverlay.addEventListener('click', () => {
  menu.classList.remove('active');
})

closeElem.addEventListener('click', () => {
  menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});


