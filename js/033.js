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
    
    let answer = ["#"];

    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
        
      }

      let firstDigit;
      let secondDigit;

    rgbArray.map(number => {
        let result = number / 16;
        firstDigit = result.toString().substr(0, 2);
        secondDigit = Math.round(Number('0.' + result.toString().substr(3, 2)) * 16).toString().substr(0, 2);
        answer.push(getKeyByValue(hexValues, firstDigit));
        answer.push(getKeyByValue(hexValues, secondDigit));

    })
    return answer.join("")
    

}


console.log(rgb(255, 255, 255))
console.log(rgb(255, 255, 300))
console.log(rgb(0,0,0))
console.log(rgb(148, 0, 211))