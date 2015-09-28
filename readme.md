# gulp-ensure-ng-annotate [![Build Status](https://travis-ci.org/christian-fei/gulp-ensure-ng-annotate.svg?branch=master)](https://travis-ci.org/christian-fei/gulp-ensure-ng-annotate)


## Install

```
$ npm install --save-dev gulp-ensure-ng-annotate
```


## Usage

```js
var gulp = require('gulp');
var gulpEnsureNgAnnotate = require('gulp-ensure-ng-annotate');

gulp.task('default', function () {
	return gulp.src('src/file.js')
		.pipe(gulpEnsureNgAnnotate())
		.pipe(gulp.dest('dist'));
});
```


## License

MIT © [christian-fei](http://christian.fei.ninja)
