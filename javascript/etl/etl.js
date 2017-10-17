class ETL {
  transform(old) {
    const newData = {};
    for (const [score, letters] of Object.entries(old)) {
      letters.forEach((letter) => {
        newData[letter.toLowerCase()] = Number(score);
      });
    }
    return newData;
  }
}

module.exports = ETL;
