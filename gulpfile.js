var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefix = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename');

gulp.task('default', function () {
    gulp.src(['src/fleyout.scss'])
        .pipe(sass())
        .pipe(autoprefix({ 
            browsers: [
                'ie >= 8',
                'ie_mob >= 10',
                'ff >= 26',
                'chrome >= 20',
                'safari >= 6',
                'opera >= 23',
                'ios >= 5',
                'android >= 2.3',
                'bb >= 10'
            ]
        }))
        .pipe( cssnano() ) 
        .pipe( rename( {suffix: '.min'} ) )
        .pipe( gulp.dest('dist') ); 
});

gulp.task('watch', function() {
    gulp.watch('src/*.scss', ['default']);
});


