// EJERCICIO 3

let impar:number = 0;
let conta:number = 30;
  while (impar<conta){
    impar++;
    if (impar %2 !=0){
      console.log("Los numeros son - "+ impar);
    }
  }

//EJERCICIO 7 

function nombres(array:string[]):void{
    let nombre:boolean = true;
    let i:number = 0;
    while(nombre && i<array.length){
        if(array[i][0] != "M"){
            nombre = false;
        }
        i++;
    }
    (nombre)?console.log("Todos empiezan por M "):console.log("No todos comienzan por M");
}

nombres(["Maria","Manuel","Maite","Marea"]);
nombres(["Felisa","Amparo","Maite","Marea"]);