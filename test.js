'use strict';
var assert = require('assert');
var gutil = require('gulp-util');
var gulpEnsureNgAnnotate = require('./');

it('should ', function (cb) {
	var stream = gulpEnsureNgAnnotate();

	stream.on('data', function (file) {
		assert.strictEqual(file.contents.toString(), 'unicorns');
	});

	stream.on('end', cb);

	stream.write(new gutil.File({
		// base: __dirname,
		// path: __dirname + '/file.ext',
		contents: new Buffer('unicorns')
	}));

	stream.end();
});
