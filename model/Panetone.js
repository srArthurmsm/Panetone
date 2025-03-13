export default class Panetone {

    constructor(raio, altura) {
        this.raio = raio
        this.altura = altura

    }
    calcularVolume(){
        return Math.PI * this.raio * this.raio * this.altura;
    }

    calcularMassa(){
        return this.densidade * this.calcularVolume
    }

}