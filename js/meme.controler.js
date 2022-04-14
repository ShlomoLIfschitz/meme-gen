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
    // let img = document.querySelector(`.img-${meme.selectedImgId}`)
    drawImg(meme)
}

function drawImg(meme) {
    var img = new Image();
    img.src = `img/${meme.selectedImgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
        drawText()
    };
}


function drawText() {
    let meme = getMeme()
    let currLine = meme.selectedLineIdx
    console.log('line', currLine);
    let size = meme.lines[currLine].size
    meme.lines.forEach(line => {
        gCtx.shadowColor = `${line.showColor}`
        console.log( gCtx.shadowColor)
        gCtx.shadowBlure = `${line.showBlure}`
        console.log( gCtx.shadowBlure)
        gCtx.textBaseline = 'top'
        gCtx.textAlign = 'center'
        gCtx.fillStyle = line.txtColor
        gCtx.font = `${size}px david`
        gCtx.strokeStyle = line.strokeColor;
        gCtx.strokeText(line.txt, line.pos.x, line.pos.y)
    });
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

function onSetLineTxt(val) {
    setLineTxt(val)
    RenderMeme()
}

function onSetTxtColor(val) {
    setTxtColor(val)
    RenderMeme()
}

function onSetStrokeColor(val) {
    setStrokeColor(val)
    RenderMeme()
}

function onSetFontSize(val) {
    setFontSize(val)
    RenderMeme()
}

function onSetNewLine() {
    setNewLine()
    RenderMeme()
}


function onChangeLine(){
    changeLine()
    RenderMeme()
}

function onClearLine() {
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

// function addListeners() {
//     let meme = getMeme()
//     addMouseListeners()
//     addTouchListeners()
//     window.addEventListener('resize', () => {
//         resizeCanvas()
//         const center = { x: gElCanvas.width / 2, y: gElCanvas.height / 2 }
//         if (meme.selectedLineIdx === 0) {
//             drawText(meme.lines[gMeme.selectedLineIdx].txt, 200, 50)
//         } else if (meme.selectedLineIdx === 1) {
//             drawText(meme.lines[gMeme.selectedLineIdx].txt, 200, 200)
//         } else drawText(meme.lines[gMeme.selectedLineIdx].txt, 200, 50)
//         renderCanvas()
//     }
//     )
// }

// function addMouseListeners() {
//     gElCanvas.addEventListener('mousemove', onMove)
//     gElCanvas.addEventListener('mousedown', onDown)
//     gElCanvas.addEventListener('mouseup', onUp)
// }

// function addTouchListeners() {
//     gElCanvas.addEventListener('touchmove', onMove)
//     gElCanvas.addEventListener('touchstart', onDown)
//     gElCanvas.addEventListener('touchend', onUp)
// }

// function onDown(ev) {
//     const pos = getEvPos(ev)
//     if (!isLineClicked(pos)) return
//     setLineDrag(true)
//     gStartPos = pos
//     document.body.style.cursor = 'grabbing'

// }

// function onMove(ev) {
//     const meme = getMeme();
//     const line = meme.lines[selectedLineIdx]
//     if (!line.isDrag) return
//     const pos = getEvPos(ev)
//     const dx = pos.x - gStartPos.x
//     const dy = pos.y - gStartPos.y
//     moveLine(dx, dy)
//     gStartPos = pos
//     renderCanvas()
// }

// function onUp() {
//     setLineDrag(false)
//     document.body.style.cursor = 'grab'
// }

// function resizeCanvas() {
//     const elContainer = document.querySelector('.canvas-container')
//     gElCanvas.width = elContainer.offsetWidth
//     gElCanvas.height = elContainer.offsetHeight
// }

