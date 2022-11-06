
const fs = require('fs');
const { concatAudio } = require('./audioConcat/index')

const testFolder = './audio/';
let songs = []

fs.promises.readdir(testFolder)
    .then(filenames => {
        for (let filename of filenames) {
            songs.push(`audio/${filename}`)
        }
        concatAudio(songs)
    })
     .catch(err => {
        console.log(err)
    })

