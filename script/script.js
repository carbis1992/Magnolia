let menuHamburguesa = document.querySelector("#menu-hamburguesa");
let listaMenu = document.querySelector("#modal");
let banner = document.querySelector(".banner");

menuHamburguesa.addEventListener("click", openMenu);
banner.addEventListener("click", closeMenu);

function openMenu() {
    listaMenu.style.display = "block";
}

function closeMenu(){
    listaMenu.style.display = "none";
}
