//Import Gulp
var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('sass', function(){
   return gulp.src('App/scss/styles.scss')
          .pipe(sass())
          .pipe(gulp.dest('App/css'))	
});