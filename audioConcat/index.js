const audioconcat = require('audioconcat');
const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegInstaller.path);
const { createMovie } = require('../createMovie/index')

module.exports.concatAudio = (songs) => {
  audioconcat(songs)
  .concat('concatenated-audio.mp3')
  .on('error', error => console.log('Failed to concatenate files', error))
    .on('end', () =>         createMovie()
    );
}