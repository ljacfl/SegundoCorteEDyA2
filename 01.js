/* 
Challenge #1
✓ Research difference
between Arrow Functions
and Regular Functions

✓Create a new function in
Regular and Arrow types,
which should receive a
number and will print in
console if that number is
either odd or even
*/


//Regular function
function printOddorEven(number) {
    if (number % 2 === 0) {
        console.log("The number is even.");
    } else {
        console.log("The number is odd.");
    }
};


//Arrow function
const printOddorEven = (number => {
    if (number % 2 === 0) {
        console.log("The number is even.");
    } else {
        console.log("The number is odd.");
    }
}
)

printOddorEven(50); // The number is even.
printOddorEven(9); // The number is odd.


//Odd -> Impar
//Even -> Par