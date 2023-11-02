window.addEventListener("DOMContentLoaded", function(){
    
    const fragment = document.createDocumentFragment();
    const ul = fragment
    .appendChild(document.createElement("section"))
    .appendChild(document.createElement("ul"))
    /*.appendChild(document.createElement("li"));*/
   /* li.textContent = "Pikachu";
    li.textContent = "Salameche";
    li.textContent = "Bulbizarre";
    li.textContent = "Carapuce";*/
    ul.textContent =["Pikachu", "Salameche", "Bulbizarre", "Carapuce"];

    document.body.appendChild(fragment);
    
    
    let pokemons = ["Pikachu", "Salameche", "Bulbizarre", "Carapuce"];
});