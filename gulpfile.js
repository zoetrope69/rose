var gulp =  require('gulp'),

	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),

	sass = require('gulp-sass'),
	prefix = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),

	browserSync = require('browser-sync'),
	cp = require('child_process'),
	rename = require('gulp-rename');

var messages = {
	jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * build the Jekyll site
 */
gulp.task('jekyll-build', function (done) {
	browserSync.notify(messages.jekyllBuild);
	return cp.spawn('jekyll', ['build', '--drafts'], { stdio: 'inherit' })
		.on('close', done);
});

/**
 * build the Jekyll site (without drafts)
 */
gulp.task('jekyll-build-deploy', function (done) {
	browserSync.notify(messages.jekyllBuild);
	return cp.spawn('jekyll', ['serve'], { stdio: 'inherit' })
		.on('close', done);
});

/**
 * rebuild jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
	browserSync.reload();
});

/**
 * wait for jekyll-build, then launch the server
 */
gulp.task('browser-sync', ['scripts', 'sass', 'jekyll-build'], function() {
	browserSync.init(null, {
		server: {
			baseDir: '_site'
		},
		host: "localhost"
	});
});


/** JS
 * concat and minify javascript
 * reload browsers and save into both _site/js/ (for live injecting) and js/ (for future jekyll builds)
 */
gulp.task('scripts', function() {
	gulp.src('_scripts/*.js')
		.pipe(concat('script.js'))
		.pipe(uglify())
		.pipe(rename('script.min.js'))
		.pipe(gulp.dest('_site/js'))
		.pipe(browserSync.reload({ stream: true }))
		.pipe(gulp.dest('js'))
	// js libraries
	gulp.src('_scripts/lib/*.js')
		.pipe(gulp.dest('_site/js'))
		.pipe(browserSync.reload({ stream: true }))
		.pipe(gulp.dest('js'))
});

/** SASS
 * compile sass, add vendor prefixes then minify.
 * reload browsers and save into both _site/css/ (for live injecting) and css/ (for future jekyll builds)
 */
gulp.task('sass', function () {
	gulp.src('_scss/rose.scss')
		.pipe(sass({
			includePaths: ['scss'],
			onError: browserSync.notify
		}))
		.pipe(prefix(['last 2 versions', 'ie 8', 'ie 9']))
		.pipe(rename('style.css'))
		.pipe(minifyCSS())
		.pipe(rename('style.min.css'))
		.pipe(gulp.dest('_site/css'))
		.pipe(browserSync.reload({ stream: true }))
		.pipe(gulp.dest('css'))
});

/**
 * watch JS/SASS files for changes & recompile
 * watch html/md/image files, run jekyll & reload browsers
 */
gulp.task('watch', function () {
	gulp.watch('_scripts/*.js', ['scripts']);
	gulp.watch('_scss/**/*.scss', ['sass']);
	gulp.watch(['**/*.html', '**/*.php', '**/*.md', 'img/*', '_config', '_data/*'], ['jekyll-rebuild']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);
gulp.task('deploy', ['scripts', 'sass', 'jekyll-build-deploy']);