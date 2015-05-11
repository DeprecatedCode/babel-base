/**
 * @module babel-base/module/gulp-init
 * @author Nate Ferrero
 */
var gulp = require('gulp');
var babel = require('gulp-babel');

var SOURCE = 'src/**/*.js';
var DEST = 'dist';

module.exports = function gulpInit (source, dest) {
    source = source || SOURCE;
    dest = dest || DEST;

    gulp.task('default', function () {
      return gulp.src(source)
        .pipe(babel({stage: 0}))
        .pipe(gulp.dest(dest));
    });

    gulp.task('watch', function () {
        gulp.watch(source, ['default'])
    });

    return gulp;
};
