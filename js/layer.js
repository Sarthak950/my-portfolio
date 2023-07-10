import {gsap } from 'gsap'


const layer = document.getElementById('bottom-layer')

window.addEventListener('mousemove', (e)=>{
    const { clientX, clientY} = e;
    const x = Math.round((clientX / window.innerWidth) * 100);
    const y = Math.round((clientY / window.innerHeight) * 100);

    gsap.to(layer,{
        '--x': `${x}%`,
        '--y': `${y}%`,
        duration:0.5,
        ease: 'sine.out'
    })
})



