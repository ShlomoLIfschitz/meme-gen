'use strict'

const STORAGE_KEY = 'imgsDB'

let gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
let gImgs
_createimgs()



function getImgs() {
    return gImgs
}

function _createimgs() {
    let imgs = loadFromStorage(STORAGE_KEY)
    if (!imgs || !imgs.length) {
        imgs = [
            createImg('1.jpg',1),
            createImg('2.jpg',2),
            createImg('3.jpg',3),
            createImg('4.jpg',4),
            createImg('5.jpg',5),
            createImg('6.jpg',6),
            createImg('7.jpg',7),
            createImg('8.jpg',8),
            createImg('9.jpg',9),
            createImg('10.jpg',10),
            createImg('11.jpg',11),
            createImg('12.jpg',12),
            createImg('13.jpg',13),
            createImg('14.jpg',14),
            createImg('15.jpg',15),
            createImg('16.jpg',16),
            createImg('17.jpg',17),
            createImg('18.jpg',18),

        ]
    }
    gImgs = imgs;
    _saveImgsToStorage();
}

function createImg(url, id , keywords = ['funny', 'smart']) {
    return {
        id,
        url,
        keywords,
    }
}


function _saveImgsToStorage() {
    saveToStorage(STORAGE_KEY, gImgs)
}