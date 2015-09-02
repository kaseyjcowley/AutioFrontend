var gulp   = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('watch-lint', function () {
  gulp.watch('./assets/js/**/*.js', function (event) {
    gulp.src(event.path)
      .pipe(eslint())
      .pipe(eslint.format());
  });
});

gulp.task('watch', ['watch-lint']);
