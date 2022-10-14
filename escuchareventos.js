const h1  = document.querySelector('h1');
const form = document.querySelector("#form");
const input1  = document.querySelector('#calculo1');
const input2  = document.querySelector('#calculo2');
const btn  = document.querySelector('#btncalcular');
const pResult  = document.querySelector('#result');

/*function btnOnClick() {
    console.log("Escuchando el evento de click");
}*/

//Método
form.addEventListener("submit", sumarInputValues);//evento y función como parámetro

function sumarInputValues(event) {
    event.preventDefault(); //No ejecuta lo que por defecto ejecuta el evento...recargar página por el form
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}