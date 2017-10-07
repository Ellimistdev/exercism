class BeerSong {
  verse(num) {
    let s = 's';
    let lastS = 's';
    let lastNum = num - 1;
    let count = num;
    let line3 = 'Take one down and pass it around, ';

    if (num - 1 === 1) {
      lastS = '';
    }
    if (num === 1) {
      s = '';
      lastNum = 'no more';
      line3 = 'Take it down and pass it around, ';
    } else if (num === 0) {
      lastNum = 99;
      count = 'no more';
      line3 = 'Go to the store and buy some more, ';
    }
    let verse = (count + ' bottle' + s + ' of beer on the wall, ' +
                 count + ' bottle' + s + ' of beer.\n' + line3 + lastNum + ' bottle' +
                 lastS + ' of beer on the wall.\n');

    verse = verse.charAt(0).toUpperCase() + verse.slice(1);
    return verse;
  }

  sing(start, end = 0) {
    let song = '';
    let first = start;
    const last = end;

    for (first; first > last - 1; first -= 1) {
      song += this.verse(first);
      if (first !== last) {
        song += '\n';
      }
    }
    return song;
  }
}

module.exports = BeerSong;
