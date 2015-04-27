var gulp = require('gulp');
var webserver = require('gulp-webserver');
var sass = require('gulp-ruby-sass');
 
gulp.task('sass', function() {
    return sass('sass/', {style : 'expanded'}) 
    .on('error', function (err) {
      console.error('Error!', err.message);
   })
    .pipe(gulp.dest('css'));
});

gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

gulp.task('watch', function(){
  gulp.watch('js/*.js');
  gulp.watch('sass/*.scss', ['sass']); 
});

gulp.task('default', ['webserver', 'sass', 'watch']);