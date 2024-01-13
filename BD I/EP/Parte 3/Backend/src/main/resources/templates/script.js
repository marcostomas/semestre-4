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

    const ctx = document.getElementById('dez-atores-mais-premiados');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: 'Os 10 atores mais premiados',
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function funcao3() {
    this.funcaoAtivada = 3;
    this.endpoint = "funcao3";

    this.abrirModal();

    const ctx = document.getElementById('dez-filmes-mais-premiados');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Coluna 1', 'Coluna 2', 'Coluna 3'],
            datasets: [{
                label: 'Os 10 filmes mais premiados',
                data: [3, 3, 3, 3],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function funcao4() {
    this.funcaoAtivada = 4;
    this.endpoint = "funcao4";

    this.abrirModal();

    const ctx = document.getElementById('dez-filmes-maior-arrecadacao');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Elisa', 'Leonardo', 'Marcos', 'Rafael'],
            datasets: [{
                label: 'Os 10 filmes com maior arrecadação',
                data: [10, 10, 10, 10],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function funcao5() {
    this.funcaoAtivada = 5;
    this.endpoint = "funcao5";

    const lista = document.getElementById("nominados-melhor-ator-todos-eventos");

    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", uri + endpoint, true);
    xhttp.onreadystatechange = function () {//Função a ser chamada quando a requisição retornar do servidor
        if (xhttp.readyState == 4 && xhttp.status == 200) {//Verifica se o retorno do servidor deu certo
            for (let i = 0; i < 100; i++) {
                let novoItem = document.createElement("li")
                novoItem.innerText = xhttp.responseText[0]
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

    abrirModal();
}


function abrirModal() {
    const elemento = document.querySelector("#modal");
    elemento.classList.add("display-flex");
    elemento.classList.remove("display-none");

    switch (funcaoAtivada) {
        case 1:
            document.getElementById("func1").classList.add("display-flex");
            document.getElementById("func1").classList.remove("display-none");
            break;
        case 2:
            document.getElementById("func2").classList.add("display-flex");
            document.getElementById("func2").classList.remove("display-none");
            break;
        case 3:
            document.getElementById("func3").classList.add("display-flex");
            document.getElementById("func3").classList.remove("display-none");
            break;
        case 4:
            document.getElementById("func4").classList.add("display-flex");
            document.getElementById("func4").classList.remove("display-none");
            break;
        case 5:
            document.getElementById("func5").classList.add("display-flex");
            document.getElementById("func5").classList.remove("display-none");
            break;
        case 6:
            document.getElementById("func6").classList.remove("display-none");
            document.getElementById("func6").classList.add("display-flex");
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
            document.getElementById("func2").classList.add("display-none");
            document.getElementById("func2").classList.remove("display-flex");
            break;
        case 3:
            document.getElementById("func3").classList.add("display-none");
            document.getElementById("func3").classList.remove("display-flex");
            break;
        case 4:
            document.getElementById("func4").classList.add("display-none");
            document.getElementById("func4").classList.remove("display-flex");
            break;
        case 5:
            document.getElementById("func5").classList.add("display-none");
            document.getElementById("func5").classList.remove("display-flex");
            break;
        case 6:
            document.getElementById("func6").classList.add("display-none");
            document.getElementById("func6").classList.remove("display-flex");

            document.getElementById("premio").value = '';

            document.getElementById("nominados-por-premio").classList.add("display-none");
            document.getElementById("nominados-por-premio").classList.remove("display-flex");
            document.getElementById("nominados-por-premio").innerHTML = '';

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
        novo_input.setAttribute("name", "valor-2");
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
        novo_input.setAttribute("name", "valor-2");
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


function buscarLista() {
    const input = document.getElementById("premio");

    if (input.value !== '') {
        let xhttp = new XMLHttpRequest();
        xhttp.open("GET", uri + endpoint, true);
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                console.log(xhttp.responseText);
            }
        }

        const lista = document.getElementById("nominados-por-premio");
        lista.classList.add("display-flex");
        lista.classList.remove("display-none");

        for (let i = 0; i < 50; i++) {
            let novoItem = document.createElement("li")
            novoItem.innerText = xhttp.responseText[0]
            lista.appendChild(novoItem);
        }

        input.value = '';

    } else
        return;
}