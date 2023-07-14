import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import LocomotiveScroll from 'locomotive-scroll'

gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.defaults({
  scroller: '[data-scroll-container]',
  markers: false
});

var scroll = new LocomotiveScroll( {
    el: document.querySelector( '[data-scroll-container]' ),
    smooth: true,
    multiplier: 2.7,
    getDirection: true,
    momentum: true,
});

scroll.on( 'scroll', ( instance ) => {
    ScrollTrigger.update();
    // console.log( instance)
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


// const layer = document.getElementById('bottom-layer')
// let x = 0;
// let y = 0;
// let scroll_dis= 0 ;
//
//
// let height =0;
// scroll.on('scroll',(instance)=>{
//
//
//
// })
//

// window.addEventListener('mousemove', (e)=>{
//
//
//     let scrollLeft =  document.documentElement.scrollLeft;
//     let scrollTop = document.documentElement.scrollTop;
//
//     x = Math.round((e.clientX + scrollLeft) / window.innerWidth * 100);  
//     y = Math.round((e.clientY + scrollTop) / height * 100);
//
//     moveLayer(x,y)
//
// })

// window.addEventListener('scroll', ()=>{
//     console.log('scroll')
//     // let scrollLeft =  document.documentElement.scrollLeft;
//     let scrollTop = document.documentElement.scrollTop;
//
//    
//     y += Math.round((scrollTop - scroll_dis) / height * 100);
//     scroll_dis = scrollTop;  
//
//     moveLayer(x,y)
//
// })


const moveLayer = (x, y)=>{
    gsap.to(layer,{
        '--x': `${x}%`,
        '--y': `${y}%`,
        duration:0.5,
        ease: 'sine.out'
    })
}














const line1 = document.querySelector('.line1')
const line2 = document.querySelector('.line2')
const line3 = document.querySelector('.line3')
const line4 = document.querySelector('.line4')
const line5 = document.querySelector('.line5')
const line6 = document.querySelector('.line6')
const line7 = document.querySelector('.line7')
const line8 = document.querySelector('.line8')
const line9 = document.querySelector('.line9')



let starting = 75;
let ending = 65;
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
gsap.to(line5, {
    scrollTrigger: {
        trigger: line5,
        start: `top ${starting}%`,
        end: `top ${ending}%`,
        scrub: true,
        toggleActions: 'restart none none none'
    },
    clipPath: 'polygon(0 0 ,100% 0, 100% 100%, 0 100%)'
})
gsap.to(line6,{
    scrollTrigger: {
        trigger: line6,
        start: `top ${starting}%`,
        end: `top ${ending}%`,
        scrub: true,
        toggleActions: 'restart none none none'
    },
    clipPath: 'polygon(0 0 ,100% 0, 100% 100%, 0 100%)'
})
gsap.to(line7, {
    scrollTrigger: {
        trigger: line7,
        start: `top ${starting}%`,
        end: `top ${ending}%`,
        scrub: true,
        toggleActions: 'restart none none none'
    },
    clipPath: 'polygon(0 0 ,100% 0, 100% 100%, 0 100%)'
})
gsap.to(line8, {
    scrollTrigger: {
        trigger: line8,
        start: `top ${starting}%`,
        end: `top ${ending}%`,
        scrub: true,
        toggleActions: 'restart none none none'
    },
    clipPath: 'polygon(0 0 ,100% 0, 100% 100%, 0 100%)'
})
gsap.to(line9, {
    scrollTrigger: {
        trigger: line9,
        start: `top ${starting}%`,
        end: `top ${ending}%`,
        scrub: true,
        toggleActions: 'restart none none none',
    },
    clipPath: 'polygon(0 0 ,100% 0, 100% 100%, 0 100%)'
})




