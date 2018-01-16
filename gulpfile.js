var gulp = require("gulp");
var browserify = require('browserify');
var babelify = require("babelify");
var source = require('vinyl-source-stream');
var webserver = require('gulp-webserver');
var del = require('del');

gulp.task("build", ["build-js", "build-resource", "build-css"]);

gulp.task("build-js", function () {
  return browserify({
    entries: ['src/js/app-main.js'],
    transform: ['babelify']
  })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('build/js'));
});

gulp.task("build-resource", function () {
  return gulp.src(["src/**/*.html", "src/**/*.png", "src/**/*.jpg", "src/**/*.gif", "src/js/resource/*.js"])
    .pipe(gulp.dest("build"));
});

gulp.task("build-css", function () {
  return gulp.src("src/**/*.css")
    .pipe(gulp.dest("build"));
});

gulp.task('webserver', function () {
  gulp.src('./build/')
    .pipe(webserver({
      host: '127.0.0.1',
      port: 3000,
      livereload: true
    })
    );
});

gulp.task('clean', function (done) {
  del(['./build/**/*'], done);
});

gulp.task('watch', ['build'], function () {
  gulp.watch('src/**/*', ['build']);
});