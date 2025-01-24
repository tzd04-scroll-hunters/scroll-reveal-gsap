// animate sofort beim Laden!
gsap.to("h1", {
  backgroundColor: "lime",
  delay: 1,
});

// animate erst beim Scrollen zum Element!
gsap.to(".fady", {
  backgroundColor: "lime",
  x: 100,
  // scrollTrigger animates the item when SCROLLED into!
  // => item becomes visible in viewport
  scrollTrigger: {
    trigger: ".fady",
    // first value: scroll position in ELEMENT
    // second value: scroll position in VIEWPORT
    start: "center 30%",
  },
});

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

// animate counter when scrolling to it
gsap.to(".counter span", {
  // animation außerhalb scroll trigger
  innerText: 100,
  // backgroundColor: gsap.utils.wrap(colors),
  // Farbton dreht sich um 360 Grad um die START FARBE
  backgroundColor: "hsl(+=360, 100%, 50%)",
  ease: "linear",
  // ease: "steps(100)",
  // snap => round a number
  snap: "innerText",
  // when we have SCRUB enabled the SCROLL position decided the animation state 
  // => duration is ignored!
  duration: 10,
  scrollTrigger: {
    trigger: ".counter",
    // show markers where animation will start visually!
    markers: true,
    // start animation when CENTER of ELEMENT reaches CENTER of VIEWPORT
    start: "top 30%",
    end: "center 10%",
    // use the SCROLL position as animation progress
    scrub: true,
  },
});

// GENERAL PATTERN
// gsap.to(<elementToAnimate>, {
//   scrollTrigger: {
//     trigger: "<elementThatTRIGGERSAnimationOnceWeScrollToIt>"
//   }
// })
