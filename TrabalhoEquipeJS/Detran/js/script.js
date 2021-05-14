let iptVelocidadeMaxima = document.querySelector("#velocidadeMaxima");
let iptVelocidadeCarro = document.querySelector("#velocidadeCarro");
let resultado = document.querySelector(".resultado");


function verificaVelocidade() {
    event.preventDefault();
    let velocidadeMaxima = parseFloat(iptVelocidadeMaxima.value);
    let velocidadeCarro = parseFloat(iptVelocidadeCarro.value);
    let diferencaVelocidade = velocidadeCarro - velocidadeMaxima;
    if (diferencaVelocidade >= 7 && diferencaVelocidade > 0) {
        resultado.innerHTML = `<div class="alert alert-warning">Advertência - Acima de 7 km/h infração leve você levou 3 pontos na carteira e a multa custa R$ 88,38</div>`;
    } else {
        resultado.innerHTML = '<div class="alert alert-success">Dentro do limite de velocidade</div>';
    }
    if (diferencaVelocidade >= velocidadeMaxima * 0.2)
        resultado.innerHTML = `<div class="alert alert-danger">Autuado. Infração grave, você levou 5 pontos na carteira e a multa custa R$ 195,23</div>`;
    if (diferencaVelocidade >= velocidadeMaxima * 0.5)
        resultado.innerHTML = `<div class="alert alert-danger">Autuado. Infração gravíssima, você levou 7 pontos na carteira e a multa custa R$ 293,47</div>`;


}
let cont = 0;
function criaFormularioMotorista() {
    event.preventDefault();
    cont++;
    if (cont < 2) {
        let teste = iptVelocidadeMaxima.value;
        let teste2 = iptVelocidadeCarro.value;
        console.log()
        let container = document.querySelector(".container");
        container.innerHTML += `<form>
    <div class="input-field">
        <label for="nome">Nome do motorista</label>
        <input type="text" name="nome" id="nome">
    </div>
    <div class="input-field">
        <label for="motorista">Carteira de motorista</label>
        <input type="text" name="motorista" id="motorista">
    </div>
    <div class="button-field">
        <button onClick="imprimirDados()">Imprimir</button>
    </div>
</form>`;
        iptVelocidadeMaxima = document.querySelector("#velocidadeMaxima");
        iptVelocidadeCarro = document.querySelector("#velocidadeCarro");
        iptVelocidadeMaxima.value = teste;
        iptVelocidadeCarro.value = teste2;
    }
}

function imprimirDados() {
    event.preventDefault()
    let iptNome = document.querySelector("#nome");
    let iptCarta = document.querySelector("#motorista");
    let velocidadeMaxima = parseFloat(iptVelocidadeMaxima.value);
    let velocidadeCarro = parseFloat(iptVelocidadeCarro.value);
    let diferencaVelocidade = velocidadeCarro - velocidadeMaxima;
    if (diferencaVelocidade >= 7 && diferencaVelocidade > 0) {
        resultado.innerHTML = `<div class="alert alert-warning">O usuário ${iptNome.value} com a carteira de motorista ${iptCarta.value} teve Advertência - Acima de 7 km/h infração leve e levou 3 pontos na carteira e a multa custa R$ 88,38</div>`;
    } else {
        resultado.innerHTML = '<div class="alert alert-success">Dentro do limite de velocidade</div>';
    }
    if (diferencaVelocidade >= velocidadeMaxima * 0.2)
        resultado.innerHTML = `<div class="alert alert-danger">O usuário ${iptNome.value} com a carteira de motorista ${iptCarta.value} foi autuado. Infração grave, e levou 5 pontos na carteira e a multa custa R$ 195,23</div>`;
    if (diferencaVelocidade >= velocidadeMaxima * 0.5)
        resultado.innerHTML = `<div class="alert alert-danger">O usuário ${iptNome.value} com a carteira de motorista ${iptCarta.value} foi autuado. Infração gravíssima, e levou 7 pontos na carteira e a multa custa R$ 293,47</div>`;

}
