/*

Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

*/

function longest(s1, s2) {
    let s1Filtered = s1.split('').filter((elem, index, self) => index === self.indexOf(elem));
    let s2Filtered = s2.split('').filter((elem, index, self) => index === self.indexOf(elem));
    let sorted = [].concat(s1Filtered, s2Filtered).filter((elem, index, self) => index === self.indexOf(elem)).sort().join('');
    return sorted
  }

  console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));