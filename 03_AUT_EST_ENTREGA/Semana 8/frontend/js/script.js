var GLOBALID = 0;
window.onload = function () {
    GET();
    document.getElementById("modal").style.display = 'block';
}

function fecharModal() {
    document.getElementById("modal").style.display = 'none';
}

function GET() {
    $.ajax({
        url: 'http://127.0.0.1:3071/premiacoes',
        type: 'GET',
        success: data => {
            var lista = '';
            data.forEach(element => {
                lista += `<li class="d-flex">
                <i class="fa fa-bookmark" aria-hidden="true"></i>
                <p>${element.premiacao}
                </p><button class="btn-add" onclick="DELETE(${element.id})"><i class="fa fa-trash" aria-hidden="true"></i></button>
                <button class="btn-add" onclick="showUpdateTextarea(${element.id}, '${element.premiacao}')"><i class="fa fa-pencil" aria-hidden="true"></i></button>
            </li>`;
            });
            $('#list').html(lista);
        }
    });

}

function INSERIR() {
    var premiacao = document.getElementById("premio").value;
    $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:3071/inserir',
        data: { premiacao: premiacao },
    }).done(function () {
        closeTextarea();
        GET();

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
            GET();
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