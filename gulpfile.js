'use strict';

var gulp = require('gulp');

var SRC = './src';
var DIST = './dist';

var filesToCopy = [
		SRC + '/*.html',
		SRC + '/*.php',
		SRC + '/img/*',
		SRC + '/includes/*',
		SRC + '/templates/*',
	];

/** copy files from src */
gulp.task('copy',() => {
  return gulp.src(filesToCopy, { base: SRC })
  	.pipe(gulp.dest(DIST));
});

gulp.task('default', ['copy', 'connect']);





