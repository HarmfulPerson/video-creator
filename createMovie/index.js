var videoshow = require('videoshow')
var imageFolder = __dirname + '/../images/tree.jpg';
const ffmpeg = require('fluent-ffmpeg');
const { getAudioDurationInSeconds } = require('get-audio-duration')

module.exports.createMovie = (audioLength) => {
  console.log('XDDDDDDDDDDDDDDDDDDD');

  var images = [
    imageFolder
  ];
  getAudioDurationInSeconds(__dirname + '/../concatenated-audio.mp3').then((duration) => {
    var videoOptions = {
      fps: 25,
      loop: 10, // seconds
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
      option: ['force_original_aspect_ratio=increase']
    }
    
    videoshow(images, videoOptions)
      .audio(__dirname + '/../concatenated-audio.mp3')
      .save('video.mp4')
      .on('start', function (command) {
        console.log('ffmpeg process started:', command)
      })
      .on('error', function (err, stdout, stderr) {
        console.error('Error:', err)
        console.error('ffmpeg stderr:', stderr)
      })
      .on('end', function (output) {
        console.error('Video created in:', output)
      })
  })
}