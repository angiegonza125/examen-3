//variables
const imagenes = document.querySelectorAll('.img-galeria')
const lightBox = document.querySelector('.imagen-light')
const cambiarImagen = document.querySelector('.agregar-img')
const menu2 = document.querySelector('#menu')

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'))
    })
})

lightBox.addEventListener('click', (e)=>{
    if(e.target !== cambiarImagen){
        lightBox.classList.toggle('show')
        cambiarImagen.classList.toggle('showImage')
        menu2.style.opacity = '1'
    }
})

const aparecerImagen = (imagen)=>{
    cambiarImagen.src = imagen;
    lightBox.classList.toggle('show')
    cambiarImagen.classList.toggle('showImage')
    menu2.style.opacity = '0'
} 
