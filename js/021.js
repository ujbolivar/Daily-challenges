/*

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false

*/

function validatePIN (pin) {
    
    //is it a 4 or 6 digit code?
    let array = pin.split("")
    
    if (array.length === 6 || array.length === 4) {
        // are all digits numbers?
        console.log(array)
        for (elem of array) {
                
        return Number(elem)
        }
    } else {
        return false
    }
    //return true or false
    
}

console.log(validatePIN("1325"))
//console.log(Number("12345".split("")))