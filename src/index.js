const express = require('express')
const {imageMin, makePictogram} = require('./image-min')
const app = express()

const PORT = 3000



app.listen(PORT, () => {
    // resizeImage('pictures/HS.jpg')
    // imageMin('pictures/HS.jpg')
    makePictogram('pictures/HS.jpg')
})