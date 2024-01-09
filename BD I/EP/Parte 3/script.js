const uri = "http://localhost:8000/";
var endpoint = null;
var funcaoAtivada = null;

function funcao1() {
    this.funcaoAtivada = 1;
    this.endpoint = "funcao1";

    this.abrirModal();
}

function funcao2() {
    this.funcaoAtivada = 2;
    this.endpoint = "funcao2";

    this.abrirModal();
}

function funcao3() {
    this.funcaoAtivada = 3;
    this.endpoint = "funcao3";

    this.abrirModal();
}

function funcao4() {
    this.funcaoAtivada = 4;
    this.endpoint = "funcao4";

    this.abrirModal();
}

function funcao5() {
    this.funcaoAtivada = 5;
    this.endpoint = "funcao5";

    const lista = document.getElementById("nominados-todos-eventos");

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", uri + endpoint, true);
    xhttp.onreadystatechange = function () {//Função a ser chamada quando a requisição retornar do servidor
        if (xhttp.readyState == 4 && xhttp.status == 200) {//Verifica se o retorno do servidor deu certo
            for (let i = 0; i < 100; i++) {
                let novoItem = document.createElement("li").innerText = xhttp.responseText[0]
                lista.appendChild(novoItem);
                console.log(lista);
            }
        }
    }

    this.abrirModal();
}

function funcao6() {
    this.funcaoAtivada = 6;
    this.endpoint = "funcao6";

    const elemento = document.querySelector("#modal");
    elemento.classList.contains("display-none") ? abrirModal(elemento, 3) : null;
}


function abrirModal() {
    const elemento = document.querySelector("#modal");
    elemento.classList.add("display-flex");
    elemento.classList.remove("display-none");

    switch (funcaoAtivada) {
        case 1:
            document.getElementById("func1").classList.add("display-flex")
            document.getElementById("func1").classList.remove("display-none")
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            document.getElementById("func5").classList.add("display-flex")
            document.getElementById("func5").classList.remove("display-none")
            break;
        case 6:
            break;
        default:
            break;
    }
}

function fecharModal() {
    switch (funcaoAtivada) {
        case 1:
            document.getElementById("func1").classList.add("display-none");
            document.getElementById("func1").classList.remove("display-flex");

            document.getElementById("func1-forms").classList.add("display-none")
            document.getElementById("func1-forms").classList.remove("display-flex")
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            document.getElementById("func4").classList.remove("display-flex");
            document.getElementById("func4").classList.add("display-none");
            break;
        case 5:
            document.getElementById("func5").classList.remove("display-flex");
            document.getElementById("func5").classList.add("display-none");
            break;
        case 6:
            break;
        default:
            break

    }

    this.funcaoAtivada = 0;

    const elemento = document.querySelector("#modal");
    elemento.classList.add("display-none");
    elemento.classList.remove("display-flex");
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function abrirDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function escolhaTipo(tipo) {
    const span = document.getElementById("nome-span");

    if (document.getElementsByClassName("input-container")[0].classList.contains("display-none")) {
        document.getElementsByClassName("input-container")[0].classList.add("display-flex");
        document.getElementsByClassName("input-container")[0].classList.remove("display-none");
    }

    if (tipo === 1) {
        span.innerText = "Nome da Pessoa:";
        document.getElementById("novo-input") !== null ? document.getElementById("novo-input").remove() : null;
        document.getElementById("novo-span") !== null ? document.getElementById("novo-span").remove() : null;

    }
    else if (tipo === 2) {
        span.innerText = "Nome do Evento:";

        document.getElementById("novo-input") !== null ? document.getElementById("novo-input").remove() : null;
        document.getElementById("novo-span") !== null ? document.getElementById("novo-span").remove() : null;

        const novo_input = document.createElement("input");
        novo_input.setAttribute("type", "text");
        novo_input.setAttribute("name", "insercao-dados");
        novo_input.setAttribute("placeholder", "Digite aqui");
        novo_input.setAttribute("style", "margin-top: 1rem;");
        novo_input.setAttribute("id", "novo-input");
        novo_input.classList.add("input-dados");

        const novo_span = document.createElement("span");
        novo_span.setAttribute("style", "margin-top: 1rem;");
        novo_span.setAttribute("id", "novo-span");
        novo_span.innerText = "Nome dos prêmios:";

        document.getElementsByClassName("formulario")[0].insertBefore(novo_input, null);

        console.log(document.getElementById("nome-span"))

        document.getElementById("span-container").insertBefore(novo_span, null);

    }
    else if (tipo === 3) {
        span.innerText = "Nominado(a):";

        document.getElementById("novo-input") !== null ? document.getElementById("novo-input").remove() : null;
        document.getElementById("novo-span") !== null ? document.getElementById("novo-span").remove() : null;
    }
    else if (tipo === 4) {
        span.innerText = "Nome da Premiação:";

        document.getElementById("novo-input") !== null ? document.getElementById("novo-input").remove() : null;
        document.getElementById("novo-span") !== null ? document.getElementById("novo-span").remove() : null;

        const novo_input = document.createElement("input");
        novo_input.setAttribute("type", "text");
        novo_input.setAttribute("name", "insercao-dados");
        novo_input.setAttribute("placeholder", "Digite aqui");
        novo_input.setAttribute("style", "margin-top: 1rem;");
        novo_input.setAttribute("id", "novo-input");
        novo_input.classList.add("input-dados");

        const novo_span = document.createElement("span");
        novo_span.setAttribute("style", "margin-top: 1rem;");
        novo_span.setAttribute("id", "novo-span");
        novo_span.innerText = "Nome dos filmes:";

        document.getElementsByClassName("formulario")[0].insertBefore(novo_input, null);

        console.log(document.getElementById("nome-span"))

        document.getElementById("span-container").insertBefore(novo_span, null);

    }

}