function splitText(){
  var navText = document.querySelector(".nav-text").innerHTML
var splitNavtext = navText.split("")
var clutter =` `
splitNavtext.forEach((e)=>{
    clutter+=`<span>${e}</span>`

})
navText=clutter
document.querySelector(".nav-text").innerHTML = navText;
}
splitText()


function splitPara(){

  var clutter2 =` `
  document.querySelector(".oneTxt ").innerText.split("").forEach((e)=>{
      clutter2+=`<span>${e}</span>`
  
  })
  paraText=clutter2
  document.querySelector(".oneTxt").innerHTML = paraText;
  }
  splitPara()
  
  function splitPara1(){
  
  var clutter2 =` `
  document.querySelector(".twoTxt ").innerText.split("").forEach((e)=>{
      clutter2+=`<span>${e}</span>`
  
  })
  paraText=clutter2
  document.querySelector(".twoTxt").innerHTML = paraText;
  }
  splitPara1()
  
  
  function splitPara2(){
  
  var clutter2 =` `
  document.querySelector(".threeTxt ").innerText.split("").forEach((e)=>{
      clutter2+=`<span>${e}</span>`
  
  })
  paraText=clutter2
  document.querySelector(".threeTxt").innerHTML = paraText;
  }
  splitPara2()
  
  





 var tl1 = gsap.timeline()
var tl2 =gsap.timeline()
tl1
.from(".nav-text span ",{
    stagger:0.1,
    x:-200,
    opacity:0,
    
})

.from(".nav-part2 a",{
    stagger:0.25,
    opacity:0,
})


tl2
.from(".one",{
  delay:0.5,
  opacity:0,
  onStart:function() {
    $('.one  ').textillate({ in: { effect: 'bounceIn' } });
}
})
.from(".name",{
  opacity:0,
  onStart:function() {
    $('.name  ').textillate({ in: { effect: 'bounceIn' } });
}
})
.from(".two",{
  opacity:0,
  onStart:function() {
    $('.two  ').textillate({ in: { effect: 'bounceIn' } });
}
})


var tl3 = gsap.timeline({
  scrollTrigger:{
    scroller:"body",
    trigger:"#page2",
    start:"top 0%",
    // end:"top 90%",
    markers:true,
    pin:true,
    scrub:3,
    }
})

tl3
.from(".para h1 span ",{
  
  stagger:0.25,
  opacity:0
},"a")
.to(".panda",{
  transform: "translateX(1000%)",
  duration:200,
  
},"a")
function mouseMove(){
var mouse = document.querySelector(".mouse")

document.querySelector(".Text-part").addEventListener("mousemove",function(e){
    gsap.to(".mouse",{
      top:e.y-55+"px",
      left:e.x-55+"px",
      transform: "scale(1)",
      display: "block",
      mixBlendMode:"difference"
    })
  })
  document.querySelector(".Text-part").addEventListener("mouseenter", function(){
    gsap.to(".mouse",{
      transform: "scale(1)",
    })
  })
  document.querySelector(".Text-part").addEventListener("mouseleave", function(){
    gsap.to(".mouse",{
      transform: "scale(0)",
  
  
    })
  })
}
mouseMove()
function download()
{
  document.querySelector('.button').addEventListener('click', function() {
           
    var downloadLink = document.querySelector('#downloadLink');

  
    var fileURL = 'file.png'; 

    downloadLink.setAttribute('href', fileURL);

    downloadLink.click();
});}
download()
