/*

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/


function getCount(str) {
  var vowelsCount = 0;
  let regex = /[aeiou]/;
  let lowerStr = str.toLowerCase()
  for (let i = 0; i < lowerStr.length; i++) {
    if (lowerStr[i].match(regex)) {
      vowelsCount ++
    }
  }
  return vowelsCount;
}

console.log(getCount('o a kak ushakov lil vo kashu kakao'))