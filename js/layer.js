import {gsap } from 'gsap'


const layer = document.getElementById('bottom-layer')

let x = 0;
let y = 0;
let scroll= 0 ;


let height = Math.max(
    document.documentElement.clientHeight,
    document.body.clientHeight
)


 
window.addEventListener('mousemove', (e)=>{


    let scrollLeft =  document.documentElement.scrollLeft;
    let scrollTop = document.documentElement.scrollTop;

    x = Math.round((e.clientX + scrollLeft) / window.innerWidth * 100);  
    y = Math.round((e.clientY + scrollTop) / height * 100);

    // gsap.to(layer,{
    //     '--x': `${x}%`,
    //     '--y': `${y}%`,
    //     duration:0.5,
    //     ease: 'sine.out'
    // })

    moveLayer(x,y)

})



window.addEventListener('scroll', (e)=>{
    console.log('scroll')
    let scrollLeft =  document.documentElement.scrollLeft;
    let scrollTop = document.documentElement.scrollTop;

   
    y += Math.round((scrollTop - scroll) / height * 100);
    scroll = scrollTop;  

    moveLayer(x,y)

})


const moveLayer = (x, y)=>{
    gsap.to(layer,{
        '--x': `${x}%`,
        '--y': `${y}%`,
        duration:0.5,
        ease: 'sine.out'
    })
}


