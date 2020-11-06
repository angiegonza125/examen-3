//variables
const menu = document.querySelector('#movil')
const degradado = document.querySelector('#degradado')
const boton = document.querySelector('#menu')
const salir = document.querySelector('#salir')
const enlaces = document.querySelector('.link')

//eventos
boton.addEventListener('click', mostrarmenu);
salir.addEventListener('click', ocultarmenu);
document.addEventListener('keydown', filtrotecla);
degradado.addEventListener('click', ocultarmenu);
enlaces.foreach(enlace=>{
    enlace.addEventListener('click', ocultarmenu);
})

//funciones
function filtrotecla(e){
    e.keyCode === 27 && ocultarmenu();
}

function mostrarmenu(){
    menu.style.right = '0';
    degradado.style.display = "block";
    setTimeout(()=>{
        degradado.style.background = 'rgba(0, 0, 0, .5)';
    }, 10);
}

function ocultarmenu(){
    menu.style.right = '-80%';
    degradado.style.background = 'rgba(0, 0, 0, 0)';
    setTimeout(()=>{
        degradado.style.display = 'none';
    }, 250);
}