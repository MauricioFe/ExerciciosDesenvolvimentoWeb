let cartela = [];
let pedras = [];
let colunasTabela = document.getElementsByTagName("td");
for (let i = 1; i <= 60; i++) {
    pedras.push(i)
}
function gerarCartela() {
    event.preventDefault();
    const randomUnique = (range, count) => {
        let nums = new Set();
        while (nums.size < count) {
            nums.add(Math.floor(Math.random() * (range - 1 + 1) + 1));
        }
        return [...nums];
    }



    cartela = randomUnique(pedras.length, colunasTabela.length);
    for (let i = 0; i < colunasTabela.length; i++) {
        colunasTabela[i].textContent = cartela[i];
    }

}


function sortearPedra() {
    var pedraSelecionada = pedras.find((item) => item === Math.floor(Math.random() * pedras.length))
    if (pedraSelecionada != undefined) {
        alert(`A pedra selecionada é: ${pedraSelecionada}`);
        let indexItemCartela = cartela.findIndex(item => item === pedraSelecionada)
        colunasTabela[indexItemCartela].style.background = "red"
    }
}

