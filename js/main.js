import gsap from 'gsap';
import SplitType from 'split-type';

const text2 = new SplitType('#hero-text-2', {types: 'words, chars'})
const text3 = new SplitType('#hero-text-3', {types: 'words, chars'})
const text4 = new SplitType('#hero-text-4', {types: 'words, chars'})
const text5 = new SplitType('#hero-text-5', {types: 'words, chars'})
const text6 = new SplitType('#hero-text-6', {types: 'words, chars'})


gsap.set(text2.chars, { opacity: 0.5,  y: 100 });
gsap.set(text3.chars, { opacity: 0.5,  y: 100 });
gsap.set(text4.chars, { opacity: 0.5,  y: 100 });
gsap.set(text5.chars, { opacity: 0.5,  y: 100 });
gsap.set(text6.chars, { opacity: 0.5,  y: 100 });


const hero_text_stager = () => {

    gsap.to(text2.chars, {
        duration: 0.7,
        opacity: 1,
        y: 0,
        stagger: 0.05,
    })
    gsap.to (text3.chars, {
        duration: 0.7,
        opacity: 1,
        y: 0,
        stagger: 0.05,
    })
    gsap.to (text4.chars, {
        duration: 0.7,
        opacity: 1,
        y: 0,
        stagger: 0.04,
    })
    gsap.to (text5.chars, {
        duration: 0.7,
        opacity: 1,
        y: 0,
        stagger: 0.05,
    })
    gsap.to (text6.chars, {
        duration: 0.7,
        opacity: 1,
        y: 0,
        stagger: 0.05,
    }) 
}


const preloader = document.getElementById('preloader')
const preloader_svg = document.getElementById('preloader-svg')
const btn = document.getElementById('preloader-btn')
const audio = document.getElementById('audio-site')
const counterElement = document.getElementById('counter');

btn.addEventListener('click', () => {

    gsap.to(preloader, {
        duration: 0.7,
        scale: 3,
        opacity: 0,
        onComplete: () => {
            preloader.style.display = 'none'
        }
    })

    setTimeout(() => {
        can_scale = true;
        console.log('now')
    }, 1000); // 3000 milliseconds = 3 seconds

    // preloader.style.display = 'none'
    audio.muted = false
    window.onbeforeunload = function () { window.scrollTo(0,0); };

    setTimeout(hero_text_stager, 600);


})


let loaded = false;
window.addEventListener('load', ()=>{
    loaded = true;
})
function startCounter () {


    let currentValue = 0;

    function updateCounter () {

        if ( currentValue === 100 ) {
            return;
        }

        if ( currentValue > 80 ) {
            if (loaded) currentValue += Math.floor(Math.random() * 10) + 1;

        }else {

            currentValue += Math.floor(Math.random() * 10) + 1;
        }

        if (currentValue >= 100 ) {
            currentValue = 100;

            initinal_timeline.play()
        }

        counterElement.innerHTML = currentValue;

        let delay = Math.floor(Math.random() * 200) + 5;
        setTimeout(updateCounter, delay)
    }

    updateCounter();
}

startCounter()


const initinal_timeline = gsap.timeline({paused: true});

initinal_timeline
    .to(preloader_svg, {
        duration: 1,
        scale: 3,
        y: '-70%',
        ease: 'power2.inOut'
    })
    .to(counterElement, {
        duration: 0.3,
        opacity:0, 
        // display: 'none',
        ease: 'power2.inOut'
    })
    .to(btn, {
        duration: 0.3,
        opacity: 1,
        scale: 1.1,
        display: 'block',
        ease: 'power2.inOut'
    }, '-=0.3')
    .to(preloader_svg, {
        duration: 0.3,
        // scale: 1.5,
        y: '-100%',
        ease: 'power2.inOut'
    }, '-=0.1')
