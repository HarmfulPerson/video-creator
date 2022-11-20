var videoshow = require('videoshow')
const { getRandomIntOfLength } = require('../addFileToYoutube/utils')
var imageFolder = __dirname + `/../images/${this.getRandomIntOfLength(8)}.jpg`;
const ffmpeg = require('fluent-ffmpeg');
const { getAudioDurationInSeconds } = require('get-audio-duration')
const {addFileToYoutube} = require('../addFileToYoutube/index')
module.exports.createMovie = (audioLength) => {
  console.log('test');
  var images = [
    imageFolder
  ];
  getAudioDurationInSeconds(__dirname + '/../concatenated-audio.mp3').then((duration) => {
    var videoOptions = {
      fps: 25,
      loop: Math.round(duration), // seconds
      transition: true,
      transitionDuration: 1, // seconds
      videoBitrate: 1024,
      videoCodec: 'libx264',
      size: '1920x1280',
      aspect: '4:3',
      audioBitrate: '128k',
      audioChannels: 2,
      format: 'mp4',
      pixelFormat: 'yuv420p',
    }
    videoshow(images, videoOptions)
      .audio(__dirname + '/../concatenated-audio.mp3')
      .save('video.mp4')
      .on('start', function (command) {
      })
      .on('error', function (err, stdout, stderr) {
        console.error('Error:', err)
        console.error('ffmpeg stderr:', stderr)
      })
      .on('end', function (output) {
        console.error('Video created in:', output)
        ffmpeg('./video.mp4')
        .outputOptions(['-vf', 'scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080'])
        .on('error', function(err) {
          console.log('An error occurred: ' + err);
        })
        .on('end', function() {
          console.log(new Date())
          console.log('Processing finished !');
        })
        .saveToFile('addFileToYoutube/video1.mp4')
        .on('end', function() {
          addFileToYoutube();
        })
      })
  })
}