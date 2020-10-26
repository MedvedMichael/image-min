const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

const imageMin = (path) => (
    gulp.src(path)
        .pipe(imagemin([
            // imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({quality: 60, progressive: true}),
            imagemin.optipng({optimizationLevel: 3}),
            // imagemin.svgo({
            //     plugins: [
            //         {removeViewBox: true},
            //         {cleanupIDs: false}
            //     ]
            // })
        ]))
        .pipe(gulp.dest('dist/pictures'))
);
 
module.exports = imageMin