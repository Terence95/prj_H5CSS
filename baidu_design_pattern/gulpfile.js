var gulp = require('gulp'),
    concat = require('gulp-concat'),
    compass = require('gulp-compass'),
    minifyCss = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    rev = require('gulp-rev'),
    revCollector = require('gulp-rev-collector'),
    uglify = require('gulp-uglify');

gulp.task('default', ['rev']);

gulp.task('rev', ['revCss'], function() {
    return gulp.src(['build/rev/**/*.json', 'app/*.html'])
        .pipe(revCollector())
        .pipe(gulp.dest('build'));
});


gulp.task('revCss', ['compass', 'css', 'images', 'libjs', 'modulejs', 'jpg', 'jpeg'], function() {
    return gulp.src(['build/rev/**/*.json', 'build/stylesheets/*.css'])
        .pipe(revCollector())
        .pipe(gulp.dest('build/stylesheets/'));
});


gulp.task('compass', function() {
    return gulp.src('app/css/*.scss')
        .pipe(compass({
            config_file: './config.rb',
            css: 'app/stylesheets',
            sass: 'app/sass'
        }))
        .pipe(concat('index.min.css'))
        .pipe(minifyCss())
        .pipe(rev())
        .pipe(gulp.dest('build/stylesheets'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('build/rev/sass'));
});


gulp.task('css', function() {
    return gulp.src('app/stylesheets/*.css')
        .pipe(minifyCss())
        .pipe(rev())
        .pipe(gulp.dest('build/stylesheets'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('build/rev/stylesheets'));
});


gulp.task('images', function() {
    return gulp.src('app/images/*.png')
        .pipe(imagemin())
        .pipe(rev())
        .pipe(gulp.dest('build/images'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('build/rev/images'));
});

gulp.task('jpg', function () {
    return gulp.src('app/images/*.jpg')
    .pipe(imagemin())
    .pipe(gulp.dest('build/images'));
});

gulp.task('jpeg', function () {
    return gulp.src('app/images/*.jpeg')
    .pipe(imagemin())
    .pipe(rev())
    .pipe(gulp.dest('build/images'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('build/rev/images'));
});


gulp.task('libjs', function() {
    return gulp.src('app/scripts/lib/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/scripts/lib'));
});

gulp.task('modulejs', function() {
    return gulp.src('app/scripts/module/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/scripts/module'));
});
