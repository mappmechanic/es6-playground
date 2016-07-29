var gulp = require('gulp'),
	serve = require('browser-sync'),
	sync = require('run-sequence'),
	webpack = require('gulp-webpack');


gulp.task('build', function() {
  return gulp.src('./src/app.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./src/dist'));
});

gulp.task('serve', function() {
  // This will serve our client folder on localhost:4500
  serve({
    port: 5000,
    open: false,
    server: {
      baseDir: 'src'
    }
  });
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.{js,css,html}', ['build',serve.reload])
});


// new default task
gulp.task('default', function(done) {
  sync('build','serve', 'watch', done);
});
