import { abrirMenu } from "./menu.js";
import { mostrarToast } from "./toast.js";
import { carregarCachorros } from "./cachorros.js";
import { router } from "./router.js";
import { validarFormulario } from "./validacao.js";


document.addEventListener("DOMContentLoaded", function() {

    console.log("script.js carregou!");

    var botaoMenu = document.getElementById("botao-menu");

    var botaoToast = document.getElementById("botao-toast");

    var formulario = document.getElementById("form-adocao");


    botaoMenu.addEventListener("click", abrirMenu);

    botaoToast.addEventListener("click", mostrarToast);

    formulario.addEventListener("submit", validarFormulario);


    carregarCachorros();

    router();

});


window.addEventListener("hashchange", router);