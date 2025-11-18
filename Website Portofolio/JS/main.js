const menu = document.querySelector('.menu');
const humbergermenu = document.querySelector('.humberger-menu');
const iconBars = document.querySelector('.icon-bars');
const iconClose = document.querySelector('.icon-close');

humbergermenu.addEventListener('click', () => {
    // toggle menu
    menu.classList.toggle('tampil');

    // toggle icon
    if (menu.classList.contains('tampil')) {
        iconBars.style.display = 'none';
        iconClose.style.display = 'inline';
    } else {
        iconBars.style.display = 'inline';
        iconClose.style.display = 'none';
    }
});
