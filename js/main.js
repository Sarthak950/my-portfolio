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


