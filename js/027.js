/*

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/



function pigIt(str){
    return str.split(" ").map(word =>
    {
      let wordArray = word.split("")
      if ((word !== "!") && (word !== "?")) {
      wordArray.push(word.charAt(0) +"ay")
      } else if ((word === "!") || (word === "?")) {
        let special = word
      wordArray.push(word)  
      }
      return wordArray.join("").slice(1)  
     
    }
  ).join(" ")
  }
  
  console.log(pigIt('Pig latin is cool !'))
  