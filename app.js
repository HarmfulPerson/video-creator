
const fs = require('fs');
const { concatAudio } = require('./audioConcat/index')
const {addFileToYoutube} = require('./addFileToYoutube/index')
const {}
const testFolder = './audio/';
let songs = []

addFileToYoutube();
fs.promises.readdir(testFolder)
    .then(filenames => {
        for (let filename of filenames) {
            songs.push(`audio/${filename}`)
        }
        
        const shuffledArray = shuffleArray(songs);
        concatAudio(shuffledArray)
    })
     .catch(err => {
        console.log(err)
    })

