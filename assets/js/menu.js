const menuToggle = document.querySelector('.menu-toggle');
const menuMobile = document.querySelector('.menu-mobile');

menuToggle.addEventListener('click', () => {
    menuMobile.classList.toggle('open');
    if (menuMobile.classList.contains('open')) {
        menuToggle.textContent = '✕';
    } else {
        menuToggle.textContent = '☰';
    }
});

