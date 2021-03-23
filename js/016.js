/*
Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces.
*/

/*
1. use .trim() method on string
2. handle multiple spaces: if space then continue
2. Identify if characters are upper or lower case
4. if upper then lower and vice verse
*/

function stringTransformer(str) {
    // reverse word order
    let newStr = str.split("")
    return newStr.map(char => {
        let upperRegex = /[A-Z]/g;
        let lowerRegex = /[a-z]/g;
        let spaceRegex = /\s/g;
        if (spaceRegex.test(char) === true) {
            return char.replace(spaceRegex, char)
        } else if (lowerRegex.test(char) === true) {
            return char.replace(lowerRegex, char.toUpperCase());
        } else if (upperRegex.test(char) === true) {
            return char.replace(upperRegex, char.toLowerCase());
        }
    }).join("").split(" ").reverse().join(" ")
}

console.log(stringTransformer("Unai was here"))
