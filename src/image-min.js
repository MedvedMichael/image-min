
const sharp = require('sharp')

// ImageMagick have to be installed on PC/server!!!

const minimizeImage = (path) => {
    const res = path.split('/')
    sharp(path)
    .jpeg({
        progressive: true,
        quality: 60,
        force: false
    })
    .png({
        progressive: true,
        quality: 60,
        force: false
    })
    .toFile(`dist/minimized/${res[res.length - 1]}`)

};

const makePictogram = (path) => {
    const res = path.split('/')
    const image = sharp(path).resize(640).resize(640, 100, {
        gravity: 'center'
    }).toFile(`dist/resized/${res[res.length - 1]}`)
}

// x=0 y=0 in left-up corner
const makeSuitablePicture = (path, props) => {
    const res = path.split('/')
    sharp(path).extract(props).toFile(`dist/cropped/${res[res.length - 1]}`)
}


module.exports = {
    minimizeImage,
    makePictogram,
    makeSuitablePicture
}