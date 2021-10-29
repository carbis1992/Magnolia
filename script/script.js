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

const btnOpenModal = document.querySelector("#ver-mas-modal");
const modal = document.querySelector("#modal1");

btnOpenModal.addEventListener("click", openModal);

function openModal(){
    modal.style.display = "grid";
}

window.onclick = function(e){
    if(e.target == modal){
        modal.style.display = "none";
    }else if(e.target == modal2){
        modal2.style.display = "none";
    }else if(e.target == modal3){
        modal3.style.display = "none";
    }
};

const btnOpenModal2 = document.querySelector("#ver-mas-modal2");
const modal2 = document.querySelector("#modal2");

btnOpenModal2.addEventListener("click", openModal2);

function openModal2(){
    modal2.style.display = "grid";
}

const btnOpenModal3 = document.querySelector("#ver-mas-modal3");
const modal3 = document.querySelector("#modal3");

btnOpenModal3.addEventListener("click", openModal3);

function openModal3(){
    modal3.style.display = "grid";
}
