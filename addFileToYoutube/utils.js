module.exports.this.getRandomIntOfLength = (length) => {
  return Math.floor(Math.random() * ((length)))
}

module.exports.generateRandomTitleForCarols = () => {
  const firstAdjective = ['Best', 'Lovely', 'Top 100', 'The best', 'Top', 'The Most Famous', 'Beautiful'];
  const secondNoun = ['Christmas Songs', 'Christmas Hits', 'Christmas Mix', 'Carols', 'Christmas Music'];
  const thirdPart = ['of All Time', 'for Winter'];
  const playlist = 'Playlist'
  const year = ['2023', '2022'];
  const emojis = ['❤', '🎁', '🎅', '🎄', '💝'];

  const title = `${firstAdjective.splice(this.getRandomIntOfLength(firstAdjective.length), 1)} ${secondNoun.splice(this.getRandomIntOfLength(secondNoun.length), 1)} ${thirdPart[this.getRandomIntOfLength(thirdPart.length)]} ${playlist} ${year[this.getRandomIntOfLength(year.length)]} ${emojis[this.getRandomIntOfLength(emojis.length)]} ${firstAdjective.splice(this.getRandomIntOfLength(firstAdjective.length), 1)} ${secondNoun.splice(this.getRandomIntOfLength(secondNoun.length), 1)} ${emojis[this.getRandomIntOfLength(emojis.length)]}`

  return title;
}

module.exports.shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = newArray[i];
    newArray[i] = newArray[j];
    newArray[j] = temp;
  }

  return newArray;
}


