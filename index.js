
function car(){
    let raio = document.getElementById('raio').value
    let altura = document.getElementById('altura').value
    let res = document.getElementById('res')


    let volume = (Math.PI * raio * raio * altura).toFixed(2)
    let densidade = 0.7
    let massa = (densidade * volume).toFixed(2)

    let quantidadefarinha = (massa * 0.56)
    let preçofarinha = quantidadefarinha * 0.01


    quantidademanteiga = massa * 0.1
    preçomanteiga = quantidademanteiga * 0.07

    quantidadeoliva = massa * 0.04
    preçooliva = quantidadeoliva * 2.95

    quantidadelegumes = Math.ceil(massa  * 0.125)
    preçolegumes = quantidadelegumes * 3.56

    quantidadesal = massa * 0.004
    preçosal = quantidadesal * 0.004

    quantidadeovo = Math.ceil(massa / 56)
    preçoovo = quantidadeovo * 1.4
    
    res.innerHTML = "Volume = " + volume + " <br> Massa = " + (densidade * volume).toFixed(2) + " <br> preço ovo =  $" + preçoovo.toFixed(2) + " <br> farinha = $" + preçofarinha.toFixed(2) + " <br> Manteiga = $" + preçomanteiga.toFixed(2) + " <br> Sache de Legumes = $" + preçolegumes.toFixed(2)+ " <br> oleo de oliva = $" + preçooliva.toFixed(2) + " <br> sal = $" + preçosal.toFixed(2)
}