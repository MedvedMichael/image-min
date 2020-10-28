const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const sharp = require('sharp')

// ImageMagick have to be installed on PC/server!!!

const imageMin = (path) => (
    gulp.src(path)
    .pipe(imagemin([
        // imagemin.gifsicle({interlaced: true}),
        imagemin.mozjpeg({
            quality: 60,
            progressive: true
        }),
        // imagemin.optipng({optimizationLevel: 3}),
        // imagemin.svgo({
        //     plugins: [
        //         {removeViewBox: true},
        //         {cleanupIDs: false}
        //     ]
        // })
    ]))
    .pipe(gulp.dest('dist/pictures'))
);

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
    imageMin,
    makePictogram,
    makeSuitablePicture
}