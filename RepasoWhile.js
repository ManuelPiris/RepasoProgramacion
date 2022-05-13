// EJERCICIO 3
var impar = 0;
var conta = 30;
while (impar < conta) {
    impar++;
    if (impar % 2 != 0) {
        console.log("Los numeros son - " + impar);
    }
}
//EJERCICIO 7 
function nombres(array) {
    var nombre = true;
    var i = 0;
    while (nombre && i < array.length) {
        if (array[i][0] != "M") {
            nombre = false;
        }
        i++;
    }
    (nombre) ? console.log("Todos empiezan por M ") : console.log("No todos comienzan por M");
}
nombres(["Maria", "Manuel", "Maite", "Marea"]);
nombres(["Felisa", "Amparo", "Maite", "Marea"]);
