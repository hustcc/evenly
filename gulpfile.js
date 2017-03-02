const gulp = require('gulp');
const injectVersion = require('gulp-inject-version');

gulp.task('build', function() {
  gulp.src('src/evenly.js')
  .pipe(injectVersion())
  .pipe(gulp.dest('dist/'))
});