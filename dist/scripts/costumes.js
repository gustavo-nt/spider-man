// Import Object
import {
    obj
} from './db.js';
import {
    menu
} from './menu.js';

// Items Swipper
const Slide = {
    set(item) {
        //
        let {
            value,
            type
        } = item

        // Create Elements
        let swiperSlide = document.createElement('div');
        let container = document.createElement('div');
        let img = document.createElement('img');
        let details = document.createElement('div');
        let params = {
            item: value,
            type: type,
            swiperSlide: swiperSlide,
            container: container,
            img: img,
            details: details
        }

        setContent(params);

        container.appendChild(img);
        container.appendChild(details);
        swiperSlide.appendChild(container);

        if (type == 'costumes') {
            document.querySelector('.swiper-container-costumes .swiper-wrapper').appendChild(swiperSlide);
        } else {
            document.querySelector('.swiper-container-concepts .swiper-wrapper').appendChild(swiperSlide);
        }
    }
}

// Instantiate new slide swiper
obj.costumes.forEach(value => {
    let obj = {
        value: value,
        type: 'costumes'
    };

    Slide.set(obj);
});

// Instantiate new slide swiper
obj.concepts.forEach(value => {
    let obj = {
        value: value,
        type: 'concepts'
    };

    Slide.set(obj);
});

// Remove loader
setTimeout(function() {
    document.querySelectorAll('.content-loader').forEach(value => {
        value.style.display = 'none';
    });

    document.querySelectorAll('.swiper-slide').forEach(value => {
        value.style.visibility = 'visible';
    });
}, 1000);

// Function setContent
function setContent(params) {
    let {
        item,
        type,
        swiperSlide,
        container,
        img,
        details
    } = params;

    if (type == 'costumes') {
        let title = document.createElement('h1');
        let info = document.createElement('div');
        let containerCoins = document.createElement('div');
        let contentCoins = document.createElement('div');
        let iconCoins = document.createElement('img');
        let spanCoins = document.createElement('span');
        let tooltipCoins = document.createElement('div');
        let tooltipSpanCoins = document.createElement('span');
        let containerLightning = document.createElement('div');
        let contentLightning = document.createElement('div');
        let iconLightning = document.createElement('img');
        let spanLightning = document.createElement('span');
        let tooltipLightning = document.createElement('div');
        let tooltipSpanLightning = document.createElement('span');
        let description = document.createElement('div');
        let paragraph = document.createElement('p');
        let tooltipDescription = document.createElement('div');
        let tooltipSpanDescription = document.createElement('span');

        // Configure Elements
        swiperSlide.style.visibility = 'hidden';
        swiperSlide.classList.add('swiper-slide');
        container.classList.add('container-item');
        details.classList.add('details');

        info.classList.add('info');
        iconCoins.classList.add('coins');
        spanCoins.classList.add('message');
        tooltipCoins.classList.add('tooltip');
        iconLightning.classList.add('lightning');
        spanLightning.classList.add('message');
        tooltipLightning.classList.add('tooltip');
        description.classList.add('description');
        tooltipDescription.classList.add('tooltip');

        img.setAttribute('src', item.img);
        img.setAttribute('alt', item.title);
        iconCoins.setAttribute('onload', 'SVGInject(this)');
        iconCoins.setAttribute('src', '../assets/svg/dollar.svg');
        iconCoins.setAttribute('alt', 'Fichas');
        iconLightning.setAttribute('onload', 'SVGInject(this)');
        iconLightning.setAttribute('src', '../assets/svg/flash.svg');
        iconLightning.setAttribute('alt', 'Nível');

        spanCoins.innerHTML = item.fichas;
        tooltipSpanCoins.innerHTML = 'Fichas';
        spanLightning.innerHTML = item.level;
        tooltipSpanLightning.innerHTML = 'Nível';
        title.innerHTML = item.title;
        paragraph.innerHTML = item.description;
        tooltipSpanDescription.innerHTML = item.description;

        // Build Layout
        tooltipCoins.appendChild(tooltipSpanCoins);
        tooltipLightning.appendChild(tooltipSpanLightning);
        tooltipDescription.appendChild(tooltipSpanDescription);
        description.appendChild(paragraph);
        description.appendChild(tooltipDescription);
        contentLightning.appendChild(iconLightning);
        contentLightning.appendChild(spanLightning);
        contentLightning.appendChild(tooltipLightning);
        containerLightning.appendChild(contentLightning);
        contentCoins.appendChild(iconCoins);
        contentCoins.appendChild(spanCoins);
        contentCoins.appendChild(tooltipCoins);
        containerCoins.appendChild(contentCoins);
        info.appendChild(containerCoins);
        info.appendChild(containerLightning);
        details.appendChild(title);
        details.appendChild(info);
        details.appendChild(description);
    } else {
        let list = document.createElement('ul');
        let userLi = document.createElement('li');
        let userIcon = document.createElement('img');
        let userSpan = document.createElement('span');
        let postLi = document.createElement('li');
        let postIcon = document.createElement('img');
        let postLink = document.createElement('a');
        let dataLi = document.createElement('li');
        let dataIcon = document.createElement('img');
        let dataSpan = document.createElement('span');

        // Configure Elements
        swiperSlide.style.visibility = 'hidden';
        swiperSlide.classList.add('swiper-slide');
        container.classList.add('container-item');
        details.classList.add('details');
        dataIcon.classList.add('clock');

        img.setAttribute('src', item.img);
        img.setAttribute('alt', item.user);
        userIcon.setAttribute('onload', 'SVGInject(this)');
        userIcon.setAttribute('src', '../assets/svg/user.svg');
        postIcon.setAttribute('onload', 'SVGInject(this)');
        postIcon.setAttribute('src', '../assets/svg/twitter.svg');
        postLink.setAttribute('href', item.tweet);
        dataIcon.setAttribute('onload', 'SVGInject(this)');
        dataIcon.setAttribute('src', '../assets/svg/clock.svg');

        userSpan.innerHTML = item.user;
        postLink.innerHTML = 'Link Tweet';
        dataSpan.innerHTML = item.createdAt;

        userLi.appendChild(userIcon);
        userLi.appendChild(userSpan);
        postLi.appendChild(postIcon);
        postLi.appendChild(postLink);
        dataLi.appendChild(dataIcon);
        dataLi.appendChild(dataSpan);
        list.appendChild(userLi);
        list.appendChild(postLi);
        list.appendChild(dataLi);
        details.appendChild(list);
    }
}

// Timeline Greeensock
document.addEventListener('DOMContentLoaded', function() {
    let tl = new TimelineMax();

    tl
        .fromTo('.null', 1, {
            width: '0%',
            opacity: 0
        }, {
            width: '100%',
            opacity: 1,
            ease: Expo.easeInOut
        }, '-=1')

        .fromTo('.logo', 1.5, {
            y: -50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            ease: Expo.easeInOut
        }, '-=0.5')

        .fromTo('.nav-or-hamburguer', 0.7, {
            y: -50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            ease: Expo.easeInOut
        }, '-=0.5')

        .fromTo('.nav-social', 0.7, {
            y: -50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            ease: Expo.easeInOut
        }, '-=0.5')

        .fromTo('.container-costumes', 0.7, {
            y: -50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            ease: Expo.easeInOut
        }, '-=0.5')

        .fromTo('.container-concepts', 0.7, {
            y: -50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            ease: Expo.easeInOut
        }, '-=0.5')
});

// Run Function
menu();