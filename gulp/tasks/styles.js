var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins'),
hexrgba = require('postcss-hexrgba');
    
gulp.task('styles', function(){
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport, mixins, nested, cssvars, hexrgba, autoprefixer]))
        //Para que aunque cometamos un error watch siga andando y te muestre el error
        .on('error', function(errorInfo){
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles'));
});
