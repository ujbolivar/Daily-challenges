/*
There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

left side powers:
w - 4
p - 3
b - 2
s - 1

right side powers:
m - 4
q - 3
d - 2
z - 1
*/

function alphabetWar(fight) {
  let arr = fight.split("");
  let leftSide = new Map();
  let rightSide = new Map();
  leftSide.set("w", 4);
  leftSide.set("p", 3);
  leftSide.set("b", 2);
  leftSide.set("s", 1);
  rightSide.set("m", 4);
  rightSide.set("q", 3);
  rightSide.set("d", 2);
  rightSide.set("z", 1);
  let lTotal = 0;
  let rTotal = 0;
  arr.forEach((ltr) => {
    for (let [key, value] of leftSide) {
      if (ltr === key) {
        return (lTotal = lTotal + value);
      }
    }
  });
  arr.forEach((ltr) => {
    for (let [key, value] of rightSide) {
      if (ltr === key) {
        return (rTotal = rTotal + value);
      }
    }
  });
  if (lTotal > rTotal) {
    return "Left side wins!";
  } else if (lTotal < rTotal) {
    return "Right side wins!";
  } else {
    return "Let's fight again!";
  }
}

console.log(alphabetWar("z"));          // "Right side wins!"
console.log(alphabetWar("zdqmwpbs"));   // "Let's fight again!"
console.log(alphabetWar("zzzzs"));      // "Right side wins!"
console.log(alphabetWar("wwwwww"));     // "Left side wins!" 