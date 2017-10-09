class BeerSong {
  verse(num) {
    const verse = this.template(
      this.bottles(num),
      this.lineThree(num),
      this.bottles(num - 1)
    );

    return verse.charAt(0).toUpperCase() + verse.slice(1);
  }

  sing(start, end = 0) {
    let song = '';
    let first = start;

    for (first; first > end - 1; first -= 1) {
      song += this.verse(first);
      if (first !== end) {
        song += '\n';
      }
    }
    return song;
  }

  bottles(num) {
    if (num < 0) return '99 bottles of beer';
    if (num > 1) return `${num} bottles of beer`;
    if (num === 1) return '1 bottle of beer';
    return 'no more bottles of beer';
  }

  lineThree(num) {
    if (num > 1) return 'Take one down and pass it around';
    if (num === 1) return 'Take it down and pass it around';
    return 'Go to the store and buy some more';
  }

  template(bottles, lineThree, bottlesTwo) {
    return `${bottles} on the wall, ${bottles}.\n` +
           `${lineThree}, ${bottlesTwo} on the wall.\n`;
  }
}

module.exports = BeerSong;
