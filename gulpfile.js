const gulp = require('gulp'),
      merge = require('gulp-merge-json');

gulp.task('json', function(){
    gulp.src('src/**/*.json')
        .pipe(merge({
            fileName: 'snippet.json',

        }))
        .pipe(gulp.dest('./dist/'));
});
