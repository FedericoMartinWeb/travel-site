var gulp = require('gulp'),
watch = require('gulp-watch'),
// Paquete especifico de browser-sync
browserSync = require('browser-sync').create();

gulp.task('html', function(){
   console.log("HTML"); 
});

gulp.task('watch', function(){
   
    watch("./app/assets/styles/**/*.css", function(){
       gulp.start('styles'); 
    });
    
    watch('./app/assets/scripts/**/*.js', function(){
       gulp.start('scripts'); 
    });
});