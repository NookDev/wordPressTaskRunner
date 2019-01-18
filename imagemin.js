const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
const imageminGifsicle = require('imagemin-gifsicle');

//UPLOADS
imagemin(['../../uploads/**/*.{jpg,png}'], '../../uploads', {
	plugins: [
		imageminJpegtran(),
		imageminPngquant({quality: '65-80'})
	]
}).then(files => {
	console.log('Upload\'s jpeg \& png\'s optimized.', files);
	//=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
});

imagemin(['../../uploads/**/*.gif'], '../../uploads', {use: [imageminGifsicle()]}).then(() => {
    console.log('Upload\'s gif\'s optimized.');
});

//IMAGES
imagemin(['assets/images/**/*.{jpg,png}'], 'assets/images', {
	plugins: [
		imageminJpegtran(),
		imageminPngquant({quality: '65-80'})
	]
}).then(files => {
	console.log('Image folder\'s jpeg \& png\'s optimized.', files);
	//=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
});

imagemin(['assets/images/*.gif'], 'assets/images', {use: [imageminGifsicle()]}).then(() => {
    console.log('Image folder\'s gif\'s optimized.');
});
