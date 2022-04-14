'use strict'
const gTouchEvs = ['touchstart', 'touchmove', 'touchend']
var gElCanvas

function onGetImgById(imgId) {
    hideGallery()
    showCanvas()
    setMeme(imgId)
    RenderMeme()

}

function RenderMeme() {
    let meme = getMeme()
    let img = document.querySelector(`.img-${meme.selectedImgId}`)
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height) //img,x,y,xend,yend
    drawText(meme.lines[gMeme.selectedLineIdx].txt, 200, 50 )
}
    


function drawText(txt, x, y) {
    let meme =getMeme()
    let currLine = meme.selectedLineIdx
    // meme.lines[currLine].size
    let size = meme.lines[currLine].size
    gCtx.textBaseline = 'top'
    gCtx.textAlign = 'center'
    // gCtx.lineWidth = 2;
    gCtx.fillStyle = getTxtColor();
    gCtx.font = `${size}px david`
    // gCtx.fillText(txt, x, y);
    gCtx.strokeStyle = getStrokeColor()
    gCtx.strokeText(txt, x, y)
}


function showCanvas() {
    let elCanvas = document.querySelector('.meme-editor')
    elCanvas.classList.remove('none')
    elCanvas.classList.add('flex')

}

function hideCanvas() {
    let elCanvas = document.querySelector('.meme-editor')
    elCanvas.classList.remove('flex')
    elCanvas.classList.add('none')
}

function onSetLineTxt(val){
    setLineTxt(val)
    RenderMeme()
}

function onSetTxtColor(val){
    setTxtColor(val)
    RenderMeme()
}

function onSetStrokeColor(val){
    setStrokeColor(val)
    RenderMeme()
}

function onSetFontSize(val){
    setFontSize(val)
    RenderMeme()
}

function onSetNewLine(){
     setNewLine()
     RenderMeme()
}

function onClearLine(){
    clearLine()
    RenderMeme()
}


function getEvPos(ev) {
    var pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }
    if (gTouchEvs.includes(ev.type)) {
        ev.preventDefault()
        ev = ev.changedTouches[0]
        pos = {
            x: ev.pageX - ev.target.offsetLeft,
            y: ev.pageY - ev.target.offsetTop
        }
    }
    return pos
}

function addListeners() {
    let meme = getMeme()
    addMouseListeners()
    addTouchListeners()
    window.addEventListener('resize', () => {
        resizeCanvas()
        const center = { x: gElCanvas.width / 2, y: gElCanvas.height / 2 }
        drawText(meme.lines[gMeme.selectedLineIdx].txt, 200, 50 )
        renderCanvas()
    })
}

function addMouseListeners() {
    gElCanvas.addEventListener('mousemove', onMove)
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    gElCanvas.addEventListener('touchmove', onMove)
    gElCanvas.addEventListener('touchstart', onDown)
    gElCanvas.addEventListener('touchend', onUp)
}

function onDown(ev) {
    const pos = getEvPos(ev)
    if (!isLineClicked(pos)) return
    setLineDrag(true)
    gStartPos = pos
    document.body.style.cursor = 'grabbing'

}

function onMove(ev) {
    const meme = getMeme();
    const line = meme.lines[selectedLineIdx]
    if (!line.isDrag) return
    const pos = getEvPos(ev)
    const dx = pos.x - gStartPos.x
    const dy = pos.y - gStartPos.y
    moveLine(dx, dy)
    gStartPos = pos
    renderCanvas()
}

function onUp() {
    setLineDrag(false)
    document.body.style.cursor = 'grab'
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}
