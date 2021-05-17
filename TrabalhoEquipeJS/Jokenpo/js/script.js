let pontuacaoJogador = 0,
    pontuacaoComputador = 0,
    vencedor,
    escolhaJogador,
    escolhaComputador;


let pedra = document.querySelector(".pedra");
let papel = document.querySelector(".papel");
let tesoura = document.querySelector(".tesoura");

let pedraPc = document.querySelector(".pedra-pc");
let papelPc = document.querySelector(".papel-pc");
let tesouraPc = document.querySelector(".tesoura-pc");
let empate = document.querySelector(".empate");

let iptPontucaoJogador = document.querySelector("#pontuacaoJogador");
let iptPontucaoComputador = document.querySelector("#pontuacaoComputador");
function getEscolhaComputador() {
    let escolha = Math.round(Math.random() * 2);
    console.log(escolha);
    switch (escolha) {
        case 0:
            escolhaComputador = "pedra"
            break;
        case 1:
            escolhaComputador = "papel"
            break;
        case 2:
            escolhaComputador = "tesoura"
            break;
    }
    return escolhaComputador;
}



pedra.addEventListener('click', () => {
    escolhaJogador = "pedra";
    let escolhaComputador = getEscolhaComputador();
    if (escolhaComputador === "pedra") {
        pedraPc.style.border = "1px solid #ff0000";
        papelPc.style.border = "none";
        tesouraPc.style.border = "none";
        empate.style.display = "block";
    }
    else if (escolhaComputador === "papel") {
        papelPc.style.border = "1px solid #ff0000";
        pedraPc.style.border = "none";
        tesouraPc.style.border = "none";
        pontuacaoComputador++;
        empate.style.display = "none";
    }
    else if (escolhaComputador === "tesoura") {
        tesouraPc.style.border = "1px solid #ff0000"
        pedraPc.style.border = "none";
        papelPc.style.border = "none";
        pontuacaoJogador++;
        empate.style.display = "none";
    }
    iptPontucaoComputador.value = pontuacaoComputador;
    iptPontucaoJogador.value = pontuacaoJogador;
});
papel.addEventListener('click', () => {
    escolhaJogador = "papel";
    let escolhaComputador = getEscolhaComputador();
    if (escolhaComputador === "pedra") {
        pedraPc.style.border = "1px solid #ff0000";
        papelPc.style.border = "none";
        tesouraPc.style.border = "none";
        empate.style.display = "none";
        pontuacaoJogador++;
    }
    else if (escolhaComputador === "papel") {
        papelPc.style.border = "1px solid #ff0000";
        pedraPc.style.border = "none";
        tesouraPc.style.border = "none";
        empate.style.display = "block";
    }
    else if (escolhaComputador === "tesoura") {
        tesouraPc.style.border = "1px solid #ff0000"
        pedraPc.style.border = "none";
        papelPc.style.border = "none";
        pontuacaoComputador++;
        empate.style.display = "none";
    }
    iptPontucaoComputador.value = pontuacaoComputador;
    iptPontucaoJogador.value = pontuacaoJogador;
});
tesoura.addEventListener('click', () => {
    escolhaJogador = "tesoura";
    let escolhaComputador = getEscolhaComputador();
    if (escolhaComputador === "pedra") {
        pedraPc.style.border = "1px solid #ff0000";
        papelPc.style.border = "none";
        tesouraPc.style.border = "none";
        empate.style.display = "none";
        pontuacaoComputador++;
    }
    else if (escolhaComputador === "papel") {
        papelPc.style.border = "1px solid #ff0000";
        pedraPc.style.border = "none";
        tesouraPc.style.border = "none";
        empate.style.display = "none";
        pontuacaoJogador++;
    }
    else if (escolhaComputador === "tesoura") {
        tesouraPc.style.border = "1px solid #ff0000"
        pedraPc.style.border = "none";
        papelPc.style.border = "none";
        empate.style.display = "block";
    }
    iptPontucaoComputador.value = pontuacaoComputador;
    iptPontucaoJogador.value = pontuacaoJogador;
});

