var mysheet=document.querySelector("#sheet")
// var set=document.querySelector("#star")
// var set1=document.querySelector("#star2")
mysheet.addEventListener("mousemove",function(details)
{    
    var a=mysheet.getBoundingClientRect().width/2
    var b=mysheet.getBoundingClientRect().height/2

     
    var value =gsap.utils.mapRange(0,window.innerWidth,a,window.innerWidth- a,details.clientX);
    var value2 =gsap.utils.mapRange(0,window.innerHeight,b,window.innerHeight- b,details.clientY);

//     // console.log(window.innerWidth)
    gsap.to(mysheet,{
     
        left: value +"px",
        top: value2+"px",
        ease: Power3,
    });
})
var set=document.querySelector("#star")
set.addEventListener("mousemove",function(details)
{    
    var a1=set.getBoundingClientRect().width/2
    var b1=set.getBoundingClientRect().height/2

     
    var value1 =gsap.utils.mapRange(0,window.innerWidth,a1,window.innerWidth- a1,details.clientX);
    var value3 =gsap.utils.mapRange(0,window.innerHeight,b1,window.innerHeight- b1,details.clientY);

//     // console.log(window.innerWidth)
    gsap.to(set,{
     
        left: value1 +"px",
        top: value3+"px",
        ease: Power3,
    });
})

var set1=document.querySelector("#star2")
set1.addEventListener("mousemove",function(details)
{    
    var a2=set1.getBoundingClientRect().width/2
    var b2=set1.getBoundingClientRect().height/2

     
    var value4 =gsap.utils.mapRange(0,window.innerWidth,a2,window.innerWidth- a2,details.clientX);
    var value5 =gsap.utils.mapRange(0,window.innerHeight,b2,window.innerHeight- b2,details.clientY);

//     // console.log(window.innerWidth)
    gsap.to(set1,{
     
        left: value4 +"px",
        top: value5+"px",
        ease: Power3,
    });
})

