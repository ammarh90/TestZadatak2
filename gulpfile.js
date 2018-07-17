'use strict';

// Requires the gulp plugins
var gulp 		 = require('gulp'),
	sass 		 = require('gulp-sass'),
	sourcemaps   = require('gulp-sourcemaps'),
	autoprefixer = require('gulp-autoprefixer'),
	plumber 	 = require('gulp-plumber'),
	notify 		 = require('gulp-notify'),
	runSequence  = require('run-sequence'),
    clean 		 = require('gulp-clean');
    

var onError = function(err) {
  notify.onError({
    title:    "Gulp",
    subtitle: "Failure!",
    message:  "Error: <%= error.message %>",
    sound:    "Basso"
  })(err);
  this.emit('end');
};

// Sass options
var sassOptions = {
	errLogToConsole: true,
	outputStyle: "expanded",
	includePaths: require('node-normalize-scss').includePaths
};

// Autoprefixed options
var autoprefixerOptions = {
	browsers: ['last 2 versions']
};

// Compile sass files to css task
gulp.task('sass', function(){
	return gulp.src('source/scss/styles.scss')
		.pipe(plumber({errorHandler: onError}))
		.pipe(sourcemaps.init())
		.pipe(sass(sassOptions))
		.pipe(autoprefixer(autoprefixerOptions))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist/css'));
});

// Watch for file changes task
gulp.task('watch', function(){
	// Watch scss files
	gulp.watch('source/scss/**/*.scss', ['sass']);

	// Watch all files except sass
	gulp.watch(['source/**', '!source/{scss,scss/**}'], ['copy']);
});

// Copy project files
gulp.task('copy', function () {
	return gulp.src(['source/**', '!source/{scss,scss/**}'])
           .pipe(gulp.dest('dist/'));
});
 
// Clean dist folder
gulp.task('clean', function () {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});


//Use slideshow script


// BUILD TASKS
// ------------

gulp.task('default', function(done) {
  runSequence('clean', 'sass', 'copy', 'watch', done);
});

gulp.task('build', function(done) {
  runSequence('clean', 'sass', 'copy', done);
});