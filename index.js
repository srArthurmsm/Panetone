
function car(){
    let raio = document.getElementById('raio').value
    let altura = document.getElementById('altura').value
    let res = document.getElementById('res')


    let volume = (Math.PI * raio * raio * altura).toFixed(2)
    let densidade = 0.7
    let massa = (densidade * volume).toFixed(2)

    let quantidadeFarinha = (massa * 0.56)
    let precoFarinha = quantidadeFarinha * 0.01


    quantidadeManteiga = massa * 0.1
    precoManteiga = quantidadeManteiga * 0.07

    quantidadeOliva = massa * 0.04
    precoOliva = quantidadeOliva * 2.95

    quantidadeLegumes = Math.ceil(massa  * 0.125)
    precoLegumes = quantidadeLegumes * 3.56

    quantidadeSal = massa * 0.004
    precoSal = quantidadeSal * 0.004

    quantidadeOvo = Math.ceil(massa * 0.14)
    precoOvo = quantidadeOvo * 1.4
    
    res.innerHTML = "Volume = " + volume + " <br> Massa = " + (massa) + " <br> preço ovo =  $" + precoOvo.toFixed(2) + " <br> farinha = $" + precoFarinha.toFixed(2) + " <br> Manteiga = $" + precoManteiga.toFixed(2) + " <br> Sache de Legumes = $" + precoLegumes.toFixed(2)+ " <br> oleo de oliva = $" + precoOliva.toFixed(2) + " <br> sal = $" + precoSal.toFixed(2)
}