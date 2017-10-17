class FoodChain {
  constructor() {
    this.animals = ['fly', 'spider', 'bird', 'cat', 'dog', 'goat', 'cow', 'horse'];
  }

  verse(input) {
    const num = input - 1;

    return `${this.lineOne(num)}` +
           `${this.lineTwo(num)}` +
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

  lineTwo(num) {
    switch (num) {
      case 1:
        return '\nIt wriggled and jiggled and tickled inside her.';
      case 2:
        return '\nHow absurd to swallow a bird!';
      case 3:
        return '\nImagine that, to swallow a cat!';
      case 4:
        return '\nWhat a hog, to swallow a dog!';
      case 5:
        return '\nJust opened her throat and swallowed a goat!';
      case 6:
        return "\nI don't know how she swallowed a cow!";
      default:
        return '';
    }
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
