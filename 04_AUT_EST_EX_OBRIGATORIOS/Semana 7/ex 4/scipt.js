function calcular(){
    let valor = 0
    let valorpessoa = 0
    let periodo = document.querySelector('#periodo').value
    let pessoas = parseFloat(document.getElementById("pessoas").value)
    if (periodo == 1){
        if (pessoas <= 50){
            valor=pessoas*200
            valorpessoa=200
        } else {
            valor=pessoas*(200*0.6)
            valorpessoa=200*0.6
        }
    } else{
        if(pessoas <= 50){
            valor=pessoas*100
            valorpessoa=100
        } else {
            valor=pessoas*(100*0.8)
            valorpessoa=100*0.8
        }
    }
    document.getElementById("valor").innerHTML=valor
    document.getElementById("valorpessoa").innerHTML=valorpessoa
}