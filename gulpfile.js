const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const cache = require('gulp-cache');

gulp.task('imagemin', () =>
  gulp.src('static/**/!(hd_)*.{png,jpg,gif,svg}')
    .pipe(cache(imagemin([
      imagemin.gifsicle(),
      // imagemin.jpegtran({progressive: true}),
      imageminMozjpeg({ quality: 85 }),
      imagemin.optipng({ optimizationLevel: 6 })
    ])))
    .pipe(gulp.dest('static'))
);
