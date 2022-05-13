"use strict";
exports.__esModule = true;
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, model, trademark, sdSize, color, is5G, cameraNumber, price) {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    Mobile.prototype.Print = function () {
        console.log("Nombre:" + (this.name) + "\n" +
            "Modelo: " + (this.model) + "\n" +
            "Marca: " + (this.trademark) + "\n" +
            "Almacenamiento: " + (this.sdSize) + "\n" +
            "Color: " + (this.color) + "\n" +
            "Tiene 5G?: " + (this.is5G) + "\n" +
            "Número de camaras: " + (this.cameraNumber) + "\n" +
            "Precio: " + (this.price) + "\n");
    };
    Mobile.prototype.getCameraNum = function () {
        return this.cameraNumber;
    };
    Mobile.prototype.setCameraNum = function (cameraNumber) {
        this.cameraNumber = cameraNumber;
    };
    Mobile.prototype.set5G = function (is5G) {
        this.is5G = is5G;
    };
    Mobile.prototype.get5G = function () {
        return this.is5G;
    };
    return Mobile;
}());
exports.Mobile = Mobile;
