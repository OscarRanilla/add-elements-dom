 // Aquí tu código
 document.getElementById("agregar").addEventListener("click", function(){
    const nuevoElemento = prompt("Introduce un elemento para la lista:");
    if (nuevoElemento) {
        const li = document.createElement("li");
        li.textContent = nuevoElemento;
        document.getElementById("lista").appendChild(li);
    } else {
    alert("No has introducido ningún elemento.");
    }
    });
    
