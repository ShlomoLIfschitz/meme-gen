'use strict'

function renderCanvas() {
    let elCanvas = document.querySelector('.meme-editor')
    let strHtml = `  <div class="canvas-container">
    <canvas id="my-canvas" width="400" height="400"></canvas>
</div>
<div class="editor-container">
    <div class="txt-area">
        <input class="text" type="text" name="txt-meme" onchange="onSetLineTxt(this.value)" placeholder="enter text">
    </div>
    <div class="switch-lines">
        <img class="editor-img up-down-line"
            src="img/icons/up-and-down-opposite-double-arrows-side-by-side.png" onclick="onChangeLine()" alt="">
    </div>
    <div class="add-line">
        <img class="editor-img add-line" src="img/icons/add.png" onclick="onSetNewLine()" alt="">
    </div>
    <div class="trash">
        <img class="editor-img trash-line" src="img/icons/trash.png" onclick="onClearLine()" alt="">
    </div>
    <div class="big-font">
        <img class="editor-img increase-font" src="img/icons/increase font - icon.png" onclick="onSetFontSize(5)" alt="">
    </div>
    <div class="small-font">
        <img class="editor-img decrease-font" src="img/icons/decrease font - icon.png" onclick="onSetFontSize(-5)" alt="">
    </div>
    <div class="align-left">
        <img class="editor-img align-line-left" src="img/icons/align-to-left.png" alt="">
    </div>
    <div class="align-center">
        <img class="editor-img align-line-center" src="img/icons/center-text-alignment.png" alt="">
    </div>
    <div class="align-right">
        <img class="editor-img align-line-right" src="img/icons/align-to-right.png" alt="">
    </div>
    <div class="color-txt">
        <label for="text-color">
            <img class="editor-img align-line-right" src="img/icons/paint-board-and-brush.png" alt="">
            <input type="color" name="font-color" onchange="onSetTxtColor(this.value)">
        </label>
    </div>
    <div class="color-stroke">
        <label for="stroke-colo">
            <img class="editor-img align-line-right" src="img/icons/text stroke.png" alt="">
            <input type="color" name="font-color" onchange="onSetStrokeColor(this.value)">
        </label>
    </div>
    <section class="stickers">

    </section>

    <button class="download-meme" onclick="onDownload()">DOWNLOAD</button>
    <button class="share-meme" onclick="onShare()">SHARE</button>
</div>`
    elCanvas.innerHTML = strHtml
}