import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const line1 = document.querySelector('.line1')
const line2 = document.querySelector('.line2')
const line3 = document.querySelector('.line3')
const line4 = document.querySelector('.line4')


//triger the animation and set the clip path to polygon(0 0 ,100% 0, 100% 100%, 0 100%)

gsap.to(line1, {
    scrollTrigger: {
        trigger: line1,
        start: 'top 80%',
        end: 'top 30%',
        scrub: true,
        toggleActions: 'restart none none none'
    },
    clipPath: 'polygon(0 0 ,100% 0, 100% 100%, 0 100%)'
})
//
//
//
//now stager each line like this
//
gsap.to(line2, {
    scrollTrigger: {
        trigger: line2,
        start: 'top 80%',
        end: 'top 30%',
        scrub: true,
        toggleActions: 'restart none none none'
    },
    clipPath: 'polygon(0 0 ,100% 0, 100% 100%, 0 100%)'
})

gsap.to(line3, {
    scrollTrigger: {
        trigger: line3,
        start: 'top 80%',
        end: 'top 30%',
        scrub: true,
        toggleActions: 'restart none none none'
    },
    clipPath: 'polygon(0 0 ,100% 0, 100% 100%, 0 100%)'
})


gsap.to(line4, {
    scrollTrigger: {
        trigger: line4,
        start: 'top 80%',
        end: 'top 30%',
        scrub: true,
        toggleActions: 'restart none none none'
    },
    clipPath: 'polygon(0 0 ,100% 0, 100% 100%, 0 100%)'
})
