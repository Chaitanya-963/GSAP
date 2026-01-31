var tl = gsap.timeline();

// tl.to("#box", {
//   //   scale: 2,
//   y: 25,
//   x: 45,
//   duration: 2,
//   delay: 0.8,
// });

// tl.to("#box", {
//   x: 100,
//   y: 100,
//   rotate: 360,
//   scale: 1,
//   duration:2,
//   delay:0.8,
//   backgroundColor:"#214532",
//   borderRadius:"100%"
// });

// tl.from("h1", {
//   y: 20,
//   color: "red",
//   duration: 2,
//   delay: 2,
//   opacity: 0,
//   stagger:0.5
// });

// tl.to("#box", {
//   x: 1200,
//   duration: 1,
//   delay: 1,
//   rotate: 360,
//   borderRadius: "50%",
//   repeat: -1,
//   yoyo: true,
// });

tl.from("h2", {
  y: -20,
  opacity: 0,
  duration: 1,
  delay: 0.5,
});

tl.from("#part2 h4, button", {
  y: -20,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  stagger: 0.3,
});
