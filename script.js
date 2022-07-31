/* AUTHOR: JEFFREY TUASON */
/* ################### SPINNER ################### */
const spinner = document.querySelector('.loading-spin');
window.addEventListener('load', () => spinner.classList.add('d-none'));

/* ################### NAVBAR ################### */
const navbar = document.querySelector('.navbar-container');
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


/* ################### FORM ################### */
const form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    const input = e.currentTarget.querySelector('input');
    input.value && window.location.replace(`${window.location.origin}${window.location.pathname}#`);
    input.value = '';
    
});

/* ################### DATE ################### */
document.getElementById('f-year').textContent = new Date().getFullYear();