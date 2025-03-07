console.log("ejecutando el sistema");
function saludar() {
    let nombre = prompt("¿Cuál es tu nombre?");
    if (nombre) {
        alert("¡Hola, vamos a jugar " + nombre + "!");
    } else {
        alert("¡Hola, desconocido!");
    }
}

saludar();
let amigo=[];
function agregarAmigo (){
    let inputAmigo=document.getElementById("amigo");
    let nombreAmigo=inputAmigo.value; 
    if (!nombreAmigo){
        alert("Debes ingresar un nombre");
        return;
    }
amigo.push(nombreAmigo);
console.log(amigo);
inputAmigo.value="";
nombreAmigo.value="";
inputAmigo.focus();
renderizarAmigos();
}
function renderizarAmigos(){

    let listaAmigos=document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    for(let i=0; i<amigo.length;i++){
let item=document.createElement("li");
item.textContent=amigo[i];
listaAmigos.appendChild(item);
    }
}
function sortearAmigo(){
    if(amigo.length===0){
        alert("no hay amigos para sortear");
        return;
    }

let amigoSorteado=amigo[parseInt(Math.random()*amigo.length )];
console.log("valor: " + amigoSorteado);
let resultado=document.getElementById ("resultado");
resultado.innerHTML=(`El amigo sorteado es: ${amigoSorteado}`);
let limpiarLista=document.getElementById("listaAmigos");
limpiarLista.innerHTML=""; 
}
