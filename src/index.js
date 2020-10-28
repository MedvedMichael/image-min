const express = require('express')
const {imageMin, makePictogram, makeSuitablePicture} = require('./image-min')
const app = express()

const PORT = 3000



app.listen(PORT, () => {
    // resizeImage('pictures/HS.jpg')
    // imageMin('pictures/HS.jpg')
    makePictogram('pictures/HS.jpg')
    // makeSuitablePicture('pictures/HS.jpg', {left: 0, top:0, width: 640, height: 400})

})