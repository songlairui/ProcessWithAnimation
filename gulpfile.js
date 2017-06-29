var gulp = require('gulp')
var sass = require('gulp-sass')
var browserSync = require('browser-sync')
var reload = browserSync.reload

gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: './'
    }
  })
  gulp.watch(['*.html', 'css/**/*.css', 'script/**/*.js'], { cwd: './' }, reload)
})
gulp.task('sass', function() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/'))
})

gulp.task('watch', function() {
  gulp.watch(['./sass/**/*.scss'], ['sass'])
})