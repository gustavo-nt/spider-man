// Import 
import { menu } from './menu.js';

// Timeline Greeensock
document.addEventListener('DOMContentLoaded', function() {
    let tl = new TimelineMax();

    tl
    .fromTo('.null', 1, 
    {width:'0%', opacity: 0}, {width:'100%', opacity: 1, ease: Expo.easeInOut}, '-=1')

    .fromTo('.bg-teaser', 2, 
    {opacity: 0}, {opacity: 1, ease: Expo.easeInOut})

    .fromTo('.logo', 0.7, 
    {y: -50, opacity: 0}, 
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')

    .fromTo('.nav-or-hamburguer', 0.7, 
    {y: -50, opacity: 0}, 
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')

    .fromTo('.nav-social', 0.7, 
    {y: -50, opacity: 0}, 
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')

    .fromTo('.item-1', 0.7, 
    {y: -50, opacity: 0}, 
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')

    .fromTo('.item-2', 0.7, 
    {y: -50, opacity: 0}, 
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')
});

// Run Function
menu();