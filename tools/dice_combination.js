function calcularValoresDados(combinacao) {
    let minimo = combinacao.reduce((acc, dado) => acc + parseInt(dado.substring(1)), 0);
    let maximo = combinacao.reduce((acc, dado) => acc + parseInt(dado.substring(1)) * (Math.floor(parseInt(dado.substring(1)) / 2) + 1), 0);
    return { minimo, maximo };
}

function gerarCombinacoes(dadosDisponiveis, tamanho) {
    if (tamanho === 1) {
        return dadosDisponiveis.map(dado => [dado]);
    }
    const combinacoes = [];
    dadosDisponiveis.forEach((dadoAtual, index) => {
        const combinacoesMenores = gerarCombinacoes(dadosDisponiveis.slice(index), tamanho - 1);
        combinacoesMenores.forEach(combinacao => {
            combinacoes.push([dadoAtual].concat(combinacao));
        });
    });
    return combinacoes;
}

function possiveisFormulas(metaDano, dadosDisponiveis) {
    let formulasValidas = new Set();

    // Adicionando combinações de um único dado e um valor fixo
    dadosDisponiveis.forEach(dado => {
        let valorDado = parseInt(dado.substring(1));
        if (valorDado <= metaDano) {
            let valorFixo = metaDano - valorDado;
            let formula = dado + (valorFixo > 0 ? " + " + valorFixo : "");
            formulasValidas.add(formula);
        }
    });

    // Adicionando combinações de dois dados e um valor fixo
    dadosDisponiveis.forEach(dado1 => {
        dadosDisponiveis.forEach(dado2 => {
            let valorDado1 = parseInt(dado1.substring(1));
            let valorDado2 = parseInt(dado2.substring(1));
            let minimo = valorDado1 + valorDado2;
            if (minimo <= metaDano) {
                let valorFixo = metaDano - minimo;
                let formula = dado1 + " + " + dado2 + (valorFixo > 0 ? " + " + valorFixo : "");
                formulasValidas.add(formula);
            }
        });
    });

    // Adicionando combinações de múltiplos dados
    for (let i = 3; i <= 5; i++) {
        let combinacoes = gerarCombinacoes(dadosDisponiveis, i);
        combinacoes.forEach(combinacao => {
            const { minimo, maximo } = calcularValoresDados(combinacao);
            if (minimo <= metaDano && metaDano <= maximo) {
                const valorFixo = metaDano - minimo;
                const formula = combinacao.join(" + ") + (valorFixo > 0 ? " + " + valorFixo : "");
                formulasValidas.add(formula);
            }
        });
    }

    return Array.from(formulasValidas).sort();
}

// Exemplo de uso
const dadosDisponiveis = ['d4', 'd6', 'd8', 'd10', 'd12'];
const metaDano = 60;
const formulas = possiveisFormulas(metaDano, dadosDisponiveis);
console.log(formulas);
