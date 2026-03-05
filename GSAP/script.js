gsap.to("#box1",{
    x:1020,
    y:-100,
    duration: 2,
    delay : 2,
    rotate: 90,
    backgroundColor: "#a75d09",
    borderRadius:"50%",
    repeat:-1,
    yoyo: true,

})
gsap.from("#box2",{
    x:900,
    y:100,
    duration: 2,
    delay : 2,
    borderRadius:"50%",
    repeat:2,
    yoyo:true,
})

// gsap.to("h1",{
//     y:100,
//     delay:2,
//     duration:2,
//     stagger: 1,
//     opacity :0.2,
// })

var tl= gsap.timeline();

tl.to("box3",{
    x: 1200,
    backgroundColor:"Green",
    duraton:1.5,
    delay:2,
})
tl.to("box4",{
    x: 1200,
    backgroundColor:"yellow",
    duraton:1.5,
    repeat:-1
})
tl.to("box5",{
    x: 1200,
    backgroundColor:"royalblue",
    duraton:1.5,
    repeat:-1

})