class ETL {
  transform(old) {
    let newData = {};
    for (const [score, letters] of Object.entries(old)) {
      letters.forEach(function(letter) {
        newData[letter.toLowerCase()] = Number(score);
      });
    }
    return newData;
  }
}

module.exports = ETL;
