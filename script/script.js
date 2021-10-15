const menuHamburguesa = document.querySelector("#menu-hamburguesa");
const listaMenu = document.querySelector("#menu-lista");

menuHamburguesa.addEventListener("click", openMenu);

function openMenu() {
    listaMenu.classList.add('menu-lista');
    console.log("click en la hambur");
}