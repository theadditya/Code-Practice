var tl = gsap.timeline()
tl.from("h1",{
    y: -30,
    duration:0.6,
    delay:0.5,
    opacity: 0,
    
})

tl.from("h3",{
    y: -30,
    duration:0.6,
    opacity: 0,
    stagger:0.1

})
