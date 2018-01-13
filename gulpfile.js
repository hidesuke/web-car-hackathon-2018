var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var webserver = require('gulp-webserver');
var del = require('del');

gulp.task("build", ["build-js", "build-html", "build-css"]);

gulp.task("build-js", function () {
  return gulp.src("src/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat("app.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("build/js"));
});

gulp.task("build-html", function () {
  return gulp.src(["src/**/*.html", "src/**/*.png", "src/**/*.jpg", "src/**/*.gif"])
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