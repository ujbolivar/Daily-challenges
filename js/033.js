/*

The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3

*/

function rgb(r, g, b){
    let hexValues = {
        "0": "0",
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
        "9": "9",
        "A": "10",
        "B": "11",
        "C": "12",
        "D": "13",
        "E": "14",
        "F": "15"
    }

    let rgbArray = [r, g, b]
    
    let answer = [];

    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);  
      }
    let regex = /^-\d+$/;

    let firstDigit;

    let secondDigit;

    function isWholeNumber(value) {
        if (value % 1 === 0) {
          answer.push(getKeyByValue(hexValues, "0"));
        } 
    }

    rgbArray.map(number => {
        if (number > 255) {
            number = 255
        } else if (number === 0) {
            return answer.push("00")
        } else if (number.toString().match(regex)) {
            return answer.push("00")
        }       
        let result = number / 16;
        firstDigit = result.toString().split(".")[0];
        secondDigit = Math.ceil(Number("0." + result.toString().split(".")[1]) * 16).toString().substr(0, 2);
        answer.push(getKeyByValue(hexValues, firstDigit));
        isWholeNumber(result);
        answer.push(getKeyByValue(hexValues, secondDigit));       
    })
    return answer.join("")
}


console.log(rgb(255, 255, 255))
console.log(rgb(255, 255, 300))
console.log(rgb(0,0,0))
console.log(rgb(148, 0, 211))
console.log(rgb(290, 96, 16))
console.log(rgb(0, 0, -20))
console.log(rgb(48, 255, 246)) //30FFF6