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
})