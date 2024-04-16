var x = prompt("Enter first number: ");
var y = prompt("Enter  second number: ");
var a = Number(x);
var b = Number(y);
var opr = prompt("Enter operation");
console.log("1st number: " + a);
console.log("2nd number: " + b);
console.log("operation performed: " + opr);
console.log("result: ");
if (opr == '+') {
    console.log(a + b);
}
else if (opr == '-') {
    console.log(a - b);
}
else if (opr == '*') {
    console.log(a * b);
}
else if (opr == '/') {
    if (b != 0) {
        console.log(a / b);
    }
    else {
        alert("Error! Division by zero is not allowed.");
    }
}
;
