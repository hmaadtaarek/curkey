let active = 3;

let mncircle = document.querySelectorAll(".mncircle");
let second = document.querySelectorAll(".second");
let texty = document.querySelectorAll(".text");

gsap.to(mncircle[active-1],{
    backgroundColor:"red",
})
gsap.to(second[active-1],{
    opacity:1,
})
gsap.to(texty[active-1],{
    opacity:1,
})

mncircle.forEach(function(val,index){
    val.addEventListener("click",function(){
        gsap.to(".circle",{
            rotate:(3-(index+1))*12,
            ease:Expo.easeInOut,
            duration:1.5,
        })
    })
        greyout();
        gsap.to(this,{
            backgroundColor:"red",
        })
        gsap.to(second[index-1],{
            opacity:1
        })
        // gsap.to(texty[index],{
        //     opacity:1
        // })
})

function greyout(){
    gsap.to(mncircle,{
        backgroundColor:"white",
    })
    gsap.to(second,{
        opacity:0.3,
    })
    gsap.to(texty,{
        opacity:0,
    }) 
}


gsap.to(".circle",{
    rotate:0,
    opacity:1,
    ease:Expo.easeInOut,
    duration:1.5
})

gsap.to(".mncircle",{
    opacity:0.9,
    ease:Expo.easeInOut,
    duration:1,
    stagger:0.2,
})
var tl = gsap.timeline();
tl.to(".title h1,button,.featured,header h3",{
    opacity:1,
    x:-10,
    ease:Expo.easeInOut,
    duration:1.5,
    stagger:0.2
})