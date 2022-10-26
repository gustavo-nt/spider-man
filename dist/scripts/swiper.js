// Swiper
setTimeout(function() {
    new Swiper('.swiper-container-costumes', {
        spaceBetween: 20,
        loop: false,

        navigation: {
            nextEl: '.pagination-nextEl-costumes',
            prevEl: '.pagination-prevEl-costumes',
        },

        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },

        breakpoints: {
            300: {
                slidesPerView: 1,
            },
            450: {
                slidesPerView: 2,
            },
            800: {
                slidesPerView: 3
            },
            992: {
                slidesPerView: 4
            }
        }
    });

    setTimeout(function() {
        new Swiper('.swiper-container-concepts', {
            spaceBetween: 20,
            loop: false,

            navigation: {
                nextEl: '.pagination-nextEl-concepts',
                prevEl: '.pagination-prevEl-concepts',
            },

            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },

            breakpoints: {
                300: {
                    slidesPerView: 1,
                },
                450: {
                    slidesPerView: 2,
                },
                800: {
                    slidesPerView: 3
                },
                992: {
                    slidesPerView: 4
                }
            }
        });
    }, 500);
}, 500);