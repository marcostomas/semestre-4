const uri = "http://localhost:8000/";
var endpoint = null;
var funcaoAtivada = null;
var tipoAtual = 0;
var tipoAnterior = 0;

function funcao1() {
    if(tipoAtual !== 0){
        return;
    }
    this.funcaoAtivada = 1;

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
            var limit = null;
            let listId = null;
            if(tipoAtual !== 0){
                switch(tipoAtual){
                    case 1:
                        listId = ["nome", "anosCinema", "site", "sexo", 
                        "anoInicio", "anoNascimento", "nomeVerdadeiro", "estado", "funcoes"];
                        
                        limit = 9;
                        break;
                    case 2:
                        listId = ["nome", "nacionaliddade", "tipoEvento", "numeroJurados",
                        "anoInicio"];

                        limit = 5;
                        break;
                    case 3:
                        listId = ["nomePremio", "nomeEvento", "anoEdicao"];
                        
                        limit = 3;
                        break;
                    case 4:
                        listId = ["nomeArtistico", "nomePremio", "nomeEvento", "anoEdicao", "tituloOriginal",
                                  "anoDeProducao", "ganhou"];
                        
                        limit = 7;
                        break;
                    case 5:
                        listId = ["nomeEvento", "ano", "dataEvento", "localEvento"];
                        limit = 3;
                        break;
                    case 6:
                        listId = ["tituloOriginal", "anoDeProducao", "tituloPtBr", "tema", "tipo",
                        "arrecadacao1Ano", "idiomaOriginal", "totalArrecadado", "nacionalidade"];
                        
                        limit = 9;
                        break;
                    case 7:
                        listId = ["nomeArtistico", "tituloFilme", "anoProducao", "funcoes"];
                        limit = 4;
                        break;
                    case 8:
                        listId = ["tituloFilme", "anoDeProducao", "nomePremio", "nomeEvento", "anoEdicao"];
                        limit = 5;
                        break;
                    case 9:
                        listId = ["nomeArtistico", "nomeEvento", "anoEdicao"];
                        limit = 3;
                        break;
                }
                console.log(listId);
                for(i = 0;i < limit; i++){
                    document.getElementById(`${listId[i]}-span`).remove();
                    document.getElementById(`${listId[i]}-input`).remove();
                }
                tipoAtual = 0;
                tipoAnterior = 0;
            }
            document.getElementById("func1").classList.add("display-none");
            document.getElementById("func1").classList.remove("display-flex");

            document.getElementById("func1-forms").classList.add("display-none");
            document.getElementById("func1-forms").classList.remove("display-flex");
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
    tipoAnterior = tipoAtual;
    tipoAtual = tipo;

    if(tipoAnterior !== 0){
        switch(tipoAnterior){
            case 1:
                listId = ["nome", "anosCinema", "site", "sexo", 
                "anoInicio", "anoNascimento", "nomeVerdadeiro", "estado", "funcoes"];
                
                limit = 9;
                break;
            case 2:
                listId = ["nome", "nacionalidade", "tipoEvento", "numeroJurados",
                "anoInicio"];

                limit = 5;
                break;
            case 3:
                listId = ["nomePremio", "nomeEvento", "anoEdicao"];
                
                limit = 3;
                break;
            case 4:
                listId = ["nomeArtistico", "nomePremio", "nomeEvento", "anoEdicao", "tituloOriginal",
                          "anoDeProducao", "ganhou"];
                
                limit = 7;
                break;
            case 5:
                listId = ["nomeEvento", "ano", "dataEvento", "localEvento"];
                limit = 4;
                break;
            case 6:
                listId = ["tituloOriginal", "anoDeProducao", "tituloPtBr", "tema", "tipo",
                          "arrecadacao1Ano", "idiomaOriginal", "totalArrecadado", "nacionalidade"];
                
                limit = 9;
                break;
            case 7:
                listId = ["nomeArtistico", "tituloFilme", "anoDeProducao", "funcoes"];
                limit = 4;
                break;
            case 8:
                listId= ["tituloFilme", "anoDeProducao", "nomePremio", "nomeEvento", "anoEdicao"];
                limit = 5;
                break;
            case 9:
                listId = ["nomeArtistico", "nomeEvento", "anoEdicao"];
                limit = 3;
                break;
        }
        console.log(listId);
        for(i = 0;i < limit; i++){
            document.getElementById(`${listId[i]}-span`).remove();
            document.getElementById(`${listId[i]}-input`).remove();
        }
    }

    if (document.getElementsByClassName("input-container")[0].classList.contains("display-none")) {
        document.getElementsByClassName("input-container")[0].classList.add("display-flex");
        document.getElementsByClassName("input-container")[0].classList.remove("display-none");
    }

    if (tipo === 1) {

        let listId = ["nome", "anosCinema", "site", "sexo", 
                      "anoInicio", "anoNascimento", "nomeVerdadeiro", "estado", "funcoes"];

        let listMessage = ["Nome: ", "Anos de cinema: ", "Site: ", "Sexo: ", 
                      "Ano de início: ", "Ano de nascimento: ", "Nome verdadeiro: ", "Estado Atual: ", "Funcoes: "];

        let listTypes = ["text", "number", "url", "text", "number", "number", "text", "text", "text"];

        for(let i = 0; i < 9; i++){
            const novo_input = document.createElement("input");
            novo_input.setAttribute("type", `${listTypes[i]}`);
            novo_input.setAttribute("name", "valor-2");
            novo_input.setAttribute("placeholder", "Digite aqui");
            novo_input.setAttribute("style", "margin-top: 1rem;");
            novo_input.setAttribute("id", `${listId[i]}-input`);
            novo_input.classList.add("input-dados");
    
            const novo_span = document.createElement("span");
            novo_span.setAttribute("style", "margin-top: 1rem;");
            novo_span.setAttribute("id", `${listId[i]}-span`);
            novo_span.innerText = `${listMessage[i]}`;
    
            
            document.getElementsByClassName("formulario")[0].insertBefore(novo_input, null);
            document.getElementById("span-container").insertBefore(novo_span, null);
        }
    }
    else if (tipo === 2) {
        
        let listId = ["nome", "nacionalidade", "tipoEvento", "numeroJurados",
                      "anoInicio"];

        let listMessage = ["Nome: ", "Nacionalidade: ", "Tipo: ", "Número de jurados: ",
                           "Ano de início"];

        let listTypes = ["text", "text", "text", "number", "number"];

        for(let i = 0; i < 5; i++){
            const novo_input = document.createElement("input");
            novo_input.setAttribute("type", `${listTypes[i]}`);
            novo_input.setAttribute("name", "valor-2");
            novo_input.setAttribute("placeholder", "Digite aqui");
            novo_input.setAttribute("style", "margin-top: 1rem;");
            novo_input.setAttribute("id", `${listId[i]}-input`);
            novo_input.classList.add("input-dados");
    
            const novo_span = document.createElement("span");
            novo_span.setAttribute("style", "margin-top: 1rem;");
            novo_span.setAttribute("id", `${listId[i]}-span`);
            novo_span.innerText = `${listMessage[i]}`;
    
            
            document.getElementsByClassName("formulario")[0].insertBefore(novo_input, null);
            document.getElementById("span-container").insertBefore(novo_span, null);
        }

    }
    else if (tipo === 3) {

        let listId = ["nomePremio", "nomeEvento", "anoEdicao"];

        let listMessage = ["Nome do premio: ", "Nome do evento: ", "Ano da edicao: "];

        let listTypes = ["text", "text", "number"];

        for(let i = 0; i < 3; i++){
            const novo_input = document.createElement("input");
            novo_input.setAttribute("type", `${listTypes[i]}`);
            novo_input.setAttribute("name", "valor-2");
            novo_input.setAttribute("placeholder", "Digite aqui");
            novo_input.setAttribute("style", "margin-top: 1rem;");
            novo_input.setAttribute("id", `${listId[i]}-input`);
            novo_input.classList.add("input-dados");
    
            const novo_span = document.createElement("span");
            novo_span.setAttribute("style", "margin-top: 1rem;");
            novo_span.setAttribute("id", `${listId[i]}-span`);
            novo_span.innerText = `${listMessage[i]}`;
    
            
            document.getElementsByClassName("formulario")[0].insertBefore(novo_input, null);
            document.getElementById("span-container").insertBefore(novo_span, null);
        }

    }
    else if (tipo === 4) {
        let listId = ["nomeArtistico", "nomePremio", "nomeEvento", "anoEdicao", "tituloOriginal",
                      "anoDeProducao", "ganhou"];

        let listMessage = ["Nome do artista: ", "Nome do prêmio: ", "Nome do evento: ", "Ano da edição: ",
                           "Título original: ", "Ano de produção: ", "Ganhou: "];

        let listTypes = ["text", "text", "text", "number", "text", "number", "text"];

        for(let i = 0; i < 7; i++){
            const novo_input = document.createElement("input");
            novo_input.setAttribute("type", `${listTypes[i]}`);
            novo_input.setAttribute("name", "valor-2");
            novo_input.setAttribute("placeholder", "Digite aqui");
            novo_input.setAttribute("style", "margin-top: 1rem;");
            novo_input.setAttribute("id", `${listId[i]}-input`);
            novo_input.classList.add("input-dados");
    
            const novo_span = document.createElement("span");
            novo_span.setAttribute("style", "margin-top: 1rem;");
            novo_span.setAttribute("id", `${listId[i]}-span`);
            novo_span.innerText = `${listMessage[i]}`;
    
            
            document.getElementsByClassName("formulario")[0].insertBefore(novo_input, null);
            document.getElementById("span-container").insertBefore(novo_span, null);
        }

    }
    else if (tipo === 5) {
        
        let listId = ["nomeEvento", "ano", "dataEvento", "localEvento"];

        let listMessage = ["Nome do evento: ", "Ano: ", "Data do evento: ", "Local do evento: "];

        let listTypes = ["text", "number", "date", "text"];

        for(let i = 0; i < 4; i++){
            const novo_input = document.createElement("input");
            novo_input.setAttribute("type", `${listTypes[i]}`);
            novo_input.setAttribute("name", "valor-2");
            novo_input.setAttribute("placeholder", "Digite aqui");
            novo_input.setAttribute("style", "margin-top: 1rem;");
            novo_input.setAttribute("id", `${listId[i]}-input`);
            novo_input.classList.add("input-dados");
    
            const novo_span = document.createElement("span");
            novo_span.setAttribute("style", "margin-top: 1rem;");
            novo_span.setAttribute("id", `${listId[i]}-span`);
            novo_span.innerText = `${listMessage[i]}`;
    
            
            document.getElementsByClassName("formulario")[0].insertBefore(novo_input, null);
            document.getElementById("span-container").insertBefore(novo_span, null);
        }

    }
    else if (tipo === 6) {

        let listId = ["tituloOriginal", "anoDeProducao", "tituloPtBr", "tema", "tipo",
                      "arrecadacao1Ano", "idiomaOriginal", "totalArrecadado", "nacionalidade"];

        let listMessage = ["Título original: ", "Ano de produção: ", "Título em pt-br: ", "Tema: ", 
                "Tipo: ", "Arrecadação no 1ano: ", "Idioma original: ", "Total arrecadado: ", "Nacionalidade: "];

        let listTypes = ["text", "number", "text", "text", "text", "number", "text", "number", "text"];

        for(let i = 0; i < 9; i++){
        const novo_input = document.createElement("input");
        novo_input.setAttribute("type", `${listTypes[i]}`);
        novo_input.setAttribute("name", "valor-2");
        novo_input.setAttribute("placeholder", "Digite aqui");
        novo_input.setAttribute("style", "margin-top: 1rem;");
        novo_input.setAttribute("id", `${listId[i]}-input`);
        novo_input.classList.add("input-dados");

        const novo_span = document.createElement("span");
        novo_span.setAttribute("style", "margin-top: 1rem;");
        novo_span.setAttribute("id", `${listId[i]}-span`);
        novo_span.innerText = `${listMessage[i]}`;


        document.getElementsByClassName("formulario")[0].insertBefore(novo_input, null);
        document.getElementById("span-container").insertBefore(novo_span, null);
        }

    }
    else if (tipo === 7) {

        let listId = ["nomeArtistico", "tituloFilme", "anoDeProducao", "funcoes"];

        let listMessage = ["Nome artistico: ", "Titulo do filme: ", "Ano de producao: ", "Funções: "];

        let listTypes = ["text", "text", "number", "text"];

        for(let i = 0; i < 4; i++){
            const novo_input = document.createElement("input");
            novo_input.setAttribute("type", `${listTypes[i]}`);
            novo_input.setAttribute("name", "valor-2");
            novo_input.setAttribute("placeholder", "Digite aqui");
            novo_input.setAttribute("style", "margin-top: 1rem;");
            novo_input.setAttribute("id", `${listId[i]}-input`);
            novo_input.classList.add("input-dados");
    
            const novo_span = document.createElement("span");
            novo_span.setAttribute("style", "margin-top: 1rem;");
            novo_span.setAttribute("id", `${listId[i]}-span`);
            novo_span.innerText = `${listMessage[i]}`;
    
            
            document.getElementsByClassName("formulario")[0].insertBefore(novo_input, null);
            document.getElementById("span-container").insertBefore(novo_span, null);
        }

    }
    else if (tipo === 8) {
        let listId = ["tituloFilme", "anoDeProducao", "nomePremio", "nomeEvento", "anoEdicao"];

        let listMessage = ["Título do filme: ", "Ano de produção: ", "Nome do prêmio: ", "Nome do evento: ", "Ano da edição"];

        let listTypes = ["text", "number", "text", "text", "text", "number"];

        for(let i = 0; i < 5; i++){
            const novo_input = document.createElement("input");
            novo_input.setAttribute("type", `${listTypes[i]}`);
            novo_input.setAttribute("name", "valor-2");
            novo_input.setAttribute("placeholder", "Digite aqui");
            novo_input.setAttribute("style", "margin-top: 1rem;");
            novo_input.setAttribute("id", `${listId[i]}-input`);
            novo_input.classList.add("input-dados");
    
            const novo_span = document.createElement("span");
            novo_span.setAttribute("style", "margin-top: 1rem;");
            novo_span.setAttribute("id", `${listId[i]}-span`);
            novo_span.innerText = `${listMessage[i]}`;
    
            
            document.getElementsByClassName("formulario")[0].insertBefore(novo_input, null);
            document.getElementById("span-container").insertBefore(novo_span, null);
        }

    }
    else if (tipo === 9){
        let listId = ["nomeArtistico", "nomeEvento", "anoEdicao"];

        let listMessage = ["Nome do artista: ", "Nome do evento: ", "Ano da edição: "];

        let listTypes = ["text", "text", "number"];

        for(let i = 0; i < 3; i++){
            const novo_input = document.createElement("input");
            novo_input.setAttribute("type", `${listTypes[i]}`);
            novo_input.setAttribute("name", "valor-2");
            novo_input.setAttribute("placeholder", "Digite aqui");
            novo_input.setAttribute("style", "margin-top: 1rem;");
            novo_input.setAttribute("id", `${listId[i]}-input`);
            novo_input.classList.add("input-dados");
    
            const novo_span = document.createElement("span");
            novo_span.setAttribute("style", "margin-top: 1rem;");
            novo_span.setAttribute("id", `${listId[i]}-span`);
            novo_span.innerText = `${listMessage[i]}`;
    
            
            document.getElementsByClassName("formulario")[0].insertBefore(novo_input, null);
            document.getElementById("span-container").insertBefore(novo_span, null);
        }
    }
}

function save(){
    var obj = new Object();
    if(tipoAtual === 1){
        obj.nomeArtistico = document.getElementById("nome-input").value;
        obj.anosDeCinema = document.getElementById("anosCinema-input").value;
        obj.site = document.getElementById("site-input").value;
        obj.sexo = document.getElementById("sexo-input").value;
        obj.anoInicio = document.getElementById("anoInicio-input").value;
        obj.anoNascimento = document.getElementById("anoNascimento-input").value;
        obj.nomeVerdadeiro = document.getElementById("nomeVerdadeiro-input").value;
        obj.estadoAtual = document.getElementById("estado-input").value;
        funcoes = document.getElementById("funcoes-input").value;
        if(funcoes.includes("Ator")){
            obj.flagAtor = true;
        }else{
            obj.flagAtor = false;
        }
        if(funcoes.includes("Diretor")){
            obj.flagDiretor = true;
        }else{
            obj.flagDiretor = false;
        }
        if(funcoes.includes("Produtos")){
            obj.flagProdutor = true;
        }else{
            obj.flagProdutor = false;
        }
        if(funcoes.includes("Roteirista")){
            obj.flagRoteirista = true;
        }else{
            obj.flagRoteirista = false;
        }
        endpoint = "/artista/save";
    } else if(tipoAtual === 2){
        obj.nome = document.getElementById("nome-input").value;
        obj.nacionalidade = document.getElementById("nacionalidade-input").value;
        obj.tipoEvento = document.getElementById("tipoEvento-input").value;
        obj.numeroJurados = document.getElementById("numeroJurados-input").value;
        obj.anoInicio = document.getElementById("anoInicio-input").value;
        endpoint = "/evento/save";
    } else if(tipoAtual === 3){
        obj.nomePremio = document.getElementById("nomePremio-input").value;
        obj.nomeEvento = document.getElementById("nomeEvento-input").value;
        obj.anoEdicao = document.getElementById("anoEdicao-input").value;
        endpoint = "/premio/save";
    } else if(tipoAtual === 4){
        obj.nomeArtistico = document.getElementById("nomeArtistico-input").value;
        obj.nomePremio = document.getElementById("nomePremio-input").value;
        obj.nomeEvento = document.getElementById("nomeEvento-input").value;
        obj.anoEdicao = document.getElementById("anoEdicao-input").value;
        obj.tituloOriginal = document.getElementById("tituloOriginal-input").value;
        obj.anoDeProducao = document.getElementById("anoDeProducao-input").value;
        obj.ganhou = document.getElementById("ganhou-input").value;
        endpoint = "/artistaIndicado/save";
    } else if(tipoAtual === 5){ 
        obj.nomeEvento = document.getElementById("nomeEvento-input").value;
        obj.ano = document.getElementById("ano-input").value;
        obj.dataEvento = document.getElementById("dataEvento-input").value;
        obj.localEvento = document.getElementById("localEvento-input").value;
        endpoint = "/edicao/save";
    } else if(tipoAtual === 6){
        obj.tituloOriginal = document.getElementById("tituloOriginal-input").value;
        obj.anoDeProducao = document.getElementById("anoDeProducao-input").value;
        obj.tituloPtBr = document.getElementById("tituloPtBr-input").value;
        obj.tema = document.getElementById("tema-input").value;
        obj.tipo = document.getElementById("tipo-input").value;
        obj.arrecadacaoPrimAno = document.getElementById("arrecadacao1Ano-input").value;
        obj.idiomaOriginal = document.getElementById("idiomaOriginal-input").value;
        obj.totalArrecadado = document.getElementById("totalArrecadado-input").value;
        obj.nacionalidade = document.getElementById("nacionalidade-input").value;
        endpoint = "/filme/save";
    } else if(tipoAtual === 7){ 
        obj.nomeArtistico = document.getElementById("nomeArtistico-input").value;
        obj.tituloFilmeOriginal = document.getElementById("tituloFilme-input").value;
        obj.anoDeProducao = document.getElementById("anoDeProducao-input").value;
        funcoes = document.getElementById("funcoes-input").value;
        if(funcoes.includes("Ator")){
            obj.flagAtor = true;
        }else{
            obj.flagAtor = false;
        }
        if(funcoes.includes("Ator principal")){
            obj.eAtorPrincipal= true;
        }else{
            obj.eAtorPrincipal= false;
        }
        if(funcoes.includes("Diretor")){
            obj.flagDiretor = true;
        }else{
            obj.flagDiretor = false;
        }
        if(funcoes.includes("Diretor principal")){
            obj.eDiretorPrincipal = true;
        }else{
            obj.eDiretorPrincipal = false;
        }
        if(funcoes.includes("Produtor")){
            obj.flagProdutor = true;
        }else{
            obj.flagProdutor = false;
        }
        if(funcoes.includes("Roteirista")){
            obj.flagRoteirista = true;
        }else{
            obj.flagRoteirista = false;
        }
        endpoint = "/participaDe/save";
    } else if(tipoAtual === 8){
        obj.tituloOriginal = document.getElementById("tituloFilme-input").value;
        obj.anoDeProducao = document.getElementById("anoDeProducao-input").value;
        obj.nomePremio = document.getElementById("nomePremio-input").value;
        obj.nomeEvento = document.getElementById("nomeEvento-input").value;
        obj.anoEdicao = document.getElementById("anoEdicao-input").value;
        endpoint = "/filmeindicado/save";
    } else if(tipoAtual === 9){
        //"nomeArtistico", "nomeEvento", "anoEdicao"
        obj.nomeArtistico = document.getElementById("nomeArtistico-input").value;
        obj.nomeEvento = document.getElementById("nomeEvento-input").value;
        obj.anoEdicao = document.getElementById("anoEdicao-input").value;
        endpoint = "/ejurado/save";
    }

    var jsonString = JSON.stringify(obj);
    console.log(jsonString);



    fetch(`http://localhost:8080${endpoint}`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: jsonString
    })
    .then((response) => response.json())
    .then((data) => console.log("Success:", data))
    .catch((error) => console.error("Error:", error));
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