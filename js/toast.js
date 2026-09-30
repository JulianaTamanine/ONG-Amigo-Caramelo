export function mostrarToast() {

    var toast = document.getElementById("toast");

    toast.classList.add("mostrar");


    setTimeout(function() {

        toast.classList.remove("mostrar");

    }, 3000);

}