// Put your application javascript here
document.addEventListener('DOMContentLoaded', function () {
    loadingwrap();
});

function loadingwrap() {
    const loadingwrap = document.querySelector('.loading-wrapper');
    const loadingLogo = document.querySelector('.loading-wrapper-logo');

    loadingLogo.style.opacity = 1;
    loadingLogo.addEventListener('transitionend', function () {
        setInterval(() => {
            loadingwrap.style.transform = 'translateY(-500%)';
        }, 1000)
    })
}

//handle menu start
const openIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.menu-icon-mobile');
const menu = document.querySelector('.nav-overlay-wrap');
const navMenu = document.querySelectorAll('.nav-link-special');
function handleMenu() {
    openIcon.addEventListener('click', function () {
        menu.style.top = '0%';
        const containerLink = document.querySelectorAll('.nav-link-special-content');
        setInterval(() => {
            containerLink.forEach((container) => {
                container.style.transform = 'translateY(0%)';
            })
        }, 1000)
    });

    menu.addEventListener('transitionend', function (event) {
        if (event.propertyName === 'top') {
            const targetLink = event.target.getAttribute('href');
            if (targetLink) {
                setInterval(() => {
                    window.location.href = targetLink;
                }, 3000)

            }
        }
    });

    closeIcon.addEventListener('click', function () {
        menu.style.top = '-500%';
    });
}
handleMenu();