const h1 = documen.querySelector("h1");
const p = document.querySelector("p");
const parrafito = document.getElementsByClassName("parrafito");
const pid = document.getElementById("pid");
const input = document.querySelector("input");

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

//Modificar HTML desde JS
h1.innerHTML = "Patito"; //Sobreescribe código HTML
h1.innerText = "Patito <br> Feo";
console.log (h1.getAtribute("pantalla")); //lle y modifica atributos de los elementos

h1.classList.add("rojo");//Agrega elemento desde JS
h1.classList.remove("verde");//Elimina la clase del HTML
//h1.classList.toggle("verde");
//h1.classList.contains("verde");

input.value = "456"

//Como crear elemento desde 0

console.log(document.createElement("img"));

const img = document.createElement("img");
img.setAttribute("src", "https://images.pexels.com/photos/9969498/pexels-photo-9969498.jpeg?auto=compress&cs=tinysrgb&w=400");
console.log(img);

pid.innerHTML = ""; //Elimina la imagen
pid.append(img);