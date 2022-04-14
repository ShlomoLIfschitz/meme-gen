'use strict'

let gMemes
let gMeme

function getMeme() {
    return gMeme
}

function setMeme(selectedImgId) {
    gMeme = {
        selectedImgId,
        selectedLineIdx: 0,
        lines: [
            {
                pos: { x: 200, y: 50 },
                txt: 'Enter your text',
                size: 50,
                align: 'left',
                txtColor: 'red',
                strokeColor: 'blue',
                isDrag: false
            }
        ]

    }
}

function getFontSize() {
    return gMeme.lines[gMeme.selectedLineIdx].size
}

function getTxtColor() {
    return gMeme.lines[gMeme.selectedLineIdx].txtColor

}

function getStrokeColor() {
    return gMeme.lines[gMeme.selectedLineIdx].strokeColor

}

function setLineTxt(val) {
    return gMeme.lines[gMeme.selectedLineIdx].txt = val
}

function setTxtColor(val) {
    gMeme.lines[gMeme.selectedLineIdx].txtColor = val
}

function setStrokeColor(val) {
    gMeme.lines[gMeme.selectedLineIdx].strokeColor = val
}

function setFontSize(val) {
    if (gMeme.lines[gMeme.selectedLineIdx].size === 65) val = -10
    if (gMeme.lines[gMeme.selectedLineIdx].size === 10) val = 10
    gMeme.lines[gMeme.selectedLineIdx].size += val
}

function setNewLine(){
    let line = {
        pos: { x: 200, y: 50 },
        txt: 'Enter your text',
        size: 50,
        align: 'left',
        txtColor: 'red',
        strokeColor: 'blue',
        isDrag: false
    }
}

function isLineClicked(clickedPos) {
    const { pos } = gMeme.lines[selectedLineIdx]
    const distance = Math.sqrt((pos.x - clickedPos.x) ** 2 + (pos.y - clickedPos.y) ** 2)
    return distance <= gMeme.lines[selectedLineIdx].size
}




function setLineDrag(isDrag) {
    gMeme.lines[selectedLineIdx].isDrag = isDrag
}

function moveLine(dx, dy) {
    gMeme.lines[selectedLineIdx].pos.x += dx
    gMeme.lines[selectedLineIdx].pos.y += dy
}

