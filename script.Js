function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.querySelector('input#txtano');
    var res = document.querySelector('div#res');

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagem/menino.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','imagem/moco.png')
            } else if (idade < 65) {
                //adulto
                img.setAttribute('src','imagem/homem.png')
            } else {
                //idoso
                img.setAttribute('src','imagem/idoso.png')
            }

        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >=0 &&  idade < 10){
                //criança
                img.setAttribute('src','imagem/menina.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','imagem/moca.png')
            } else if (idade < 65) {
                //adulto
                img.setAttribute('src','imagem/mulher.png')
            } else {
                //idosa
                img.setAttribute('src','imagem/idosa.png')
            }
                

        }
        res.style.textAlign = 'center'
        res.innerHTML = `detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}