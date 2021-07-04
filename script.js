function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO]Verifique os dados e tente novamente!')

    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number (fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >=0 && idade < 12){
                //criança
                img.setAttribute('src', 'bebehomem.jpg')
            }else if (idade >= 12 && idade <21){
                //jovem
                img.setAttribute('src', 'homemjovem.jpg')
            }else if(idade <50){
                //adulto
                img.setAttribute('src', 'homenadulto.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'velhohomen.jpg')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 12){
                //criança
                img.setAttribute('src', 'bebemenina.jpg')
            }else if (idade >= 12 && idade <21){
                //jovem
                img.setAttribute('src', 'pexels-monica-turlui-7394120.jpg')
            }else if(idade <50){
                //adulto
                img.setAttribute('src', 'mulheradulta.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'mulhervelha.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}