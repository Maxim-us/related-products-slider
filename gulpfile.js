let gulp        = require( 'gulp' );
let clean       = require( 'gulp-clean' );
let concat      = require( 'gulp-concat' );
let minify      = require( 'gulp-minify' );
let cleanCSS    = require( 'gulp-clean-css');
 
// clean directories
gulp.task( 'clean-scripts', () => {
  return gulp.src( [
                        './tmp/compile/js/*.js',
                        './build/assets/js/*.js',
                        './demo/assets/js/*.js',
                        './build/assets/css/related-product-slider.css',
                        './demo/assets/css/related-product-slider.css'
                    ], {read: false} )
    .pipe( clean() );
});

// concatination and minify
gulp.task( 'concat-scripts', () => {  
    return gulp.src( './app/js/*.js' )
        .pipe( concat('related-product-slider.js') )
        .pipe( gulp.dest('./tmp/compile/js/') )
} );

// compress script
gulp.task( 'compress-script', () => {
  gulp.src( './tmp/compile/js/*.js' )
    .pipe( minify( {
        ext:{
            src:'-debug.js',
            min:'.min.js'
        }
    } ) )
    .pipe( gulp.dest('./build/assets/js') )
    .pipe( gulp.dest('./demo/assets/js') )
});

// compress css
gulp.task( 'minify-css', () => {
  return gulp.src('./app/css/related-product-slider.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe( gulp.dest('./build/assets/css') )
    .pipe( gulp.dest('./demo/assets/css') )
} );

// run
gulp.task( 'default', ['clean-scripts','concat-scripts','compress-script','minify-css'] );