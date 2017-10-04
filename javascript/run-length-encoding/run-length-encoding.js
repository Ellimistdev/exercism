class RLE {
  // given a string, returns a run length encoded string
  static encode(str) {
    let count = 0;
    let char = '';
    let out = '';

    str.split('').forEach((alpha) => {
      count += 1;
      if (alpha === char) {
        return;
      }
      if (char !== '') {
        out += this.appendEncoded(char, count);
      }
      char = alpha;
      count = 0;
    });
    out += this.appendEncoded(char, count + 1);

    return out;
  }

  // given a run length encoded string, returns the decoded string
  static decode(str) {
    // use a string to store count to account for multi digit nums
    let count = '';
    let out = '';

    str.split('').forEach((char) => {
      // build the count string
      if (char.match(/\d/)) {
        count += char;
        return;
      }
      // handle single char runs
      count = count ? parseInt(count, 10) : 1;
      // using the count and the current char, build the output string
      for (let i = 0; i < count; i += 1) {
        out += char;
      }
      count = '';
    });

    return out;
  }

  // helper method to build the encoded string
  static appendEncoded(char, count) {
    return (count > 1 ? count.toString() : '') + char;
  }
}
module.exports = RLE;
