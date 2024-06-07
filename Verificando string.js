function stringBotaoJS() {
    let string = "Hello, Word";

    document.getElementById('numero-js').innerHTML = `<strong>String inserida no JavaScript:</strong> ${string}`;
    let resultado = document.getElementById('validacao-js');

    verificarString(string, resultado);
}

function stringbotaoUsuario() {
    let string = document.getElementById('numero-usuario').value;

    let resultado = document.getElementById('validacao-usuario');

    verificarString(string, resultado);    
}

function verificarString(string, resultado) {
    if(string === '') {
        resultado.innerHTML = `A string "${string}" está vazia.`;
    } else {
        resultado.innerHTML = `A string "${string}" não está vazia.`;
    }
}

