const Letter = require("./Letter");

class Word {
    constructor(word){
    this.word = word
    this.letters = word.split("").map(function(char) {
       return new Letter(char);
    }) 
    
    }

    guessLetter(char) {
        for (let i = 0; i < this.letters.length; i++){
            if (this.letters[i].guess(char)){
                return true;
            } 
           
        } 
        return false;
    }
    guessedCorrectly(char) {
        for (let i = 0; i < this.letters.length; i++){
            if (this.letters[i].guessLetter(char)){
                return true;
            } 
           
        } 
        return false;
    }
    }


  

module.exports = Word;
