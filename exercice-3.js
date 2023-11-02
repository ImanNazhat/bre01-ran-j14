window.addEventListener("DOMContentLoaded", function(){
    
    let paragraphe = document.querySelector("p");
    
    let link = document.createElement('a');
    link.href = 'https://google.com';
    link.textContent = 'ici';
    
    paragraphe.appendChild(link);
    
});