
var gulp = require('gulp');

//html 压缩
var htmlmin = require('gulp-htmlmin');

gulp.task('html',function () {
	gulp.src('src/*.html')
		.pipe(htmlmin({
			collapseWhitespace: true,
			removeComments: true
		}))
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

//less 编译 自动添加前缀 压缩
var less = require('gulp-less');
var LessPluginAutoPrefix = require('less-plugin-autoprefix');
var autoprefix = new LessPluginAutoPrefix({
	browsers: ["last 5 versions"],
	cascade: true
});
//var cssnano = require('gulp-cssnano');

gulp.task('less',function () {
	gulp.src(['src/styles/*.less','!src/styles/_*.less'])
		.pipe(less({
			plugins: [autoprefix]
		}))
		//.pipe(cssnano())
		.pipe(gulp.dest('dist/styles'))
		.pipe(browserSync.reload({
			stream: true
		}));
});


//js 合并 混淆
//var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('script',function () {
	gulp.src('src/scripts/*.js')
		//.pipe(concat('app.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/scripts'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

// 图片 字体 转移
gulp.task('image',function () {
	gulp.src('src/images/*.*')
		.pipe(gulp.dest('dist/images'))
		.pipe(browserSync.reload({
			stream: true
		}));
	gulp.src('src/font/.*')
		.pipe(gulp.dest('dist/font'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

var browserSync = require('browser-sync');

// Static server
gulp.task('serve',function () {
	browserSync({
		server: {
			baseDir: ['dist'],
            routes: {
                "/bower_components": "bower_components"
            }
		}
	}, function(err, bs) {
		console.log(bs.options.getIn(["urls", "local"]));
	});

	gulp.watch('src/*.html',['html']);
	gulp.watch('src/styles/*.less',['less']);
	gulp.watch('src/scripts/*.js',['script']);
	gulp.watch('src/images/*.*',['image']);
});