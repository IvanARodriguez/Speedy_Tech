const menuBtn = document.querySelector('.menu-btn');
const navShow = document.querySelector('.header-nav');
const headerBackground = document.querySelector(".header")
let menuOpen = false;

//Function when the hamburger button is clicked
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        navShow.classList.add('nav_open');
        headerBackground.classList.add('background-header')
        menuOpen = true;

    } else {
        menuBtn.classList.remove('open');
        navShow.classList.remove('nav_open');
        headerBackground.classList.remove('background-header')
        menuOpen = false;
    }
});