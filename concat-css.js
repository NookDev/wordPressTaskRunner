var fileset = require('fileset'),
	buildify = require('buildify'),
	css_files = ["assets/scss/!(styles.min).css"];
	
fileset(css_files, function(err, files) {
buildify()
  .concat(files)
  .save("assets/scss/styles.min.css");
});

