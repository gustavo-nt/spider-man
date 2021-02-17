// Import 
import { menu } from './menu.js';

document.addEventListener('DOMContentLoaded', function() {
    let tl = new TimelineMax();

    tl
    .fromTo('.bg-loader', 1, 
    {width:'100%'}, {width:'0%', delay: 5, ease: Expo.easeInOut})

    .fromTo('.bg-video', 2, 
    {width:'0%', opacity: 0}, {width:'100%', opacity: 1, ease: Expo.easeInOut}, '-=1')

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

    .fromTo('.item-3', 0.7, 
    {y: -50, opacity: 0}, 
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')

    .fromTo('.item-4', 0.7, 
    {y: -50, opacity: 0}, 
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')

    .fromTo('.item-5', 0.7, 
    {y: -50, opacity: 0}, 
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')
});

// Run Function
menu();

