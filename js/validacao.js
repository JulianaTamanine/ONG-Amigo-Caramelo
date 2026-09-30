export function validarFormulario(event) {

    event.preventDefault();


    var nome =
        document.getElementById("nome");

    var email =
        document.getElementById("email");

    var telefone =
        document.getElementById("telefone");


    var formularioValido = true;


    document
        .querySelectorAll(".mensagem-erro")
        .forEach(function(mensagem) {

            mensagem.remove();

        });


    document
        .querySelectorAll(".input-erro")
        .forEach(function(campo) {

            campo.classList.remove("input-erro");

        });


    if (nome.value.trim() === "") {

        mostrarErro(
            nome,
            "Digite seu nome."
        );

        formularioValido = false;

    }


    if (email.value.trim() === "") {

        mostrarErro(
            email,
            "Digite seu e-mail."
        );

        formularioValido = false;

    } else if (!email.value.includes("@")) {

        mostrarErro(
            email,
            "Digite um e-mail válido."
        );

        formularioValido = false;

    }


    if (telefone.value.trim() === "") {

        mostrarErro(
            telefone,
            "Digite seu telefone."
        );

        formularioValido = false;

    }


    if (formularioValido) {

        alert(
            "Pedido de adoção enviado com sucesso!"
        );

        document
            .getElementById("form-adocao")
            .reset();

    }

}


function mostrarErro(campo, mensagem) {

    campo.classList.add("input-erro");


    var mensagemErro =
        document.createElement("small");


    mensagemErro.classList.add(
        "mensagem-erro"
    );


    mensagemErro.textContent = mensagem;


    campo.parentNode.appendChild(
        mensagemErro
    );

}