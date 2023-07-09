import {gsap } from '../../node_modules/gsap'


const sound_btn = document.getElementById('sound-click-container')

sound_btn.addEventListener('click', () => {
  
    const time = 0.5


    const off = document.getElementById('sound-off')
    
    const on = document.getElementById('sound-on')
   
    if(off.classList.contains('active')){
        off.classList.remove('active')
        on.classList.add('active')
 
       gsap.to('#sound-on', {duration:0.5, ease:'power4.out', transform:'translateY(0%)' })
        gsap.to('#sound-off', {duration:0.5, ease:'power4.out', transform:'translateY(0%)' })
    }else{
        off.classList.add('active')
        on.classList.remove('active')
        console.log('off')
        gsap.to('#sound-on', {duration:0.5, ease:'power4.out', transform:'translateY(-100%)' })
        gsap.to('#sound-off', {duration:0.5, ease:'power4.out', transform:'translateY(-100%)' })
    }

})


const about = document.getElementById('about')
const work = document.getElementById('work')
const contact = document.getElementById('contact')


about.addEventListener('mouseover',()=>{

    gsap.to('#about-rest',{
        duration:0.5,
        ease:'power4.out',
        transform:'translateY(-100%)'
    })
    gsap.to('#about-current',{
        duration:0.5,
        ease:'power4.out',
        transform:'translateY(-100%)'
    })
})
//check if the mouse move away
about.addEventListener('mouseout',()=>{
    gsap.to('#about-rest',{
        duration:0.5,
        ease:'power4.out',
        transform:'translateY(0%)'
    })
    gsap.to('#about-current',{
        duration:0.5,
        ease:'power4.out',
        transform:'translateY(0%)'
    })
})

work.addEventListener('mouseover', ()=>{
        gsap.to('#work-rest',{
        duration:0.5,
        ease:'power4.out',
        transform:'translateY(-100%)'
    })
    gsap.to('#work-current',{
        duration:0.5,
        ease:'power4.out',
        transform:'translateY(-100%)'
    })
})
work.addEventListener('mouseout', ()=>{
        gsap.to('#work-rest',{
        duration:0.5,
        ease:'power4.out',
        transform:'translateY(0%)'
    })
    gsap.to('#work-current',{
        duration:0.5,
        ease:'power4.out',
        transform:'translateY(0%)'
    })
})

contact.addEventListener('mouseover',()=>{
 gsap.to('#contact-rest',{
        duration:0.5,
        ease:'power4.out',
        transform:'translateY(-100%)'
    })
    gsap.to('#contact-current',{
        duration:0.5,
        ease:'power4.out',
        transform:'translateY(-100%)'
    })
})

contact.addEventListener('mouseout',()=>{
    gsap.to('#contact-rest',{
            duration:0.5,
            ease:'power4.out',
            transform:'translateY(0%)'
        })
        gsap.to('#contact-current',{
            duration:0.5,
            ease:'power4.out',
            transform:'translateY(0%)'
        })
})




const about_sec = document.getElementById('About')
about_sec.addEventListener('')
