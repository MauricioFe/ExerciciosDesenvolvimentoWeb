let pontuacaoJogador,
    pontuacaoComputador,
    vencedor,
    escolhaJogador,
    escolhaComputador;


let pedra = document.querySelector(".pedra");
let papel = document.querySelector(".papel");
let tesoura = document.querySelector(".tesoura");
let pc = document.querySelector(".resultado-pc");

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
    pc.innerHTML = `<h2>A escolha do computador foi:</h2>
    <img src='img/${escolhaComputador}.png'/>`;
    console.log(escolhaComputador)
    if (escolhaComputador === "pedra")
        alert("Empatou")
    else if (escolhaComputador === "papel")
        alert("Perdeu")
    else if (escolhaComputador === "tesoura")
        alert("ganhou")
});
papel.addEventListener('click', () => {
    escolhaJogador = "papel";
    let escolhaComputador = getEscolhaComputador();
    pc.innerHTML = `<h2>A escolha do computador foi:</h2>
    <img src='img/${escolhaComputador}.png'/>`;
    if (escolhaComputador === "pedra")
        alert("Ganhou")
    else if (escolhaComputador === "papel")
        alert("Empatou")
    else if (escolhaComputador === "tesoura")
        alert("Perdeu")
});
tesoura.addEventListener('click', () => {
    escolhaJogador = "tesoura";
    let escolhaComputador = getEscolhaComputador();
    console.log(escolhaComputador);
    pc.innerHTML = `<h2>A escolha do computador foi:</h2>
    <img src='img/${escolhaComputador}.png'/>`;
    if (escolhaComputador === "pedra")
        alert("Perdeu")
    else if (escolhaComputador === "papel")
        alert("Ganhou")
    else if (escolhaComputador === "tesoura")
        alert("Empatou")
});

