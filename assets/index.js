document.addEventListener('DOMContentLoaded', function () {
    loadingwrap();
    handleMenu();
});

function loadingwrap() {
    const loadingLogo = document.querySelector('.loading-wrapper-logo');

    if (loadingLogo) {
        loadingLogo.style.opacity = 1;
        loadingLogo.addEventListener('transitionend', function () {
            setTimeout(() => {
                const loadingwrap = document.querySelector('.loading-wrapper');
                if (loadingwrap) {
                    loadingwrap.style.transform = 'translateY(-500%)';
                }
            }, 1000);
        });
    }
}

function handleMenu() {
    const openIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.menu-icon-mobile');
    const menu = document.querySelector('.nav-overlay-wrap');
    const navMenu = document.querySelectorAll('.nav-link-special-content');

    if (openIcon && closeIcon && menu) {
        openIcon.addEventListener('click', function () {
            menu.style.top = '0%';
            setTimeout(() => {
                navMenu.forEach((container) => {
                    container.style.transform = 'translateY(0%)';
                });
            }, 700);
        });

        menu.addEventListener('transitionend', function (event) {
            if (event.propertyName === 'top') {
                const targetLink = event.target.getAttribute('href');
                if (targetLink) {
                    setTimeout(() => {
                        window.location.href = targetLink;
                    }, 3000);
                }
            }
        });

        closeIcon.addEventListener('click', function () {
            menu.style.top = '-500%';
        });
    }
}


//settings slider start
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 24,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        color: "black"
    },
    breakpoints: {

        320: {
            slidesPerView: 1,
            spaceBetween: 16,
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },

        1024: {
            slidesPerView: 2,
            spaceBetween: 24,
        },

        1200: {
            slidesPerView: 3,
            spaceBetween: 24,
        }
    }
});
