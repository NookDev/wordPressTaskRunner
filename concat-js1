//ROOT FOLDER
var fileset = require('fileset'),
	buildify = require('buildify'),

	/*js_files = ["assets/js/!(scripts|scripts-min|scripts1-min|scripts2-min|scripts3-min).js"],*/

	//LOAD PRIORITY 1
	js_files1 = ["assets/js/priority1/!(scripts1).js"];

	
/*fileset(js_files, function(err, files) {
buildify()
  .concat(files)
  .save('/assets/js/scripts.js');
});*/

fileset(js_files1, function(err, files) {
buildify()
  .concat(files)
  .save('/assets/js/priority1/scripts1.js');
});



