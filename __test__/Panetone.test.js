import Panetone from "../model/Panetone.js"



describe("Testes da classe Panetone", ()=>{
    test("Teste do volume do panetone", ()=>{

        const raio = 8
        const altura = 9
        const volumeEsperado = Math.PI * this.raio * this.raio * this.altura
        const panetone = new Panetone(raio, altura)

        expect(panetone.calcularVolume()).toBeCloseTo(volumeEsperado,2)
    })

    test("Teste do massa do Panetone: ", ()=>{

        const densidade = 0.8
        const massaEsperada = this.densidade * this.calcularVolume
        const panetone = new Panetone(densidade, calcularVolume)

        expect(panetone.calcularMassa()).toBeCloseTo(massaEsperada,2)
    })
    
    test("Teste da quantidade e preço ingredientes: ", ()=>{
        
        const quantidadefarinha = (massa * 0.56)
        const preçofarinha = quantidadefarinha * 0.01

        const quantidademanteiga = massa * 0.1
        const preçomanteiga = quantidademanteiga * 0.07

        const quantidadeoliva = massa * 0.04
        const preçooliva = quantidadeoliva * 2.95

        const quantidadelegumes = Math.ceil(massa  * 0.125)
        const preçolegumes = quantidadelegumes * 3.56

        const quantidadesal = massa * 0.004
        const preçosal = quantidadesal * 0.004

        const quantidadeovo = Math.ceil(massa * 0.14)
        const preçoovo = quantidadeovo * 1.4

        const panetone = new Panetone(massa, preçofarinha, preçolegumes, preçomanteiga, preçooliva, preçoovo, preçosal, quantidadefarinha, quantidadelegumes, quantidademanteiga, quantidadeoliva, quantidadeovo, quantidadesal)

        expect(panetone.calcularFarinha()).toBeCloseTo(preçofarinha,2)
        expect(panetone.calcularManteiga()).toBeCloseTo(preçomanteiga,2)
        expect(panetone.calcularOliva()).toBeCloseTo(preçooliva,2)
        expect(panetone.calcularLegumes()).toBeCloseTo(preçolegumes,2)
        expect(panetone.calcularSal()).toBeCloseTo(preçosal,2)
        expect(panetone.calcularOvo()).toBeCloseTo(preçoovo,2)
    })
})