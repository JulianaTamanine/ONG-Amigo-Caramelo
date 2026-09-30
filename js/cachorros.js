var cachorros = [

    {
        nome: "Caramelo",
        imagem: "../imagens/caramelo2.avif",
        descricao: "Cachorrinho carinhoso esperando uma família."
    },

    {
        nome: "Mel",
        imagem: "../imagens/caramelo5.jpg",
        descricao: "Mel é dócil e está pronta para encontrar um novo lar."
    },

    {
        nome: "Thor",
        imagem: "../imagens/caramelo3.png",
        descricao: "Thor é brincalhão e adora receber carinho."
    },

    {
        nome: "Bob",
        imagem: "../imagens/caramelo7.png",
        descricao: "Bob é muito carinhoso e procura uma família."
    }

];


export function carregarCachorros() {

    var listaCachorros =
        document.getElementById("lista-cachorros");


    listaCachorros.innerHTML = "";


    cachorros.forEach(function(cachorro) {

        var card = `

            <div class="card-cachorro">

                <img
                    src="${cachorro.imagem}"
                    alt="Cachorro ${cachorro.nome}"
                >

                <h3>${cachorro.nome}</h3>

                <p>${cachorro.descricao}</p>

            </div>

        `;


        listaCachorros.innerHTML += card;

    });

}