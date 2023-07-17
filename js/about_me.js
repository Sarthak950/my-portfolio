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
    multiplier: .5,
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


const layer = document.getElementById('bottom-layer')
let x = 0;
let y = 0;
let scroll_dis= 0 ;


let height = 0;
scroll.on('scroll',(instance)=>{

    height = instance.limit.y;
    scroll_dis = instance.scroll.y;

    // console.log(scroll_dis)

    moveLayerFast(x, y)
})


window.addEventListener('mousemove', (e)=>{

    x = e.clientX
    y = e.clientY + scroll_dis
    moveLayer(x,y)

})

const moveLayerFast = (x, y)=>{
    console.log(x, y)
    
    gsap.to(layer,{
        '--x': `${x}px`,
        '--y': `${y}px`,
        duration:0.1,
        ease: 'sine.out',
        delay: 0
    })

}


const moveLayer = (x, y)=>{
    gsap.to(layer,{
        '--x': `${x}px`,
        '--y': `${y}px`,
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
const line10 = document.querySelector('.line10')
const line11 = document.querySelector('.line11')
const line12 = document.querySelector('.line12')
const line13 = document.querySelector('.line13')
const line14 = document.querySelector('.line14')
const line15 = document.querySelector('.line15')
const line16 = document.querySelector('.line16')
const line17 = document.querySelector('.line17')
const line18 = document.querySelector('.line18')
const line19 = document.querySelector('.line19')


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





const starting2 = 80
const ending2 = 10


gsap.to(line10, {
    scrollTrigger: {
        trigger: line10,
        start: `top ${starting2}%`,
        end: `top ${ending2 -100}%`,
        scrub: 0.3,
        toggleActions: 'restart none none none',
    },

    clipPath: 'polygon(0 0 ,100% 0, 100% 100%, 0 100%)'
})
gsap.to(line11, {
    scrollTrigger: {
        trigger: line11,

        start: `top ${starting2}%`,
        end: `top ${ending2}%`,
        scrub: 0.3,
        toggleActions: 'restart none none none',
    },
    clipPath: 'polygon(0 0 ,100% 0, 100% 100%, 0 100%)'
})
gsap.to(line12, {
    scrollTrigger: {
        trigger: line12,
        start: `top ${starting2}%`,
        end: `top ${ending2 }%`,
        scrub: 0.3,
        toggleActions: 'restart none none none',
    },
    clipPath: 'polygon(0 0 ,100% 0, 100% 100%, 0 100%)'
})
gsap.to(line13, {
    scrollTrigger: {
        trigger: line13,
        start: `top ${starting2+5}%`,
        end: `top ${ending2}%`,
        scrub: 0.3,
        toggleActions: 'restart none none none',
    },
    clipPath: 'polygon(0 0 ,100% 0, 100% 100%, 0 100%)'
})
gsap.to(line14, {
    scrollTrigger: {
        trigger: line14,
        start: `top ${starting2+10}%`,
        end: `top ${ending2}%`,
        scrub: 0.1,
        toggleActions: 'restart none none none',
    },
    clipPath: 'polygon(0 0 ,100% 0, 100% 100%, 0 100%)'
})



//use the staring and endig for this
gsap.to(line15, {
    scrollTrigger: {
        trigger: line15,
        start: `top ${starting}%`,
        end: `top ${ending}%`,
        scrub: 0.1,

        toggleActions: 'restart none none none',
    },
    clipPath: 'polygon(0 0 ,100% 0, 100% 100%, 0 100%)'
})

gsap.to(line16, {
    scrollTrigger: {
        trigger: line16,
        start: `top ${starting}%`,
        end: `top ${ending}%`,
        scrub: 0.1,

        toggleActions: 'restart none none none',
    },
    clipPath: 'polygon(0 0 ,100% 0, 100% 100%, 0 100%)'
})
gsap.to(line17, {
    scrollTrigger: {
        trigger: line17,
        start: `top ${starting}%`,
        end: `top ${ending}%`,
        scrub: 0.1,

        toggleActions: 'restart none none none',
    },
    clipPath: 'polygon(0 0 ,100% 0, 100% 100%, 0 100%)'
})
gsap.to(line18, {
    scrollTrigger: {
        trigger: line18,
        start: `top ${starting}%`,
        end: `top ${ending}%`,
        scrub: 0.1,

        toggleActions: 'restart none none none',
    },
    clipPath: 'polygon(0 0 ,100% 0, 100% 100%, 0 100%)'
})
gsap.to(line19, {
    scrollTrigger: {
        trigger: line19,
        start: `top ${starting}%`,
        end: `top ${ending}%`,
        scrub: 0.1,

        toggleActions: 'restart none none none',
    },
    clipPath: 'polygon(0 0 ,100% 0, 100% 100%, 0 100%)'
})
