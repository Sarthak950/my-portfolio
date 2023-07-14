import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import LocomotiveScroll from 'locomotive-scroll'

gsap.registerPlugin(ScrollTrigger)

const line1 = document.querySelector('.line1')
const line2 = document.querySelector('.line2')
const line3 = document.querySelector('.line3')
const line4 = document.querySelector('.line4')

ScrollTrigger.defaults({
  scroller: '[data-scroll-container]',
  markers: false
});

var scroll = new LocomotiveScroll( {
    el: document.querySelector( '[data-scroll-container]' ),
    smooth: true,
    multiplier: 2.3,
    getDirection: true,
    momentum: true,
});

scroll.on( 'scroll', ( instance ) => {
    ScrollTrigger.update();
    document.documentElement.setAttribute( 'data-scrolling', instance.direction );
});
ScrollTrigger.scrollerProxy( '[data-scroll-container]', {
    scrollTop( value ) {
        return arguments.length ? scroll.scrollTo( value, 0, 0 ) : scroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector( '[data-scroll-container]' ).style.transform ? "transform" : "fixed"
} );

ScrollTrigger.addEventListener( 'refresh', () => scroll.update() );
ScrollTrigger.refresh();


const starting = 75;
const ending = 65;
gsap.to(line1, {
    scrollTrigger: {
        trigger: line1,
        start: `top ${starting}%`,
        end: `top ${ending}%`,
        scrub: true,
        toggleActions: 'restart none none none'
    },
    clipPath: 'polygon(0 0 ,100% 0, 100% 100%, 0 100%)'
})
gsap.to(line2, {
    scrollTrigger: {
        trigger: line2,
        start: `top ${starting}%`,
        end: `top ${ending}%`,
        scrub: true,
        toggleActions: 'restart none none none'
    },
    clipPath: 'polygon(0 0 ,100% 0, 100% 100%, 0 100%)'
})
gsap.to(line3, {
    scrollTrigger: {
        trigger: line3,
        start: `top ${starting}%`,
        end: `top ${ending}%`,
        scrub: true,
        toggleActions: 'restart none none none'
    },
    clipPath: 'polygon(0 0 ,100% 0, 100% 100%, 0 100%)'
})
gsap.to(line4, {
    scrollTrigger: {
        trigger: line4,
        start: `top ${starting}%`,
        end: `top ${ending}%`,
        scrub: true,
        toggleActions: 'restart none none none'
    },
    clipPath: 'polygon(0 0 ,100% 0, 100% 100%, 0 100%)'
})
