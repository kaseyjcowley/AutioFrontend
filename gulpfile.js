var gulp        = require('gulp');
var react       = require('reactify');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var merge       = require('merge-stream');
var rename      = require('gulp-rename');
var del         = require('del');
var browserify  = require('browserify');
var jshint      = require('gulp-jshint');
var browserSync = require('browser-sync');
var source      = require('vinyl-source-stream');
var buffer      = require('vinyl-buffer');
var reload      = browserSync.reload;

var paths = {
  sass: './assets/sass/**/*.scss',
  js: './assets/js/**/*.js',
  jsx: './assets/js/**/*.jsx',
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

// Live reload server
gulp.task('server', function () {
  browserSync({
    server: {
      baseDir: './'
    }
  })
});

// Linting JS files
gulp.task('lint', function () {
  return gulp.src(paths.js)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Compile the javascript
gulp.task('js', function () {
  return browserify(paths.app)
    .transform(react)
    .bundle()
    .pipe(source(dest.app))
    .pipe(gulp.dest(dest.dist));
});

// Minify the javascript
gulp.task('js:min', function () {
  return browserify(paths.app)
    .transform(react)
    .bundle()
    .pipe(source(dest.app))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest(dest.dist));
});

// Compile resources and serve application
gulp.task('serve', ['clean', 'lint', 'js', 'server'], function () {
  return gulp.watch(
    [paths.js, paths.jsx, paths.html],
    ['lint', 'js', browserSync.reload]
  );
});


gulp.task('serve:minified', ['clean', 'lint', 'js:min', 'server'], function () {
  return gulp.watch(
    [paths.js, paths.jsx, paths.html],
    ['lint', 'js:min', browserSync.reload]
  );
});