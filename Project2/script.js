
 
    // Throttling Function
const throttleFunction=(func, delay)=>{

  // Previously called time of the function
  let prev = 0; 
  return (...args) => {
    // Current called time of the function
    let now = new Date().getTime(); 
  
    // Logging the difference between previously 
    // called and current called timings
  //   console.log(now-prev, delay); 
      
    // If difference is greater than delay call
    // the function again.
    if(now - prev> delay){ 
      prev = now;
  
      // "..." is the spread operator here 
      // returning the function with the 
      // array of arguments
      return func(...args);  
    }
  }
};

const profile=document.querySelector("h1")

profile.addEventListener("mousemove", throttleFunction((details)=>{
 

       var div=document.createElement("div")  ;            //making div 
       div.classList.add("imgdiv");
       div.style.top= details.clientY+ 'px';              //setting div in y axis
       div.style.left= details.clientX+ 'px';             //setting in y axis
 
       //image setiing
       var img=document.createElement("img")
       img.setAttribute("src","https://images.unsplash.com/photo-1698005158553-c7653d06e6dc?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
       div.appendChild(img)


       document.body.appendChild(div);
       
        gsap.to(img,{
          y:"0",
          ease: Power3,
          duration: .6
        });
        gsap.to(img,
          {
            y:"100%",
            delay: .6,
            ease:Power2,
            // duration: .2
          })

       setTimeout(function()
       {
        div.remove()                          //once appear then remove 
       },2000)


}, 600));

