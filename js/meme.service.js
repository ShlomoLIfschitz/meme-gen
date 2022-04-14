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
                isDrag: false,
                isChosen: true,
                showColor:'#FFFA4D',
                showBlure:15
            },
            {
                pos: { x: 200, y: 350 },
                txt: 'Enter your text',
                size: 50,
                align: 'left',
                txtColor: 'red',
                strokeColor: 'blue',
                isDrag: false,
                isChosen: false,
                showColor:'',
                showBlure:0
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
    // gMeme.selectedLineIdx++
    let line = {
        pos: { x: 200, y:getRandomIntInclusive(100,350) },
        txt: 'Enter your text',
        size: 50,
        align: 'left',
        txtColor: 'red',
        strokeColor: 'blue',
        isDrag: false,
        showColor:'',
        showBlure:0
    }

    gMeme.lines.push(line)
    console.log('line', gMeme);
}

function changeLine(){
    let prevLine = gMeme.selectedLineIdx
    console.log(prevLine)
    gMeme.lines[prevLine].showColor = ''
    gMeme.lines[prevLine].showblure = 0
    gMeme.selectedLineIdx++
    if(gMeme.selectedLineIdx === gMeme.lines.length)gMeme.selectedLineIdx = 0
    let currLine = gMeme.selectedLineIdx
    console.log(currLine)
    gMeme.lines[currLine].showColor = '#FFFA4D'
    gMeme.lines[currLine].showblure = 15

}

function clearLine(){
    gMeme.lines.splice(gMeme.selectedLineIdx,1)
    // changeLine()
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

