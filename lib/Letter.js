class Letter {
  constructor(char) {
    const checklist = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    if(checklist.includes(char.toLowerCase())) {
        this.visible = false;
    } else {
        this.visible = true
    }
    this.char = char;
  }
  toString() {
    if(this.visible === true) {
        this.char
    } else {
        return "_"
    }
  }
  guess(char) {
    if(this.char === char) {
        return true;
    } else {
        return false; 
    }
  }
  getSolution() {
    return this.char;
  }
}

module.exports = Letter;
