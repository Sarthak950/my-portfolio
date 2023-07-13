import LocomotiveScroll from "locomotive-scroll";

const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    multiplier: 0.5,
    smartphone: {
        smooth: true,
    },
    tablet: {
        smooth: true,
    },
});



