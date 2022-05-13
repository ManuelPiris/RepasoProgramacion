import {Mobile} from "./moviles";


let nokia:Mobile = new Mobile("Nokia", "3210", "Nokia", "128mb", "Negro", false, 1, 150);
let iphone:Mobile =  new Mobile("Iphone3G", "3G", "Apple", "8gb", "Negro", false, 1, 350);
let samsung:Mobile = new Mobile("Samsung Galaxy 10", "Galaxy 10", "Samsung", "128gb", "Azul", true, 3, 800);

nokia.Print();
iphone.Print();
samsung.Print();

nokia.setCameraNum(4);
nokia.set5G(true);
nokia.Print();
