/* from https://www.codewars.com/kata/52b7ed099cdc285c300001cd */
/**
 * Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, and returns the sum of all the interval lengths.
 * Overlapping intervals should only be counted once.
 */

function sumIntervals(intervals, k = 0) {
  let indexesIntervals = [];

  if (k == intervals.length - 1 || intervals.length == 1) {
    return sumOfIntervals(intervals);
  }

  intervals.sort(sortIntervals);

  let x = intervals[k][1];

  let intersections = intervals
    .map((element, i) => {
      if (element[0] <= x && i >= k) {
        indexesIntervals.push(i);
        return element;
      }
    })
    .filter((x) => x != undefined);

  if (intersections.length === 1) {
    return sumIntervals(intervals, ++k);
  } else {
    let newInterval = createNewInterval(intersections);
    intervals.splice(
      indexesIntervals[0],
      indexesIntervals[indexesIntervals.length - 1] - indexesIntervals[0] + 1
    );
    return sumIntervals([newInterval, ...intervals], k);
  }
}

function sumOfIntervals(intervals) {
  if (intervals.length === 1) {
    return intervals[0][1] - intervals[0][0];
  } else {
    let sum = intervals.map((x) => x[1] - x[0]).reduce((x, y) => x + y);
    return sum;
  }
}

function sortIntervals(x, y) {
  return x[0] - y[0];
}

function createNewInterval(x) {
  let max = Math.max(...x.map((x) => x[1]));
  let min = Math.min(...x.map((x) => x[0]));

  return [min, max];
}
