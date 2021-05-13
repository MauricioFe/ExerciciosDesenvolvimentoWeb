let iptVelocidadeMaxima = document.querySelector("#velocidadeMaxima");
let iptVelocidadeCarro = document.querySelector("#velocidadeCarro");
let resultado = document.querySelector(".resultado");


function verificaVelocidade() {
    event.preventDefault();
    let velocidadeMaxima = parseFloat(iptVelocidadeMaxima.value);
    let velocidadeCarro = parseFloat(iptVelocidadeCarro.value);
    let diferencaVelocidade = velocidadeCarro - velocidadeMaxima;
    console.log(diferencaVelocidade >= velocidadeMaxima * 0.2);
    if (diferencaVelocidade >= 7 && diferencaVelocidade > 0) {
        resultado.innerHTML = `<div class="alert alert-warning">Advertência - Acima de 7 km/h</div>`;
    } else {
        resultado.innerHTML = '<div class="alert alert-success">Dentro do limite de velocidade</div>';
    }
    if (diferencaVelocidade >= velocidadeMaxima * 0.2)
        resultado.innerHTML = `<div class="alert alert-danger">Autuado. Infração grave.</div>`;
    if (diferencaVelocidade >= velocidadeMaxima * 0.5)
        resultado.innerHTML = `<div class="alert alert-danger">Autuado. Infração gravíssima.</div>`;
}
