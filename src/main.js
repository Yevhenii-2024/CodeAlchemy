document
  .querySelector('#mobile-menu-open')
  .addEventListener('click', function () {
    const menu = document.querySelector('#mobile-menu');
    menu.classList.add('is-open');
  });

document
  .querySelector('#mobile-menu-close')
  .addEventListener('click', function () {
    const menu = document.querySelector('#mobile-menu');
    menu.classList.remove('is-open');
  });
