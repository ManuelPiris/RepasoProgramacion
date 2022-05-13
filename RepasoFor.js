"use strict";
//EJERCICIO 1
exports.__esModule = true;
exports.par = exports.suma = void 0;
function signoZodiaco() {
    var mes = 5;
    var dia = 4;
    var signo = "";
    if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 19)) {
        signo = 'Aries';
    }
    else if ((mes == 4 && dia >= 20) || (mes == 5 && dia <= 20)) {
        signo = 'Tauro';
    }
    else if ((mes == 5 && dia >= 21) || (mes == 6 && dia <= 20)) {
        signo = 'Géminis';
    }
    else if ((mes == 6 && dia >= 21) || (mes == 7 && dia <= 22)) {
        signo = 'Cáncer';
    }
    else if ((mes == 7 && dia >= 23) || (mes == 8 && dia <= 22)) {
        signo = 'Leo';
    }
    else if ((mes == 8 && dia >= 23) || (mes == 9 && dia <= 22)) {
        signo = 'Virgo';
    }
    else if ((mes == 9 && dia >= 23) || (mes == 10 && dia <= 22)) {
        signo = 'Libra';
    }
    else if ((mes == 10 && dia >= 23) || (mes == 11 && dia <= 21)) {
        signo = 'Escorpio';
    }
    else if ((mes == 11 && dia >= 22) || (mes == 12 && dia <= 21)) {
        signo = 'Sagitario';
    }
    else if ((mes == 12 && dia >= 22) || (mes == 1 && dia <= 20)) {
        signo = 'Capricornio';
    }
    else if ((mes == 1 && dia >= 21) || (mes == 2 && dia <= 19)) {
        signo = 'Acuario';
    }
    else if ((mes == 2 && dia >= 20) || (mes == 3 && dia <= 20)) {
        signo = 'Piscis';
    }
    return signo;
}
console.log(signoZodiaco());
//EJERCICIO 4
function reverse(s) {
    return s.split("").reverse().join("");
}
var sss = reverse("!!sonem adeuq aY");
console.log(sss);
//EJERCICIO 5
function arcoiris(arco) {
    for (var color in arco) {
        if (arco[color] == "Violeta" || arco[color] == "Añil" || arco[color] == "Cian"
            || arco[color] == "Verde" || arco[color] == "Amarillo" || arco[color] == "Naranja" || color == "Rojo") {
            console.log("El color - " + (arco[color]) + " está en el arcoiris");
        }
        else {
            console.log("El color - " + (arco[color]) + " no existe en los colres del arcoiris");
        }
    }
}
arcoiris(["Rosa"]);
arcoiris(["Verde"]);
//EJERCICIO 6 LO COMENTO PORQUE AL HACERLOS POR SEPARADO Y LUEGO JUNTARLOS ME DA ERROR AL COMPILARLO//
/*function par(array:number[]):void{
    let correcto:boolean = false;
    let i:number =0;

    while(!correcto && i<array.length){
        if(array[i]%2 == 0){
            correcto = true;
        }
            i++;
    }
 (correcto)?console.log("Si existe numero par"):console.log("No existe numero par");
}

par([7,9,4,2,3,8]);*/
//EJERCICIO 8
function suma(array) {
    var suma = 0;
    for (var i = 0; i < array.length; i++) {
        suma += array[i].length;
    }
    return suma;
}
exports.suma = suma;
//console.log(suma(["Pepa","Laura","Aitana","Zacarias"]));
//EJERCICIO 9
function par(numero) {
    var resultado = "";
    if (numero % 2 == 0) {
        resultado = "El número es Par";
    }
    else {
        resultado = "El número es Impar";
    }
    return resultado;
}
exports.par = par;
//console.log(par(20));
//console.log(par(43));
//EJERCICIO 10
//import {suma} from "./sumaNumero8";
//import {par} from "./par9";
function par2(array) {
    var cuenta = suma(array);
    var resultado = par(cuenta);
    return resultado;
}
console.log(par2(["Casa", "Coche", "Ciudad", "Cesta"]));
console.log(par2(["Barco", "Baca", "Bicicleta", "Balon", "Bisisesto", "Brasil"]));
console.log(par2(["Venezuela", "Veneno", "Voltaje"]));
