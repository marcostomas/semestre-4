const uri = "http://localhost:8000/";
let endpoint = null;

function funcao1() {
    this.endpoint = "funcao1";
}

function funcao2() {
    this.endpoint = "funcao1";
}

function funcao3() {
    this.endpoint = "funcao1";
}

function funcao4() {
    this.endpoint = "funcao1";
}


(
    async () => {
        try {
            var response = await fetch(url + endpoint);
            var data = await response.json();
            console.log(data);
        } catch (e) {
            console.log('Booo', e);
        }
    }
)();