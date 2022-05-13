 export class Mobile{
    public name:string;
    public model:string;
    public trademark:string;
    public sdSize:string;
    public color:string;
    public is5G:boolean;
    public cameraNumber:number;
    public price:number;

            constructor(name:string,model:string,trademark:string,sdSize:string,color:string,is5G:boolean,cameraNumber:number,price:number){
               this.name = name;
               this.model = model;
               this.trademark = trademark;
               this.sdSize = sdSize;
               this.color = color;
               this.is5G = is5G;
               this.cameraNumber = cameraNumber;
               this.price = price;
            }

            
            public Print(){
               console.log("Nombre:" + (this.name) + "\n" + 
               "Modelo: " + (this.model)+ "\n" + 
               "Marca: " + (this.trademark) + "\n" + 
               "Almacenamiento: " + (this.sdSize) + "\n" + 
               "Color: " + (this.color) + "\n" + 
               "Tiene 5G?: " + (this.is5G) + "\n" + 
               "Número de camaras: " + (this.cameraNumber) + "\n" + 
               "Precio: " + (this.price) + "\n");
            }

            public getCameraNum():number{
               return this.cameraNumber;
            }
            
            public setCameraNum(cameraNumber:number){
               this.cameraNumber = cameraNumber;
            }

            public set5G(is5G:boolean){
            this.is5G = is5G;
            }

            public get5G():boolean{
               return this.is5G;
            }
            
            
      
}