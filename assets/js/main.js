function scrollHeader() {
    const header = document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* https://youtu.be/oy8dSsK57Ps?t=3941 */
/*Mostrar juego juego ahorcado */
const modalViews = document.querySelectorAll('.seccion__juego'),
      modalBtns = document.querySelectorAll('.btn__iniciar'),
      modalClose = document.querySelectorAll('.btn__cerrar')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) =>{
    mb.addEventListener('click', () =>{
        modal(i)
    })
})

modalClose.forEach((mc) =>{
    mc.addEventListener('click', () =>{
        modalViews.forEach((mv) =>{
            mv.classList.remove('active-modal')
        })
    })
})