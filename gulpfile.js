'use strict';

var gulp = require('gulp')
  , sass = require('gulp-sass')
  , plumber = require('gulp-plumber')
  , sync = require('browser-sync');


gulp.task('default', function(){
  sync.init({
    server: { baseDir: './site-apeperia/' }
  });

  gulp.watch('./site-apeperia/**/*').on('change', sync.reload);

  gulp.watch('./site-apeperia/css/**/*.scss').on('change', function (event) {
    console.log('Compilando o Sass.');
    gulp.src(event.path)
    .pipe(plumber())
    .pipe(sass()).on('error', sass.logError)
    .pipe(plumber.stop())
    .pipe(gulp.dest('./site-apeperia/css'));
  });
});
