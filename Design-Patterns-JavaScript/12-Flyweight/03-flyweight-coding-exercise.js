/*
You are given a class called Sentence, which takes a string such as 'hello world'.
You need to provide a method at(index) such that the method returns a flyweight that can be used
to capitalize a particular word in the sentence.

Typical use would be something like:

let s = new Sentence('alpha beta gamma')<
s.at(1).capitalize = true;
console.log(s.toString()); //alpha BETA gamma

*/

/*
helps to storage if a word must be capitalized.
*/
class WordToken
{
  constructor(capitalize=false)
  {
    this.capitalize = capitalize;
  }
}

class Sentence //Takes a text and then separate the strings by ' '
{
  constructor(plainText)
  {
    this.words = plainText.split(' ');
    this.tokens = {};
  }

  at(index) //storage the word at the index which must be capitalized
  {
    let wt = new WordToken();
    this.tokens[index] = wt;
    return this.tokens[index];
  }

  //Goes through the words and evaluate if the word must be capitalized... comparing the word with the tokens stored before
  toString()
  {
    let buffer = [];
    for (let i = 0; i < this.words.length; ++i)
    {
      let w = this.words[i];
      if (this.tokens[i] && this.tokens[i].capitalize)
        w = w.toUpperCase();
      buffer.push(w);
    }
    return buffer.join(' ');
  }
}

let s = new Sentence('alpha beta gamma');
s.at(1).capitalize = true;
console.log(s.toString()); //alpha BETA gamma

/*
SUMMARY
Store common data externally
Specify an index or a reference into the external data store
Define the idea of 'ranges' on homogeneous collections and store data related to those ranges
*/