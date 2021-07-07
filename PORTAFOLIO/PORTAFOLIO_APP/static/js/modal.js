const modalcontainer = document.getElementById('modalcontainer');
const open = document.getElementById('open');
const cerrar =  document.getElementById('cerrar');
// Modal-electro
const modalcontainer_electro = document.getElementById('modalcontainer-electro');
const open_electro = document.getElementById('open-electro');
const cerrar_electro =  document.getElementById('cerrar-electro');

// Modal-experiencia
const modalcontainer_experiencia = document.getElementById('modalcontainer-experiencia');
const open_experiencia = document.getElementById('open-experiencia');
const cerrar_experiencia =  document.getElementById('cerrar-experiencia');

// Modal-estudios
const modalcontainer_estudios = document.getElementById('modalcontainer-estudios');
const open_estudios = document.getElementById('open-estudios');
const cerrar_estudios =  document.getElementById('cerrar-estudios');

// Modal-resume
const modalcontainer_resume = document.getElementById('modalcontainer-resume');
const open_resume = document.getElementById('open-resume');
const cerrar_resume =  document.getElementById('cerrar-resume');

// Modal-resume
const modalcontainer_contacto = document.getElementById('modalcontainer-contacto');
const open_contacto = document.getElementById('open-contacto');
const cerrar_contacto =  document.getElementById('cerrar-contacto');

open.addEventListener('click', () =>{
    modalcontainer.classList.add('show');
    window.addEventListener('scroll', disableScroll);

}) 
open_electro.addEventListener('click', () =>{
    modalcontainer_electro.classList.add('show');
    window.addEventListener('scroll', disableScroll);

}) 

open_experiencia.addEventListener('click', () =>{
    modalcontainer_experiencia.classList.add('show');
    window.addEventListener('scroll', disableScroll);

}) 

open_estudios.addEventListener('click', () =>{
    modalcontainer_estudios.classList.add('show');
    window.addEventListener('scroll', disableScroll);

}) 
open_resume.addEventListener('click', () =>{
    modalcontainer_resume.classList.add('show');
    window.addEventListener('scroll', disableScroll);

}) 
open_contacto.addEventListener('click', () =>{
    modalcontainer_contacto.classList.add('show');
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
cerrar_experiencia.addEventListener('click', () =>{
    modalcontainer_experiencia.classList.remove('show');
    window.removeEventListener('scroll', disableScroll); 
}) 

cerrar_estudios.addEventListener('click', () =>{
    modalcontainer_estudios.classList.remove('show');
    window.removeEventListener('scroll', disableScroll); 
}) 

cerrar_resume.addEventListener('click', () =>{
    modalcontainer_resume.classList.remove('show');
    window.removeEventListener('scroll', disableScroll); 
}) 
cerrar_contacto.addEventListener('click', () =>{
    modalcontainer_contacto.classList.remove('show');
    window.removeEventListener('scroll', disableScroll); 
})


function disableScroll(){  
    window.scrollTo(700, 700);
}