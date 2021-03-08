/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
*/

var moveZeros = function (arr) {
return arr.filter(e => e !== 0).concat(arr.filter(e => e === 0))
};

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 0, 0, 3, "a"]));
