window.addEventListener("DOMContentLoaded", function(){
    
    let newh = document.createElement("h2");
    let newhText = document.createTextNode("Le titre de la deuxième section");
    
    newh.appendChild(newhText);
    
    
    let newp = document.createElement("p");
    let newpText = document.createTextNode("Le paragraphe de la deuxième section");
    
    newp.appendChild(newpText);
    
    
    let section = document.querySelector("body > section:last-of-type"); 
         section.appendChild(newh);
         section.appendChild(newp); 
    
    
   
  
});