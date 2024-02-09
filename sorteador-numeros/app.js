function sorteio() {
    let quantidadeDeSorteios = Number(parseInt(document.getElementById("quantidade").value));
    let de = Number(parseInt(document.getElementById("de").value));
    let ate = Number(parseInt(document.getElementById("ate").value));

    if (quantidadeDeSorteios > ate) {
        alert('Atenção! Parece que você está tentando sortear uma quantidade de números maior do que o possível. Verifique os campos e tente novamente.');
        return;
    }
    else if(de > ate) {
        alert('Atenção! O campo "Do número" não pode ser maior que o campo "Até o número", pois se torna impossível a realização do sorteio. Verifique os campos e tente novamente.');
        return;
    }
    
    if (ate - de + 1 < quantidadeDeSorteios) {
        let intervalo = ate - de
        alert(`Atenção! É impossível realizar um sorteio de ${quantidadeDeSorteios} números em um intervalo de ${intervalo + 1} números. Verifique os campos e tente novamente.`);
        return;
    }

    let numerosSorteados = [];
    let numero;
    
    for(let i = 0; i < quantidadeDeSorteios; i++) {
        numero = gerarNumeroAleatori(de, ate)
        
        while (numerosSorteados.includes(numero)) {
            numero = gerarNumeroAleatori(de, ate);
        }

        numerosSorteados.push(numero);
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numerosSorteados}</label>`;

    habilitarBotão()

}

function gerarNumeroAleatori(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reiniciar() {
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    document.getElementById("resultado").innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    
    
    habilitarBotão()
}

function habilitarBotão() {
    let botaoReiniciar = document.getElementById("btn-reiniciar");
   if (botaoReiniciar.classList.contains("container__botao-desabilitado")) {
    botaoReiniciar.classList.remove("container__botao-desabilitado");
    botaoReiniciar.classList.add("container__botao");
   }
   else {
    botaoReiniciar.classList.remove("container__botao");
    botaoReiniciar.classList.add("container__botao-desabilitado");
   }
}