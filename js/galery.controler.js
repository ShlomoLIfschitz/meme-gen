'use strict'
// let gElCanvas
let gCtx





function onInit() {
    renderImgs()
    showGallery()
    renderCanvas()
    gElCanvas = document.getElementById('my-canvas')
    gCtx = gElCanvas.getContext('2d')
    // resizeCanvas()
    addListeners()
    hideCanvas()
}


function renderImgs() {
    let imgs = getImgs()
    let strHtmls = imgs.map(img =>
        `<div class="img">
         <img class="img-${img.id}" onclick="onGetImgById(${img.id})" src="img/${img.url}" alt="">  
         </div>`
    )
    document.querySelector('.galery').innerHTML = strHtmls.join('')
}


function showGallery(){
    let elGallery = document.querySelector('.galery')
    elGallery.classList.remove('none')
    elGallery.classList.add('grid')

}
function hideGallery(){
    let elGallery = document.querySelector('.galery')
    elGallery.classList.remove('grid')
    elGallery.classList.add('none')
}
