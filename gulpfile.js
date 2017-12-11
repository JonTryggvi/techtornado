"use strict";

var $ = require('gulp-load-plugins')();
// var server      = require('express')();
var argv = require('yargs').argv;
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var merge = require('merge-stream');
var sequence = require('run-sequence');
var colors = require('colors');
var dateFormat = require('dateformat');
var del = require('del');
var cleanCSS = require('gulp-clean-css');
var gutil = require('gulp-util');
var uglifyEs = require('gulp-uglify-es').default;
var imagemin = require('gulp-imagemin');
var mampFolder = '2017-f-web-des/tech-tornado';
var URL = 'http://localhost:8888/' + mampFolder;



// Check for --production flag
var isProduction;
if (process.argv[2] == 'package') {
  isProduction = true;
} else {
  isProduction = false;
}
console.log(isProduction);
// console.log(process.argv[2]);
// Browsers to target when prefixing CSS.
var COMPATIBILITY = [
  'last 2 versions',
  'ie >= 9',
  'Android >= 2.3'
];

// File paths to various assets are defined here.
var PATHS = {
  sass: [

  ],

  javascript: [
    'js/anime.min.js',
    'js/main.js',
    'js/hammer.js',
    'js/custom/**/*.js'
  ],

  pkg: [
    '**/*',
    '!**/img/**',
    '!**/js/custom/**',
    '!**/node_modules/**',
    '!**/components/**',
    '!**/scss/**',
    '!**/bower.json',
    '!**/gulpfile.js',
    '!**/package.json',
    '!**/composer.json',
    '!**/composer.lock',
    '!**/packaged/*',
  ]
};

// Browsersync task
gulp.task('browser-sync', ['build'], function() {

  var files = [
    'js/custom/**/*.js',
    'scss/**/*.scss',
    'index.php',
    '**/*.php',
    'images/**/*.{png,jpg,gif}',
  ];

  browserSync.init(files, {
    // Proxy address
    proxy: URL,

    // Port #
    // port: PORT
  });
});

// Compile Sass into CSS
// In production, the CSS is compressed
gulp.task('sass', function() {
  return gulp.src('scss/styles.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      includePaths: PATHS.sass
    }))
    .on('error', $.notify.onError({
      message: "<%= error.message %>",
      title: "Sass Error"
    }))
    .pipe($.autoprefixer({
      browsers: COMPATIBILITY
    }))
    // Minify CSS if run with --production flag
    .pipe($.if(isProduction, cleanCSS()))
    .pipe($.if(!isProduction, $.sourcemaps.write('.')))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream({
      match: '**/*.css'
    }));
});


// Lint all JS files in custom directory
gulp.task('lint', function() {
  return gulp.src('js/custom/**/*.js')
    .pipe($.jshint())
    .pipe($.notify(function(file) {
      if (file.jshint.success) {
        return false;
      }

      var errors = file.jshint.results.map(function(data) {
        if (data.error) {
          return "(" + data.error.line + ':' + data.error.character + ') ' + data.error.reason;
        }
      }).join("\n");
      return file.relative + " (" + file.jshint.results.length + " errors)\n" + errors;
    }));
});

// Combine JavaScript into one file
// In production, the file is minified



// on('error', $.notify.onError({
//   message: "<%= error.message %>",
//   title: "Uglify JS Error"
// }))

gulp.task('images', function(cb) {
  gulp.src(['img/**/*.jpg']).pipe(imageop({
    optimizationLevel: 5,
    progressive: true,
    interlaced: true
  })).pipe(gulp.dest('test/')).on('end', cb).on('error', cb);
});

gulp.task('imgop', () =>
  gulp.src('img/**/*')
  .pipe($.if(isProduction, imagemin()))
  .pipe(gulp.dest('opt_img'))
);

gulp.task("uglifyEs", function() {
  return gulp.src("js/scripts.js")
    .pipe(rename("scripts.min.js"))
    .pipe(sourcemaps.init())
    .pipe(uglifyEs())
    .pipe(sourcemaps.write('.')) // Inline source maps.
    // For external source map file:
    //.pipe(sourcemaps.write("./maps")) // In this case: lib/maps/bundle.min.js.map
    .pipe(gulp.dest("js/"));
});

gulp.task('javascript', function() {
  var uglify = uglifyEs().on('error', function(err) {
    gutil.log(gutil.colors.red('[Error]'), err.toString());
    this.emit('end');
  });

  return gulp.src(PATHS.javascript)
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    .pipe($.concat('scripts.js', {
      newLine: '\n;'
    }))
    .pipe($.if(isProduction, uglify))
    .pipe($.if(!isProduction, $.sourcemaps.write(".")))
    .pipe(gulp.dest('js'))
    .pipe(browserSync.stream());
});



// Package task
gulp.task('package', ['build'], function() {
  var fs = require('fs');
  var time = dateFormat(new Date(), "yyyy-mm-dd_HH-MM");
  var pkg = JSON.parse(fs.readFileSync('./package.json'));
  var title = pkg.name + '_' + time + '.zip';

  return gulp.src(PATHS.pkg)
    .pipe($.zip(title))
    .pipe(gulp.dest('packaged'));
});

// Build task
// Runs copy then runs sass & javascript in parallel
gulp.task('build', ['clean', ], function(done) {
  sequence(
    ['sass', 'javascript', 'lint'],
    done);
});


// Clean task
gulp.task('clean', function(done) {
  sequence(['clean:css'], done);
});

// Clean CSS
gulp.task('clean:css', function() {
  return del([
    'stylesheets/styles.css',
    'stylesheets/styles.css.map',
    'stylesheets/admin-styles.css',
    'stylesheets/admin-styles.css.map'
  ]);
});

// Default gulp task
// Run build task and watch for file changes
gulp.task('default', ['build', 'browser-sync'], function() {
  // Log file changes to console
  function logFileChange(event) {
    var fileName = require('path').relative(__dirname, event.path);
    console.log('[' + 'WATCH'.green + '] ' + fileName.magenta + ' was ' + event.type + ', running tasks...');
  }

  // Sass Watch
  gulp.watch(['scss/**/*.scss'], ['clean:css', 'sass'])
    .on('change', function(event) {
      logFileChange(event);
    });

  // JS Watch
  gulp.watch(['js/custom/**/*.js'], ['javascript', 'lint'])
    .on('change', function(event) {
      logFileChange(event);
    });

});