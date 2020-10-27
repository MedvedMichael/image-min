const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const imageResize = require('gulp-image-resize')

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

function getFileReadStream (path) {
    return gulp.src(path)
}

function manageImage (path, options) { 
    return this.pipe(imageResize(options))
}


const resizeImage = (path, options) => manageImage(path, {
        crop: false,
        upscale: true,
        ...options
    })

// //({
//     width: 640,
//     // height: 400,
//     crop: false,
//     upscale: true
// }
const cropImage = (path, options) => manageImage(path, {
        crop: true,
        upscale: false,
        ...options
    })


const makePictogram = (path) => {
    gulp.src(path).pipe(imageResize({
        width: 640,
        crop: false,
        upscale: true,
    })).pipe(imageResize({
        crop:true,
        upscale:false,
        height: 50
    })).pipe(gulp.dest('dist/resized'))
}

module.exports = {
    imageMin,
    makePictogram
}