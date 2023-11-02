window.addEventListener("DOMContentLoaded", function(){
    
    let newLi = document.createElement("li");
    let newLiText = document.createTextNode("sucre");
    
    newLi.appendChild(newLiText);
    
    let ul = document.getElementById("ingredients"); 
         ul.appendChild(newLi); 
});