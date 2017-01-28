var gulp = require('gulp');
var less = require('gulp-less');
var sourceMaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');

gulp.task('less', function() {
  return gulp.src('./less/application.less')
    .pipe(sourceMaps.init())
    .pipe(less())
    .pipe(sourceMaps.write())
    .pipe(gulp.dest('./public'));
});

gulp.task('watch', function() {
  return watch('less/**/*.less', function () {
    gulp.src('./less/application.less')
      .pipe(sourceMaps.init())
      .pipe(less())
      .pipe(sourceMaps.write())
      .pipe(gulp.dest('./public'));
  });
});