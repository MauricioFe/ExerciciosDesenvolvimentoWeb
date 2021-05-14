let pontuacaoJogador,
    pontuacaoComputador,
    vencedor,
    escolhaJogador,
    escolharComputador;


let pedra1 = document.querySelector(".pedra1");
let papel1 = document.querySelector(".papel1");
let tesoura1 = document.querySelector(".tesoura1");

function getEscolhaComputador() {
    switch (Math.round(Math.round() * 2)) {
        case 0:
            escolharComputador = "pedra"
            break;
        case 1:
            escolharComputador = "papel"
            break;
        case 2:
            escolharComputador = "tesoura"
            break;
    }
}



pedra1.addEventListener('click', () => {
    escolhaJogador = "pedra";
    getEscolhaComputador();
    if (escolharComputador == "pedra")
        alert("Empate")
    else if (escolharComputador == "papel")
        alert("Perdeu")
    else
        alert("ganhou")
});
papel1.addEventListener('click', () => {
    escolhaJogador = "papel";
});
tesoura1.addEventListener('click', () => {
    escolhaJogador = "tesoura";
});

