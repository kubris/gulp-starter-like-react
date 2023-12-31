const gulp 	= require('gulp');

// Tasks
require('./gulp/dev.js');	// development
require('./gulp/docs.js');	// production
require('./gulp/wp.js');	// for CMS

// === GULP RUN ===
// developmen: gulp
gulp.task('default', 
	gulp.series('clean:dev', 
	gulp.parallel('html:dev', 'sass:dev', 'images:dev', 'fonts:dev', 'files:dev', 'js:dev'),
	gulp.parallel('server:dev', 'watch:dev')
));

// production: gulp docs
gulp.task(
	'docs', 
	gulp.series('clean:docs', 
		gulp.parallel('html:docs', 'sass:docs', 'images:docs', 'fonts:docs', 'files:docs', 'js:docs'),
		gulp.parallel('server:docs')
));

// production for cms: gulp wp
gulp.task(
	'wp', 
	gulp.series('clean:wp', 
		gulp.parallel('html:wp', 'sass:wp', 'images:wp', 'fonts:wp', 'files:wp', 'js:wp'),
		gulp.parallel('server:wp')
));
// === end GULP RUN ===