// gulpfile.js
'use strict'

// modules
let gulp = require('gulp')
let sass = require('gulp-sass')
// let uglify = require('gulp-uglify')

// tasks

gulp.task('sass', function () {
  return gulp.src('./v/v.scss')
  .pipe(sass())
  .pipe(gulp.dest('./v/'))
})

gulp.task('default', ['sass'])
