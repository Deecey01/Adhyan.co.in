gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();

tl.from("#content p:first-child", {
    opacity: 0.5,
    duration: 1,
    x: -1160,
    delay:1
});

tl.from("#content h2", {
    opacity: 0.5,
    duration: 1,
    x: 1460,
});
// Scroll down arrow animation

tl.from(".scroll", {
    y: 20,
    repeat: -1,
    yoyo: true,
});
