var tl = gsap.timeline()

tl.to(".planet-image",{
    rotation: 360,
  transformOrigin: "center",
  ease: "none",
  duration: 30,
  repeat: -1
})