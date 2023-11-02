window.addEventListener("DOMContentLoaded", function(){
    
 /* let paragraphe = document.querySelector("p");
  let a = document.createElement('a');
  let link = document.createTextNode("ici");
  
  a.appendChild(link);
  
   a.title = "ici";
   a.href = "https://www.google.com";*/
   
   
   let paragraphe = document.querySelector("p");
    
    let link = document.createElement('a');
    link.href = 'https://google.com';
    link.textContent = 'ici';
    
    paragraphe.appendChild(link);
  
    
});



