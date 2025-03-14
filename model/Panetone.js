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
    calcularFarinha(){
        let quantidadeFarinha = (massa * 0.56)
        return precoFarinha = quantidadeFarinha * 0.01
    }
    calcularManteiga(){
        let quantidadeManteiga = massa * 0.1
        return precoManteiga = quantidadeManteiga * 0.07
    }
    calcularOliva(){
        let quantidadeOliva = massa * 0.04
        return precoOliva = quantidadeOliva * 2.95
    }
    calcularLegumes(){
        let quantidadeLegumes = Math.ceil(massa  * 0.125)
        return precoLegumes = quantidadeLegumes * 3.56
    }
    calcularSal(){
        let quantidadeSal = massa * 0.004
        return precoSal = quantidadeSal * 0.004
    }
    calcularOvo(){
        let quantidadeOvo = Math.ceil(massa * 0.14)
        return precoOvo = quantidadeOvo * 1.4
    }
}