function criar(){
    nalunos = document.getElementById("alunos").value
    nprova=[]
    ntrabalho=[]
    var lista = ""
    for (let i = 1 ; i <= nalunos ; i++){
        lista+='<input type ="number" placeholder ="prova" id="p'+i + '"></input><input type ="number" placeholder ="trabalho" id="t'+i + '"></input> <br>'
    }
    document.getElementById("1").innerHTML=lista
}

function calc(){
    mediasinviduais=[]
    mediageral=""
    mediaprova=""
    mediatrabalho=""
    for (let i = 1 ; i <= nalunos ; i++){
        nprova.push(Number(document.getElementById("p"+i).value))
        ntrabalho.push(Number(document.getElementById("t"+i).value))
    }
    for (let i = 0 ; i <= nalunos-1 ; i++){
        mediasinviduais.push(Number((nprova[i]*2+ntrabalho[i]*3)/5))
        mediageral=Number((mediasinviduais[i]+mediageral))
        mediaprova=Number((nprova[i]+mediaprova))
        mediatrabalho=Number((ntrabalho[i]+mediatrabalho))
    }
    mediageral=parseFloat(mediageral/nalunos)
    mediaprova=parseFloat(mediaprova/nalunos)
    mediatrabalho=parseFloat(mediatrabalho/nalunos)
    maiorprova=Math.max(...nprova)
    menorprova=Math.min(...nprova)
    maiortrabalho=Math.max(...ntrabalho)
    menortrabalho=Math.min(...ntrabalho)

    document.getElementById("mediaindividual").innerHTML=(mediasinviduais)
    document.getElementById("mediageral").innerHTML=(mediageral)
    document.getElementById("mediaprova").innerHTML=(mediaprova)
    document.getElementById("mediatrabalho").innerHTML=(mediatrabalho)
    document.getElementById("maiorprova").innerHTML=(maiorprova)
    document.getElementById("menorprova").innerHTML=(menorprova)
    document.getElementById("maiortrabalho").innerHTML=(maiortrabalho)
    document.getElementById("menortrabalho").innerHTML=(menortrabalho)
}