const valorContador = document.getElementById("contador");
const botonIncrementar = document.getElementById("incrementar");
const botonDecrementar = document.getElementById("decrementar");

let contador = 0;

botonIncrementar.addEventListener('click', function() {
    contador++;
    valorContador.textContent = contador;

    if(valorContador.textContent >= 10) {
        valorContador.style.color = "blue";
    } else {
        valorContador.style.color = "black";
    }
});

botonDecrementar.addEventListener('click', function() {
    contador--;
    valorContador.textContent = contador;

    if(valorContador.textContent < 10) {
        valorContador.style.color = "black";
    } else {
        valorContador.style.color = "blue";
    }
});