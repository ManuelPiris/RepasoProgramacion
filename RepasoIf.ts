// EJERCICIO 2

class Continentes{

    public paises:string;

            Constructor (){
                this.paises = "";
            }

        public Continent(pais:string):void{
            if(pais == "España" || pais == "Francia" || pais == "Alemania" || pais == "Italia" || pais == "Belgica"){
                console.log("Continente es Europa");
            }
            else if(pais == "Nigeria" || pais == "Senegal" || pais == "Ghana" || pais == "Mali" || pais == "Tanzania"){
                console.log("Continente es Africa");
            }
            else if(pais == "Japon" || pais == "Tailandia" || pais == "China" || pais == "Singapur" || pais == "Filipinas"){
                console.log("Continente es Asia");
            }
            else if(pais == "Canada" || pais == "Brasil" || pais == "Colombia" || pais == "Peru" || pais == "Cuba"){
                console.log("Continente es America");
            }
            else if(pais == "Australia" || pais == "Fiyi" || pais == "Tonga" || pais == "Samoa" || pais == "Palaos"){
                console.log("Continente es Oceania");
            }
        }
}
let continente = new Continentes();
continente.Continent("España");