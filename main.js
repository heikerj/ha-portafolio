window.addEventListener('scroll' , function(){
  
  let animacion1 = document.getElementById("html" )
  let animacion2 = document.getElementById("css" )
  let animacion3 = document.getElementById("js" )
  let poscicion1 = animacion1.getBoundingClientRect().top;
  let poscicion2 = animacion2.getBoundingClientRect().top;
  let poscicion3 = animacion3.getBoundingClientRect().top;
  
  let screensize = window.innerHeight;
  
  
  if (poscicion1 < screensize) {
    
    animacion1.style.width = "100%";
    animacion1.style.animation =  "progress 4s ease-out ";
    
    
 
    
  }
  
  if (poscicion1> screensize) {
    
   animacion1.style.animation = "none"; 
   animacion1.style.width = "0%"; 
}
  
  if (poscicion2 < screensize) {
    
    animacion2.style.width = "60%";
    animacion2.style.animation =  "progress2 4s  ease-out";
    
    
 
    
  }
  
  if (poscicion2> screensize) {
    
   animacion2.style.animation = "none"; 
   animacion2.style.width = "0%@"; 
}

if (poscicion3 < screensize) {
    
    animacion3.style.width = "50%";
    animacion3.style.animation =  "progress3 4s ease-out ";
    
    
 
    
  }
  
  if (poscicion3> screensize) {
    
   animacion3.style.animation = "none"; 
   animacion3.style.width = "0%"; 
}
  
  
}
)
  
