const botaoabrir = document.querySelector (".header-mobile > button")
const botaofechar = document.querySelector("header-mobile nav button")



const body = document.querySelector("body")
const  nav = document.querySelector(".header-mobile nav")



botaoabrir.addEventListener('click', abrirMenu)
botaofechar.addEventListener('click', fecharMenu)



function abrirMenu(){
body.classList.add("menu-open")
nav.classList.add("abrir")
}

function fecharMenu(){
body.classList.remove("menu-open")
nav.classList.remove("abrir")
}