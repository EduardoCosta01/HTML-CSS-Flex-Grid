const botaoMenu = document.querySelector('.cabecalho__menu')
const menu = document.querySelector('.menu__lateral')

botaoMenu.addEventListener('click', () =>{
    menu.classList.toggle('menu__lateral--ativo')
})