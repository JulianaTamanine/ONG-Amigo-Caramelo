var rotas = [
    "inicio",
    "sobre",
    "contato",
    "doacao",
    "cachorros",
    "adocao"
];


export function router() {

    var rotaAtual = window.location.hash.substring(1);

    if (rotaAtual === "") {
        rotaAtual = "inicio";
    }

    if (!rotas.includes(rotaAtual)) {
        rotaAtual = "inicio";
    }

    rotas.forEach(function(rota) {

        var secao = document.getElementById(rota);

        if (secao) {
            secao.style.display = "none";
        }

    });


    var secaoAtual = document.getElementById(rotaAtual);

    if (secaoAtual) {
        secaoAtual.style.display = "block";
    }

}