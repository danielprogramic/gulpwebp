
//comejpg/*.jpg'    
var gulp = require('gulp');
var webp = require('gulp-webp');
 
gulp.task('default', function () {
	return gulp.src('FoderStar/*.jpg')
		.pipe(webp())
		.pipe(gulp.dest('FoderEnd'));
});



