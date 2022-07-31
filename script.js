/* ################### LANGAUGE ################### */

/* ################### NAVBAR ################### */
const navbar = document.querySelector('.navbar');
const navList = document.querySelector('#navbarSupportedContent');
const navBtn = document.querySelector('.burger-btn');
const backToTop = document.querySelector('#scroll-to-top');

window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    // fixed navbar
    if(scrollHeight > navHeight) {
        navbar.classList.add('fixed-top', 'col-12', 'shadow', 'w-100');
        navbar.setAttribute('style', 'background: linear-gradient(180deg, #4C38EE 0%, #543DFF 100%);');
    } else {
        navbar.classList.remove('fixed-top', 'col-12', 'shadow', 'w-100');
        navbar.removeAttribute('style');
    }

    /* nav button */
    navList.classList.contains('show') && navBtn.click();

    // back to top
    scrollHeight > 500 ? backToTop.classList.remove('d-none') : backToTop.classList.add('d-none');
})

/* ################### DATE ################### */
document.getElementById('f-year').textContent = new Date().getFullYear();