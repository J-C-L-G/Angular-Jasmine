/**
 * Created by JCLG on 8/1/2016.
 */

var gulp = require('gulp'),
    del = require('del'),
    rename = require('gulp-rename'),
    inject = require('gulp-inject');

gulp.task('clean',function(){
    return del('./build');
});

gulp.task('copyFiles',['clean'],function(){
    gulp.src('./SpecRunner.html')
        .pipe(gulp.dest('./build/'));

    gulp.src('./spec/**')
        .pipe(gulp.dest('./build/spec'));

    gulp.src('./src/**')
        .pipe(gulp.dest('./build'));
});

gulp.task('libraries',['copyFiles'],function(){
    return gulp.src([ '!./bower_components/**/*jquery*',
                      '!./bower_components/**/*sizzle*',
                      '!./bower_components/jasmine-core/lib/jasmine-core/node_boot.js',
                      '!./bower_components/jasmine-core/lib/jasmine-core/json2.js',
                      './bower_components/**/*.min.js',
                      './bower_components/**/*.min.css',
                      './bower_components/**/angular.js',
                      './bower_components/**/*-mocks.js',
                      './bower_components/jasmine-core/images/jasmine_favicon.png',
                      './bower_components/jasmine-core/lib/jasmine-core/*.css',
                      './bower_components/jasmine-core/lib/jasmine-core/*.js'])
        //.pipe(rename({dirname: ''}))
        .pipe(gulp.dest('./build/lib'));
});

gulp.task('inject',['libraries'],function(){
    gulp.src('./build/SpecRunner.html')
    /*Jasmine*/
        .pipe(inject(gulp.src('./build/lib/*.css', {read: false}), {starttag: '<!-- inject:jasmine:css -->', relative:true}))
        .pipe(inject(gulp.src('./build/lib/jasmine.js', {read: false}), {starttag: '<!-- inject:jasmine:js -->', relative:true}))
        .pipe(inject(gulp.src('./build/lib/jasmine-html.js', {read: false}), {starttag: '<!-- inject:jasmine-html:js -->', relative:true}))
    /*Jasmine-Boot*/
        .pipe(inject(gulp.src('./build/lib//boot.js', {read: false}), {starttag: '<!-- inject:jasmine-boot:js -->', relative:true}))
    /*Bootstrap*/
        .pipe(inject(gulp.src('./build/lib/bootstrap/**/*.css', {read: false}), {starttag: '<!-- inject:bootstrap:css -->', relative:true}))
    /*Angular*/
        .pipe(inject(gulp.src('./build/lib/angular/**/angular.js', {read: false}), {starttag: '<!-- inject:angular:js -->', relative:true}))
    /*Angular Route*/
        .pipe(inject(gulp.src('./build/lib/angular-route/**/*.js', {read: false}), {starttag: '<!-- inject:angular-route:js -->', relative:true}))
    /*Angular Mocks*/
        .pipe(inject(gulp.src('./build/lib/angular-mocks/**/*.js', {read: false}), {starttag: '<!-- inject:angular-mocks:js -->', relative:true}))
    /*Angular Module*/
        .pipe(inject(gulp.src('./build/app/*.module.js', {read: false}), {starttag: '<!-- inject:module:js -->', relative:true}))
    /*Scripts*/
        .pipe(inject(gulp.src(['!./build/app/*.module.js','./build/app/**/*.js'], {read: false}), {starttag: '<!-- inject:components:js -->', relative:true}))
    /*Specs*/
        .pipe(inject(gulp.src('./build/spec/*.js', {read: false}), {starttag: '<!-- inject:specs:js -->', relative:true}))
        .pipe(gulp.dest('./build'));

    gulp.src('./build/index.html')
    /*Bootstrap*/
        .pipe(inject(gulp.src('./build/lib/bootstrap/**/*.css', {read: false}), {starttag: '<!-- inject:bootstrap:css -->', relative:true}))
    /*Angular*/
        .pipe(inject(gulp.src('./build/lib/angular/**/*min.js', {read: false}), {starttag: '<!-- inject:angular:js -->', relative:true}))
    /*Angular Route*/
        .pipe(inject(gulp.src('./build/lib/angular-route/**/*.js', {read: false}), {starttag: '<!-- inject:angular-route:js -->', relative:true}))
    /*Angular Module*/
        .pipe(inject(gulp.src('./build/app/*.module.js', {read: false}), {starttag: '<!-- inject:module:js -->', relative:true}))
    /*Scripts*/
        .pipe(inject(gulp.src(['!./build/app/*.module.js','./build/app/**/*.js'], {read: false}), {starttag: '<!-- inject:components:js -->', relative:true}))
        .pipe(gulp.dest('./build'));

});

gulp.task('default',['clean', 'copyFiles','libraries','inject']);
