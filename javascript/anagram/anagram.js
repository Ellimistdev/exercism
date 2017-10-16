class Anagram {
  constructor(needle) {
    this.needle = needle.toLowerCase();
  }

  matches(...args) {
    // given [] or series of strings, use an []
    const haystack = args[0] instanceof Array ? args[0] : args;
    const match = haystack.filter(entry => this.compare(entry.toLowerCase(), this.needle));
    // remove entries that match needle
    return match.filter(entry => entry.toLowerCase() !== this.needle);
  }

  compare(entry, target) {
    this.target = target.split('').sort();
    this.entry = entry.split('').sort();

    // bail if lengths are !==
    if (this.entry.length !== this.target.length) {
      return false;
    }

    // compare each char
    for (let i = 0; i < this.entry.length; i += 1) {
      if (this.entry[i] !== this.target[i]) {
        return false;
      }
    }
    return true;
  }
}

module.exports = Anagram;
