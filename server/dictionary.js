const fs = require('fs').promises;

const getAllwords = () => {
  return fs.readFile('/usr/share/dict/words', 'utf8')
  .then((data) => {
    const arrTwordle = data.split(' ')[0].split('\n').filter((word) =>
    word.length === 5
    )
    return arrTwordle[Math.floor(Math.random() * arrTwordle.length)].toUpperCase()

  })
  .catch((err) => {
    console.log(err.message)
  });
}

module.exports = { getAllwords }