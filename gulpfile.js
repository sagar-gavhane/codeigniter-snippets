const gulp = require('gulp');
const merge = require('gulp-merge-json');

// gulp task for build snippet.json file inside dist directory
gulp.task('json', function(){
    gulp.src('src/**/*.json')
        .pipe(merge({
            fileName: 'snippet.json',

        }))
        .pipe(gulp.dest('./dist/'));
});

// gulp task for watching upcomming changes
gulp.task('watch', () => {
    gulp.watch('src/**/*.json', ['json']);
});