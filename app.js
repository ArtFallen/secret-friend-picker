// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []
function agregarAmigo() {
  // La función 'agregarAmigo' agrega un amigo al arreglo 'amigos'.
  // Si el nombre ya existe en el arreglo, no se debe agregar nuevamente (no se permiten duplicados).
  // La función retorna el arreglo actualizado.
  nombre = document.getElementById("amigo").value;
  if (nombre == ""){
    alert("Por favor, inserte un nombre.")
  }
  else if (!amigos.includes(nombre)) {
    amigos.push(nombre);
  }
  document.getElementById("amigo").value = ""
  mostrarAmigos()
}

function mostrarAmigos() {
    // La función 'mostrarAmigos' muestra por separado cada uno de los amigos del arreglo 'amigos'.
    lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;                   
        lista.appendChild(li);   
    })
    
}
function sortearAmigo() {
  // La función 'elegirAmigo' selecciona y retorna un amigo al azar del arreglo 'amigos'.
  if (amigos.length === 0) {
    alert("Aún no tienes amigos :(");
    return;
  }
  const indice = Math.floor(Math.random() * amigos.length);
  const amigoSeleccionado = amigos[indice];
  document.getElementById("resultado").innerHTML = "Tu amigo seleccionado es: " + amigoSeleccionado;
}