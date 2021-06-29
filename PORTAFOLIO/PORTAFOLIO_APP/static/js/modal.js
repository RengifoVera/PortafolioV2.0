const modalcontainer = document.getElementById('modalcontainer');
const open = document.getElementById('open');
const cerrar =  document.getElementById('cerrar');
// Modal-electro
const modalcontainer_electro = document.getElementById('modalcontainer-electro');
const open_electro = document.getElementById('open-electro');
const cerrar_electro =  document.getElementById('cerrar-electro');

open.addEventListener('click', () =>{
    modalcontainer.classList.add('show');
    window.addEventListener('scroll', disableScroll);

}) 
open_electro.addEventListener('click', () =>{
    modalcontainer_electro.classList.add('show');
    window.addEventListener('scroll', disableScroll);

}) 


cerrar.addEventListener('click', () =>{
    modalcontainer.classList.remove('show');
    window.removeEventListener('scroll', disableScroll); 
}) 
cerrar_electro.addEventListener('click', () =>{
    modalcontainer_electro.classList.remove('show');
    window.removeEventListener('scroll', disableScroll); 
}) 


function disableScroll(){  
    window.scrollTo(700, 700);
}