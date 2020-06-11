const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function style() {
    // where is my css
    return gulp.src('./scss/**/*.scss')
        // pass that file through the compiler
        .pipe(sass())

        // where do i save the compiles css
        .pipe(gulp.dest('./css'))
        // for stream changes to browser
        .pipe(browserSync.stream())
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('.js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;


