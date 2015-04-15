var gulp        = require('gulp');
var react       = require('reactify');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var eslint      = require('gulp-eslint');
var del         = require('del');
var browserify  = require('browserify');
var watchify    = require('watchify');
var notify      = require("gulp-notify");
var browserSync = require('browser-sync');
var source      = require('vinyl-source-stream');
var reload      = browserSync.reload;

var paths = {
  sass: './assets/sass/**/*.scss',
  js: './assets/js/**/*.js',
  app: './assets/js/app.js',
  html: '*.html'
};

var dest = {
  style: 'style.css',
  app: 'app.js',
  dist: 'dist'
};

// Remove all compiled files
gulp.task('clean', function (cb) {
  del('./assets/dist/**/*', cb);
});

// Linting JS files
gulp.task('lint', function () {
  return gulp.src(paths.js)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError())
    .pipe(notify("ESLint found warnings/errors!"));
});

gulp.task('browserify', function () {
  var bundler = browserify({
    entries: [paths.app],
    transform: [react],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
  });

  var watcher = watchify(bundler);

  return watcher.on('update', function () {
    gulp.run('lint');

    var updateStart = Date.now();

    watcher.bundle()
      .pipe(source(dest.app))
      .pipe(gulp.dest(dest.dist));

    console.log('Browserify finished after', (Date.now() - updateStart) + 'ms');
  })
    .bundle()
    .pipe(source(dest.app))
    .pipe(gulp.dest(dest.dist));
});

gulp.task('watch', function () {
  gulp.watch(paths.js, ['lint', 'browserify']);
});

gulp.task('default', ['clean', 'lint', 'browserify', 'watch']);
