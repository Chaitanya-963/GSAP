// var tl = gsap.timeline();

// tl.from("#page1 #box", {
//   scale: 0,
//   delay: 1,
//   duration: 1,
//   rotate: 360,
// });

// tl.from("#page2 #box", {
//   scale: 0,
//   duration: 2,
//   rotate: 360,
//   scrollTrigger: {
//     trigger: "#page2 #box",
//     scroller: "body",
//     markers:true,
//     start:"top 60%"
//   },
// });

// Scrub property section

// gsap.from("#page2 h1", {
//   y: 10,
//   opacity: 0,
//   duration: 2,
//   scrollTrigger: {
//     trigger: "#page2 h1",
//     scroller: "body",
//     markers: true,
//     start: "top 50%",
//     scrub: true,
//   },
// });
// gsap.from("#page2 h2", {
//   y: -100,
//   opacity: 0,
//   duration: 2,
//   scrollTrigger: {
//     trigger: "#page2 h2",
//     scroller: "body",
//     markers: true,
//     start: "top 50%",
//     scrub:2
//   },
// });

// pin property section

gsap.to("#page2 h1", {
  transform: "translateX(-150%)",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    start: "top 0%",
    end: "top -150%",
    scrub: 2,
    pin: true,
  },
});
