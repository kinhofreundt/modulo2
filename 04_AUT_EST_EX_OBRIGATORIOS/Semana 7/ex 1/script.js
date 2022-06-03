function somar(){
    let numero1 = parseFloat(document.getElementById("1").value)
    let soma = numero1+1
   document.getElementById("1").value=soma
}

function subtrair(){
    let numero1 = parseFloat(document.getElementById("1").value)
    let diminuir = numero1-1
    document.getElementById("1").value=diminuir
}