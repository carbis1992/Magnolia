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
const btnClose = document.querySelector("#closeModal1");

btnOpenModal.addEventListener("click", openModal);
btnClose.addEventListener("click", closeModal1);

function openModal(){
    modal.style.display = "grid";
}

function closeModal1(){
    modal.style.display = "none";
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
const btnClose2 = document.querySelector("#closeModal2");

btnOpenModal2.addEventListener("click", openModal2);
btnClose2.addEventListener("click", closeModal2);

function openModal2(){
    modal2.style.display = "grid";
}

function closeModal2(){
    modal2.style.display = "none";
}

const btnOpenModal3 = document.querySelector("#ver-mas-modal3");
const modal3 = document.querySelector("#modal3");
const btnClose3 = document.querySelector("#closeModal3");

btnOpenModal3.addEventListener("click", openModal3);
btnClose3.addEventListener("click", closeModal3);

function openModal3(){
    modal3.style.display = "grid";
}

function closeModal3(){
    modal3.style.display = "none";
}

var myIdToInsert = 1;
document.getElementById("btn1").href += myidtoinsert;