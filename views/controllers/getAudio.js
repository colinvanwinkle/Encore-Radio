var path = require('path');
var fs = require('fs');
//var ffmpeg = require('fluent-ffmpeg');
var ytdl = require('ytdl-core');

var exports = module.exports = {};

var audioOutput; var outFileName;
//var url = 'www.youtube.com/watch?v=dQw4w9WgXcQ';

var getAudio = function(url) {
	var audio = ytdl(url, {filter: function(f) {
		    return f.container == 'mp4' && !f.encoding; }});

	//outFileName = __dirname + '/../../songs/' + (url.substring(24)) + '.mp4';
	//audioOutput = path.resolve(__dirname, outFileName);
//	audio.pipe(fs.createWriteStream(audioOutput))
	exports.audio = audio;

		/*
	    //.on('finish', function() {
			    //    ffmpeg(fs.createReadStream('output.mp4'))     UNNEEDED
				    //  });
		*/

};
exports.getAudio = getAudio;

