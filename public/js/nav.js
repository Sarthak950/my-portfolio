import * as gsap from '../../node_modules/gsap'

const sound_btn = document.getElementById('sound-click-container')

sound_btn.addEventListener('click', ()=>{


    let container = document.getElementById('sound-on-off-container')


    if(container.classList.contains('ON')){

        container.style.transform = 'translateY(-50%)'
        container.classList.remove('ON')
        container.classList.add('OFF')
        console.log('on')
    }else{
        container.style.transform = 'translateY(0%)'
        container.classList.remove('OFF')
        container.classList.add('ON')
        console.log('off')
    }
})
