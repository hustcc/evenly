const gulp = require('gulp');
const injectVersion = require('gulp-inject-version');
const uglify = require('gulp-uglify');
const rename = require("gulp-rename");

gulp.task('build', function() {
  gulp.src('src/evenly.js')
  .pipe(injectVersion())
  .pipe(gulp.dest('dist/'))
  .pipe(uglify({
    preserveComments: 'license'
  }))    //uglify
  .pipe(rename("evenly.min.js"))
  .pipe(gulp.dest('dist/'))
});