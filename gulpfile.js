var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var uglifyCss = require('gulp-uglifycss');

var useRef = require('gulp-useref');
var gulpIf = require('gulp-if');


// gulp.task('watch', ['browserSync'], function(){
// 	gulp.watch('app/index.html', browserSync.reload);
// 	gulp.watch('app/css/*.css', browserSync.reload);
// 	gulp.watch('app/js/*.js', browserSync.reload);
// });

gulp.task('watch', ['browserSync', 'sass'], function(){
	gulp.watch('app/sass/main.scss', ['sass']);
	gulp.watch('app/index.html', browserSync.reload);
	gulp.watch('app/js/*.js', browserSync.reload);
});

gulp.task('useref', function(){
	return gulp.src('app/*.html')
		.pipe(useRef())
		.pipe(gulpIf('*.js', uglify()))
		.pipe(gulpIf('*.css', uglifyCss()))
		.pipe(gulp.dest('dist'));
});

gulp.task('browserSync', function () {
	browserSync.init({
		server: 'app'
	});
});

gulp.task('sass', function(){
	return gulp.src('app/sass/main.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('concat-min-js', function(){
	return gulp.src('app/js/*.js')
		.pipe(concat('all.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist'));
});

gulp.task('concat-min-css', function(){
	return gulp.src('app/css/*.css')
		.pipe(concat('all.min.css'))
		.pipe(uglify())
		.pipe(gulp.dest('dist'));
});

gulp.task('concat-min', ['concat-min-js', 'concat-min-css']);