import {gsap } from '../../node_modules/gsap'


const sound_btn = document.getElementById('sound-click-container')

sound_btn.addEventListener('click', () => {
   


    const off = document.getElementById('sound-off')
    
    const on = document.getElementById('sound-on')
   
    if(off.classList.contains('active')){
        off.classList.remove('active')
        on.classList.add('active')
 
       gsap.to('#sound-on', {duration:1, ease:'power4.out', transform:'translateY(0%)' })
        gsap.to('#sound-off', {duration:1, ease:'power4.out', transform:'translateY(0%)' })
    }else{
        off.classList.add('active')
        on.classList.remove('active')
        console.log('off')
        gsap.to('#sound-on', {duration:1, ease:'power4.out', transform:'translateY(-100%)' })
        gsap.to('#sound-off', {duration:1, ease:'power4.out', transform:'translateY(-100%)' })
    }

})
