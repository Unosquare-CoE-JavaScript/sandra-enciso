/*
FLYWEIGHT
A space optimization technique that lets us use less memory by storing externally the data associated with similar objects.
*/

/*
Simulating formatted text
*/

class FormattedText
{
  constructor(plainText)
  {
    this.plainText = plainText;
    this.caps = new Array(plainText.length).map( //Array of booleans to determinate if a character must be capitalized
      function() { return false; } //put false in all spaces
    );
  }

  /*Function that capitalize a part of the text */
  capitalize(start, end) //start and end to capitalize
  {
    for (let i = start; i <= end; ++i)
      this.caps[i] = true;
  }

  toString()
  {
    let buffer = [];
    for (let i in this.plainText)
    {
      let c = this.plainText[i];
      buffer.push(this.caps[i] ? c.toUpperCase() : c);
    }
    return buffer.join('');
  }
}

/* stores information about the  start and end of a range */
// this would work better as a nested class
class TextRange
{
  constructor(start, end)
  {
    this.start = start;
    this.end = end;
    this.capitalize = false; //stores is you want to capitalize
    // other formatting options here
  }

  /* Tell us whether or not this range covers a particular position*/
  covers(position)
  {
    return position >= this.start && //The position is greater than or equal to this start position?
      position <= this.end; //Te position is less or equl to the end position?
  }
}

/*  */
class BetterFormattedText
{
  constructor(plainText)
  {
    this.plainText = plainText;
    this.formatting = [];
  }

  /* gives you a range and initialized range from the starting position towards the end position.
  The second thing it does is it also stores it in our formatting array
  */
  getRange(start, end)
  {
    let range = new TextRange(start, end); //Makes a new text range from start to end
    this.formatting.push(range);
    return range;
  }
/*
We're also going to go through every single character, but instead of looking at some sort of boolean array or a set of boolean race for how every single character should be trated,
we check whether or not the particular point is inside the ranges are specified in the formatting array
*/
  toString()
  {
    let buffer = [];
    for (let i in this.plainText)
    {
      let c = this.plainText[i];
      for (let range of this.formatting) {
        if (range.covers(i) && range.capitalize) //If the range covers the point and position and you want to capitalize it, then we're going to capitalize the letter
          c = c.toUpperCase();
      }
      buffer.push(c);
    }
    return buffer.join('');
  }
}

const text = 'This is a brave new world';
let ft = new FormattedText(text);
ft.capitalize(10, 15);
console.log(ft.toString());

let bft = new BetterFormattedText(text);
bft.getRange(16, 19).capitalize = true; //sets the capitalize true
console.log(bft.toString());