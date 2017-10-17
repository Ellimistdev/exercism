class FoodChain {
  constructor() {
    this.animals = ['fly', 'spider', 'bird', 'cat', 'dog', 'goat', 'cow', 'horse'];
    this.lineTwo = {
      0: '',
      1: '\nIt wriggled and jiggled and tickled inside her.',
      2: '\nHow absurd to swallow a bird!',
      3: '\nImagine that, to swallow a cat!',
      4: '\nWhat a hog, to swallow a dog!',
      5: '\nJust opened her throat and swallowed a goat!',
      6: "\nI don't know how she swallowed a cow!",
      7: '',
    };
  }

  verse(input) {
    const num = input - 1;

    return `${this.lineOne(num)}` +
           `${this.lineTwo[num]}` +
           `${this.cumulativeLine(num)}` +
           `${this.finalLine(num)}\n`;
  }

  verses(num, finish) {
    let verses = '';
    let start = num;

    while (start <= finish) {
      verses += `${this.verse(start)}\n`;
      start += 1;
    }

    return verses;
  }

  lineOne(num) {
    return `I know an old lady who swallowed a ${this.animals[num]}.`;
  }

  cumulativeLine(num) {
    let count = num;
    let lines = '';

    while (count > 0 && count < 7) {
      lines += `\nShe swallowed the ${this.animals[count]}` +
               ` to catch the ${this.animals[count - 1]}`;
      if (count === 2) {
        lines += ' that wriggled and jiggled and tickled inside her';
      }
      lines += '.';
      count -= 1;
    }
    return lines;
  }

  finalLine(num) {
    if (num === 7) return "\nShe's dead, of course!";
    return "\nI don't know why she swallowed the fly. Perhaps she'll die.";
  }
}

module.exports = FoodChain;
