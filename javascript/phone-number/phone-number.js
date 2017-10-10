class PhoneNumber {
  constructor(num) {
    this.num = num;
  }

  number() {
    const phone = this.num.replace(/\D/g, '').replace(/^1/, '');
    if ((phone.length !== 10) || !(/^[2-9]..[2-9]/).test(phone)) {
      return null;
    }
    return phone;
  }
}

module.exports = PhoneNumber;
