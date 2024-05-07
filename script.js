var navText = document.querySelector(".nav-text").innerHTML
var splitNavtext = navText.split("")
var clutter =` `
splitNavtext.forEach((e)=>{
    clutter+=`<span>${e}</span>`

})
navText=clutter
document.querySelector(".nav-text").innerHTML = navText;

console.log(navText);
 var tl1 = gsap.timeline()

tl1
.from(".nav-text span ",{
    stagger:0.1,
    x:-200,
    opacity:0,
    delay:0.1
})

.from(".nav-part2 a",{
    stagger:0.25,
    opacity:0,
})

