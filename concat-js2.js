//ROOT FOLDER
var fileset = require('fileset'),
	buildify = require('buildify'),

	/*js_files = ["assets/js/!(scripts|scripts-min|scripts1-min|scripts2-min|scripts3-min).js"],*/

	//LOAD PRIORITY 2
	js_files2 = ["assets/js/priority2/!(scripts2).js"];
	
/*fileset(js_files, function(err, files) {
buildify()
  .concat(files)
  .save('/assets/js/scripts.js');
});*/

fileset(js_files2, function(err, files) {
buildify()
  .concat(files)
  .save('/assets/js/priority2/scripts2.js');
});




