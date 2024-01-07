const uri = "http://localhost:8000/";
let endpoint = null;

function funcao1() {
    this.endpoint = "funcao1";
    const elemento = document.querySelector("#modal");

    elemento.classList.contains("display-none") ? abrirModal(elemento) : null;
}

function abrirModal(elemento) {
    elemento.classList.add("display-flex");
    elemento.classList.remove("display-none");
}

function fecharModal() {
    const elemento = document.querySelector("#modal");
    elemento.classList.add("display-none");
    elemento.classList.remove("display-flex");

    document.getElementsByClassName("input-container")[0].classList.remove("d-flex");
    document.getElementsByClassName("input-container")[0].classList.add("d-none");
}

function funcao2() {
    this.endpoint = "funcao2";
}

function funcao3() {
    this.endpoint = "funcao3";
}

function funcao4() {
    this.endpoint = "funcao4";
}


// (
//     async () => {
//         try {
//             var response = await fetch(url + endpoint);
//             var data = await response.json();
//             console.log(data);
//         } catch (e) {
//             console.log('Booo', e);
//         }
//     }
// )();

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

    if (document.getElementsByClassName("input-container")[0].classList.contains("d-none")) {
        document.getElementsByClassName("input-container")[0].classList.add("d-flex");
        document.getElementsByClassName("input-container")[0].classList.remove("d-none");
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