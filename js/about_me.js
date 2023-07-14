import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import LocomotiveScroll from "locomotive-scroll";

gsap.registerPlugin(ScrollTrigger)

ScrollTrigger.defaults({
  scroller: '[data-scroll-container]',
  markers: false
});

const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    multiplier: 0.5,
    smartphone: {
        smooth: true,
    },
    tablet: {
        smooth: true,
    },
    getDirection: true,
});
// Scroll position for ScrollTrigger
ScrollTrigger.scrollerProxy( '[data-scroll-container]', {
    scrollTop( value ) {
        return arguments.length ? scroll.scrollTo( value, 0, 0 ) : scroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector( '[data-scroll-container]' ).style.transform ? "transform" : "fixed"
} );
scroll.on( 'scroll', ( instance ) => {
    ScrollTrigger.update();
    document.documentElement.setAttribute( 'data-scrolling', instance.direction );
});

ScrollTrigger.addEventListener( 'refresh', () => scroll.update() );
ScrollTrigger.refresh();


const line1 = document.querySelector('.line1')
const line2 = document.querySelector('.line2')
const line3 = document.querySelector('.line3')
const line4 = document.querySelector('.line4')

gsap.to(line1, {
    scrollTrigger: {
        trigger: line1,
        start: 'top 95%',
        end: 'top 85%',
        scrub: true,
        toggleActions: 'restart none none none'
    },
    clipPath: 'polygon(0 0 ,100% 0, 100% 100%, 0 100%)'
})
gsap.to(line2, {
    scrollTrigger: {
        trigger: line2,
        start: 'top 85%',
        end: 'top 75%',
        scrub: true,
        toggleActions: 'restart none none none'
    },
    clipPath: 'polygon(0 0 ,100% 0, 100% 100%, 0 100%)'
})
gsap.to(line3, {
    scrollTrigger: {
        trigger: line3,
        start: 'top 75%',
        end: 'top 65%',
        scrub: true,
        toggleActions: 'restart none none none'
    },
    clipPath: 'polygon(0 0 ,100% 0, 100% 100%, 0 100%)'
})
gsap.to(line4, {
    scrollTrigger: {
        trigger: line4,
        start: 'top 65%',
        end: 'top 55%',
        scrub: true,
        toggleActions: 'restart none none none'
    },
    clipPath: 'polygon(0 0 ,100% 0, 100% 100%, 0 100%)'
})
