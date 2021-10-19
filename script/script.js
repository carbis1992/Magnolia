let menuHamburguesa = document.querySelector("#menu-hamburguesa");
let listaMenu = document.querySelector("#menu-hamburguesa-lista");
let modal = document.querySelector("#modal");

menuHamburguesa.addEventListener("click", openMenu);

function openMenu() {
    listaMenu.style.display = "block";
}

window.addEventListener("click", function(e) {
    if(e.target == modal){
        listaMenu.style.display = "none";

        console.log("click en window")
    }
});

