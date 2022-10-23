const burger = document.querySelector("#header_burger");
const menu = document.querySelector("#header_menu")
const body = document.body
burger,menu.addEventListener("click", openBurger);

function openBurger(){
burger.classList.toggle('active')
menu.classList.toggle('active')
body.classList.toggle("lock")
}


