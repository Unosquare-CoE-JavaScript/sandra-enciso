/*
Consider the code presented below. We have two classes called SingleValue and ManyValues. SingleValues stores just one numeric value (initialized in the constructor),
but ManyValues can store either numeric values or SingleValue objects (assume it implements a push() method for adding items).
You are asked to write a function called sum that takes an array of items (any item can be either SingleValue or ManyValues).
Example of unit test.

describe('composite', function()
{
    it('should sum up different objects', function()
    {
        let singleValue = new SingleValue(11);
        let otherValues = new ManyValues();
        otherValues.push(22);
        otherValues.push(33);
        expect(sum([singleValue, otherValues])).toEqual(66);
    })
})

*/

class SingleValue
{
    constructor(value)
    {
        this.value = value;
    }

    [Symbol.iterator]()
  {
    let returned = false;
    return {
      next: () => ({
        value: this.value,
        done: returned++
      })
    }
  }
}

class ManyValues extends Array{}

let sum = function(containers)
{
  let result = 0;
  for (let container of containers){
    for (let value of container){
        result += i;
    }
  }
    
  return result;
};

//without using Symbol iterator
/*let sum = function(containers)
{
    console.log(containers);
    let result = 0;
    for(let container of containers){
        if(Array.isArray(container)){
            for(let value of container){
                result += value;
            }
        }else{
            result += container.value;
        }
    }
    return result;
};*/

let singleValue = new SingleValue(11);
let otherValues = new ManyValues();
otherValues.push(22);
otherValues.push(33);

let resultSum = sum([singleValue, otherValues]);

console.log(resultSum);

/*
SUMMARY
-Objects can use other objects via inheritance/composition
-Some composed and singular objects need similar/identical behaviors
-Composite design pattern lets us treat both types of objects uniformly
-JavaScript supports iteration with Symbol.iterator
-A single object can make itself iterable by yielding this
*/