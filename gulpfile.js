'use strict';

var gulp 					= require('gulp'),
		autoprefixer 	= require('gulp-autoprefixer'),
		cssnano				= require('gulp-cssnano'),
		browserify		= require('gulp-browserify'),
		uglify				= require('gulp-uglify'),
		jshint				= require('gulp-jshint'),
		composer			= require('composer');

var SRC = './src';
var DIST = './dist';

gulp.task('css', function () {
  return gulp.src(SRC + '/scss/styles.scss')
    .pipe(autoprefixer({
    	browsers: ['>1%'],
    	cascade: false
    }))
    .pipe(cssnano())
    .pipe(gulp.dest(DIST + '/css'));
});

gulp.task('scripts',function () {
  return gulp.src(SRC + '/js/*.js')
  	.pipe(jshint('.jshintrc'))
  	.pipe(jshint.reporter('jshint-stylish'))
  	.pipe(browserify({
  		insertGlobals : true,
  	}))
  	.pipe(uglify())
  	.pipe(gulp.dest(DIST + '/js'));

});

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

gulp.task('watch', ['default'], function ()  {
  gulp.watch(SRC + '/css/**/*.css', ['css']);
  gulp.watch(filesToCopy, ['copy']);
  gulp.watch(SRC + '/img/*', ['copy']);
  gulp.watch(SRC + '/js/**/*.js', ['scripts']);
});

gulp.task('default', ['copy','css','scripts']);





