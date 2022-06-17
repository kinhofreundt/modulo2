var GLOBALID = 0;
window.onload = function () {
    listPremiacoes();
    document.getElementById("modal").style.display = 'block';
}

function listPremiacoes() {
    var resultado = GET();
    var lista = '';
    for (var i = 0; i != resultado.length; i++) {
        lista += `<li class="d-flex">
        <i class="fa fa-bookmark" aria-hidden="true"></i>
        <p>${resultado[i].premiacao}
        </p><button class="btn-add" onclick="DELETE(${resultado[i].id})"><i class="fa fa-trash" aria-hidden="true"></i></button>
        <button class="btn-add" onclick="showUpdateTextarea(${resultado[i].id}, '${resultado[i].premiacao}')"><i class="fa fa-pencil" aria-hidden="true"></i></button>
    </li>`;
        $('#list').html(lista);
    }
}
function fecharModal() {
    document.getElementById("modal").style.display = 'none';
}

function GET() {
    var url = "http://127.0.0.1:3071/premiacoes";

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor
    var resultado = JSON.parse(xhttp.response);
    return resultado;
}

function INSERIR() {
    var premiacao = document.getElementById("premio").value;
    $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:3071/inserir',
        data: { premiacao: premiacao },
    }).done(function () {
        closeTextarea();
        listPremiacoes();

    }).fail(function (msg) {
    }).always(function (msg) {
    });

}


function DELETE(id) {
    if (confirm('Confirma a exclusão?')) {
        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:3071/delete',
            data: { id: id },
        }).done(function () {
            listPremiacoes();
        }).fail(function (msg) {

        }).always(function (msg) {

        });
    }
}
function UPDATE() {
    var id = GLOBALID;
    var premiacao = document.getElementById("premioUpdate").value;
    $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:3071/update',
        data: { premiacao: premiacao, id: id },
    }).done(function () {
       GET();
    }).fail(function (msg) {

    }).always(function (msg) {

    });
}

function closeTextarea() {
    document.getElementById("textarea").style.display = "none";
    document.getElementById("premio").value = "";
}

function showTextarea() {
    document.getElementById("textarea").style.display = "block";
}

function closeUpdateTextarea() {
    document.getElementById("updateTextarea").style.display = "none";
    document.getElementById("premioUpdate").value = "";
}

function showUpdateTextarea(id, name) {
    GLOBALID = id;
    document.getElementById("updateTextarea").style.display = "block";
    document.getElementById("premioUpdate").value = name;
}