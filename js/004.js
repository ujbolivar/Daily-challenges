/*
You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

go on

If a1 and/or a2 are empty return -1 
*/

// function mxdiflg(a1, a2) {
//     if (a1.length !== 0 || a2.length !== 0) {
//         return a1.length + a2.length;
//     } else {
//         return -1
//     }
// }

function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) return -1
    let l1 = a1.map(str => str.length)
    let l2 = a2.map(str => str.length)
    let product1 = Math.max(...l1)
    let product2 = Math.max(...l2)
    if ((product1 - product2) <= 0) {
        continue
    } else if (product1 - product2)
    return product2
    //return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1))
}

console.log(mxdiflg(["w", "dd"], ["a", "bef", "c"])) // --> 1
// let s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
//  let s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
// console.log(mxdiflg(s1, s2)); // --> 13