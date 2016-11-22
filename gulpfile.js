var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');

gulp.task('default', function () {
    gulp.src('resources/css/*.css')
        .pipe(minifyCSS())
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('public/css'))
});

gulp.task('minify', function () {
    gulp.src(['resources/js/jquery-1.4.min.js', 'resources/js/jquery.imagerotator.1.0.min.js', 'resources/js/bootstrap.min.js', 'resources/js/site.js'])
        .pipe(concat('scripts.min.js'))
        .pipe(gulp.dest('public/js'))
});
