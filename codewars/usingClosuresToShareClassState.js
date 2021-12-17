/* From https://www.codewars.com/kata/53583765d5493bfdf5001b35 */
/**
 * In this kata, I want you to write make a Cat constructor that takes arguments name and weight to instantiate a new cat object.
 * The constructor should also have an averageWeight method that returns the average weight of cats created with the constructor.
 */

var Cat = (function () {
  var cats = [];

  var cat = function (name, weight) {
    if (!name || !weight) {
      throw "Please provide a name and a weight!";
    }
    Object.defineProperty(this, "name", {
      get: function () {
        return name;
      },
    });
    Object.defineProperty(this, "weight", {
      get: function () {
        return weight;
      },
      set: function (x) {
        weight = x;
      },
    });
    cats.push(this);
  };

  cat.averageWeight = () =>
    [...cats].reduce((x, y) => x + y.weight, 0) / cats.length;
  cat.printCats = () => console.log("", cats);

  return cat;
})();
