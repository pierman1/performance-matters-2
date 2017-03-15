var gulp = require('gulp');
const imagemin = require('gulp-imagemin');
var webp = require('gulp-webp');

gulp.task('imageToWebp', () => {
    gulp.src('src/dist/images')
    .pipe(webp())
    .pipe(gulp.dest('src/dist/images'))
});

gulp.task('imagemin', () => {
    gulp.src('./src/assets/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('src/dist/images'))

});

gulp.task('default', ['imagemin', 'imageToWebp']);

