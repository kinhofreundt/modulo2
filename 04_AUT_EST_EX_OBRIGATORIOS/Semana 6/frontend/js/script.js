window.onload = function () {
    var resultado = GET();
    var lista = '';
    for(var i=0; i!= resultado.length ;i++){
        debugger
        lista += `<li class="d-flex">
        <i class="fa fa-bookmark" aria-hidden="true"></i>
        <p>${resultado[i].premiacao}
        </p>
    </li>`;
        $('#list').html(lista);
    }
        
    
    
    document.getElementById("modal").style.display = 'block';

}
function fecharModal(){
    document.getElementById("modal").style.display = 'none'; 
}

function GET(){
    var url = "http://127.0.0.1:3061/premiacoes";

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor
    var resultado = JSON.parse(xhttp.response);
    return resultado;
}