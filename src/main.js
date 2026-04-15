import './style.css';
const btnMenu = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.menu__mobile');




btnMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('menu__mobile--active');
});
