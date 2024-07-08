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



//gsap animation on scroll
gsap.registerPlugin(ScrollTrigger);
const mm = gsap.matchMedia();
const myTranslateTrigger = document.getElementById('translate-effect');
const myTranslateImg = document.getElementById('translate-img');
const mySecondTranslateTrigger = document.getElementById('translate-second-effect');
const mySecondTranslateImg = document.getElementById('translate-second-img');
const myTranslateAbsolute = document.getElementById('translate-absolute');
const myAbsoluteImage = document.getElementById('absolute-img');
const sliderTrigger = document.getElementById('slider-section');
const sliderItems = document.querySelectorAll('.swiper-slide');
const myAbsoluteTrigger = document.getElementById('translate-effect-absolute');
const myAbsoluteSecondImage = document.getElementById('translate-effect-img-absolute');


mm.add("(max-width: 426px)", () => {

    gsap.fromTo(myTranslateImg, {
        y: -40
    }, {
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: myTranslateTrigger,
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });

    gsap.fromTo(mySecondTranslateImg, {
        y: -40
    }, {
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: mySecondTranslateTrigger,
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });


    gsap.fromTo(myAbsoluteImage, {
        y: 0
    }, {
        y: 300,
        duration: 1,
        ease: 'none',
        scrollTrigger: {
            trigger: myTranslateAbsolute,
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });

    gsap.fromTo(myAbsoluteSecondImage, {
        x: 0
    }, {
        x: 200,
        duration: 1,
        scrollTrigger: {
            trigger: myAbsoluteTrigger,
            start: "center bottom",
            end: "bottom top",
            scrub: true
        }
    });

    sliderItems.forEach((item, index) => {
        gsap.to(item, {
            opacity: 1,
            duration: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: sliderTrigger,
                start: "top-=300px bottom",
                end: "center center",
                scrub: true,
                delay: index * 0.2,
                once: true
            }
        })
    })
});


mm.add("(min-width: 768px)", () => {

    gsap.fromTo(myTranslateImg, {
        y: -200
    }, {
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: myTranslateTrigger,
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });

    gsap.fromTo(mySecondTranslateImg, {
        y: -200
    }, {
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: mySecondTranslateTrigger,
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });


    gsap.fromTo(myAbsoluteImage, {
        y: 0
    }, {
        y: 300,
        duration: 1,
        ease: 'none',
        scrollTrigger: {
            trigger: myTranslateAbsolute,
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });

    gsap.fromTo(myAbsoluteSecondImage, {
        x: -50
    }, {
        x: 50,
        duration: 1,
        scrollTrigger: {
            trigger: myAbsoluteTrigger,
            start: "top center",
            end: "bottom top",
            scrub: true
        }
    });

    sliderItems.forEach((item, index) => {
        gsap.fromTo(item, {
            y: 200 + (index * 1000),
        }, {
            y: 0,
            duration: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: sliderTrigger,
                start: "top-=300px bottom",
                end: "center center",
                scrub: true,
                delay: index * 0.2,
                once: true
            }
        })
    })
});

mm.add("(min-width: 427px) and (max-width: 435px)", () => {
    gsap.fromTo(myTranslateImg, {
        y: -60
    }, {
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: myTranslateTrigger,
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });

    gsap.fromTo(mySecondTranslateImg, {
        y: -60
    }, {
        y: 0,
        duration: 1,
        scrollTrigger: {
            trigger: mySecondTranslateTrigger,
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });

    gsap.fromTo(myAbsoluteImage, {
        y: -100
    }, {
        y: 100,
        duration: 1,
        ease: 'none',
        scrollTrigger: {
            trigger: myTranslateAbsolute,
            start: "center center",
            end: "bottom center",
            scrub: true
        }
    });

    gsap.fromTo(myAbsoluteSecondImage, {
        x: 0
    }, {
        x: 200,
        duration: 1,
        scrollTrigger: {
            trigger: myAbsoluteTrigger,
            start: "center bottom",
            end: "bottom top",
            scrub: true
        }
    });
});
