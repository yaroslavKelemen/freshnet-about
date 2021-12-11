$(document).ready(function() {
  $('.header__burger').click(function() {
    $('.header__burger, .header__menu').toggleClass('active');
  });
});

const contactBtns = document.querySelectorAll('.contact');
const modal = document.querySelector('.modal-overlay');
const modalClose = document.querySelector('.modal-close');

contactBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
      modal.style.opacity = '1';
      modal.style.pointerEvents = 'auto';
      document.body.style.overflowY = 'hidden';
  });
});

modalClose.addEventListener('click', () => {
  modal.style.opacity = '0';
  modal.style.pointerEvents = 'none';
  document.body.style.overflowY = 'auto';
});