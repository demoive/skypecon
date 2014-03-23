var gulp = require('gulp');

// Use this to access properties of the package
//var pkg = require('./package.json');

var clean = require('gulp-clean');
var rename = require('gulp-rename');
var less = require('gulp-less');
var imagemin = require('gulp-imagemin');

gulp.task('watch:less', function() {
    gulp.watch('./src/less/*.less', ['less:dev']);
});

gulp.task('copy:dev', function() {
  gulp.src('./src/*.html')
      .pipe(gulp.dest('./dev'));

  gulp.src('./src/skype-icons/*')
      .pipe(gulp.dest('./dev/img'));
});

gulp.task('less:dev', function() {
  gulp.src('./src/less/skypecon.less')
      .pipe(less({
        //yuicompress: true,
        //report: 'gzip'
      }))
      .pipe(gulp.dest('./dev/css'));
});

gulp.task('less:dist', function() {
  gulp.src('./src/less/skypecon.less')
      .pipe(less({
        compress: true
      }))
      .pipe(rename({
        suffix: ".min"
      }))
      .pipe(gulp.dest('./dist/css'));
});

gulp.task('imagemin:dist', function() {
  gulp.src('src/skype-icons/**/*')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/img'));
});

/*
gulp.tasks('copy', function() {
  gulp.src('./src/**')
      .pipe(gulp.dest('./dist/'));
});
*/

gulp.task('clean:dev', function () {
  gulp.src('./dev', {read: false})
    .pipe(clean());
});

gulp.task('clean:dist', function () {
  gulp.src('./dist', {read: false})
    .pipe(clean());
});

gulp.task('clean:all', ['clean:dev', 'clean:dist'], function () {
  gulp.src('./node_modules', {read: false})
    .pipe(clean());
});

gulp.task('build:dev', ['less:dev', 'copy:dev']);
gulp.task('build:dist', ['clean:dist', 'imagemin:dist', 'less:dist']);

gulp.task('default', [''], function() {
  // place code for your default task here
});
