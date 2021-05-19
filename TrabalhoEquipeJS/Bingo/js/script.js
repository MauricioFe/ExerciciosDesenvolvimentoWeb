function gerarCartela() {
    event.preventDefault();
    let cartela = [];
    let pedras = [];
    let colunasTabela = document.getElementsByTagName("td");

    const randomUnique = (range, count) => {
        let nums = new Set();
        while (nums.size < count) {
            nums.add(Math.floor(Math.random() * (range - 1 + 1) + 1));
        }
        return [...nums];
    }

    for (let i = 1; i <= 60; i++) {
        pedras.push(i)
    }

    cartela = randomUnique(pedras.length, colunasTabela.length);
    console.log(cartela);

    for (let i = 0; i < colunasTabela.length; i++) {
        colunasTabela[i].textContent = cartela[i];
    }

}

