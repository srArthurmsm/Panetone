export default class Panetone {

    constructor(raio, altura) {
        this.raio = raio
        this.altura = altura

    }
    densidade = 0.7
    calcularVolume(){
        return Math.PI * this.raio * this.raio * this.altura;
    }

    calcularMassa(){
        return this.densidade * this.calcularVolume
    }

}