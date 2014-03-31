var gulp = require('gulp');

var pkg = require('./package.json');

var clean = require('gulp-clean');
var rename = require('gulp-rename');
var less = require('gulp-less');
var imagemin = require('gulp-imagemin');
var header = require('gulp-header');

var banner = '/*!\n' +
             ' * Skypecon v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
             ' * Copyright 2014 <%= pkg.author %>\n' +
             ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n' +
             ' */\n\n';


gulp.task('watch:less', function () {
    gulp.watch('./src/less/*.less', ['less:dev']);
});


gulp.task('copy:dev', function () {
  gulp.src('./src/*.html')
      .pipe(gulp.dest('./dev'));

  gulp.src('./src/emoticons/stills*.png')
      .pipe(gulp.dest('./dev/img'));

  gulp.src('./src/emoticons/anim/*.png')
      .pipe(rename({suffix: "_anim"}))
      .pipe(gulp.dest('./dev/img'));

  gulp.src('./src/emoticons/anim@2x/*.png')
      .pipe(rename({suffix: "_anim@2x"}))
      .pipe(gulp.dest('./dev/img'));
});

gulp.task('copy:dist', function () {
  gulp.src('./src/emoticons/stills*.png')
      .pipe(gulp.dest('./dist/img'));

  gulp.src('./src/emoticons/anim/*.png')
      .pipe(rename({suffix: "_anim"}))
      .pipe(gulp.dest('./dist/img'));

  gulp.src('./src/emoticons/anim@2x/*.png')
      .pipe(rename({suffix: "_anim@2x"}))
      .pipe(gulp.dest('./dist/img'));
});
// Error occuring for now...
// gulp.task('imagemin:dist', function() {
//   //gulp.src('src/skype-icons/**/*')
//   gulp.src('./src/emoticons/anim/[a-m]*.png')
//       .pipe(imagemin())
//       .pipe(rename({suffix: "_anim"}))
//       .pipe(gulp.dest('./dist/img'));
// });


gulp.task('less:dev', function () {
  gulp.src('./src/less/' + pkg.name + '.less')
      .pipe(less({
        //yuicompress: true,
        dumpLineNumbers: 'comments'
      }))
      .pipe(gulp.dest('./dev/css'));
});

gulp.task('less:dist', function () {
  gulp.src('./src/less/' + pkg.name + '.less')
      .pipe(less())
      .pipe(header(banner, {pkg : pkg}))
      .pipe(gulp.dest('./dist/css'));
});

gulp.task('less:minify', function () {
  gulp.src('./src/less/' + pkg.name + '.less')
      .pipe(less({
        //report: 'gzip',
        compress: true
      }))
      .pipe(rename({
        suffix: ".min"
      }))
      .pipe(header(banner, {pkg : pkg}))
      .pipe(gulp.dest('./dist/css'));
});


gulp.task('clean:dev', function () {
  return gulp.src('./dev', {read: false})
    .pipe(clean());
});

gulp.task('clean:dist', function () {
  return gulp.src('./dist', {read: false})
    .pipe(clean());
});

gulp.task('clean:all', ['clean:dev', 'clean:dist'], function () {
  gulp.src('./node_modules', {read: false})
    .pipe(clean());
});

gulp.task('build:dev', ['less:dev', 'copy:dev']);
gulp.task('build:dist', ['clean:dist', 'copy:dist'/*'imagemin:dist'*/, 'less:dist', 'less:minify']);

gulp.task('default', ['build:dist'], function () {
  // place [additional] code for your default task here
});
