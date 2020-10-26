const express = require('express')
const imageMin = require('./image-min')
const app = express()

const PORT = 3000



app.listen(PORT, () => {
    imageMin('pictures/HS.jpg')
})