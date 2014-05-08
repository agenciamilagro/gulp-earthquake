var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');

/**
 * Sass task
 */
gulp.task('sass', function () {
  return gulp.src('path/to/assets/sass/main.scss')
    .pipe(sass({ style: 'compressed'}))
    .pipe(gulp.dest('path/to/build/css'));
});

/**
 * JS task
 */
gulp.task('uglify', function () {
  return gulp.src('path/to/assets/js/**/.js')
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('path/to/build/js'))
});

/**
 * Watch task
 */
gulp.task('watch', function () {
  server.listen(35729, function (err) {
    if (err) {
      return console.log(err)
    };

    gulp.watch('path/to/assets/sass/*.scss', ['styles']);

    gulp.watch('path/to/assets/js/**/*.js', ['compress']);
  })
});

/**
 * Default task
 */
gulp.task('default', ['watch'], function () {
  gulp.start('sass', 'uglify');
});
