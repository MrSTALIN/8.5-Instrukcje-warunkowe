var a = prompt("Please insert A value");
var b = prompt("Please insert B value");
var value = (a * a) + (2 * a * b) - (b * b);

console.log("Value is equal= " + value + "\nA= " + a + "\nH= " + b);

var symbolOfValue = value <= 0 ? "Value is neagtive" : "Value is positive";
console.log(symbolOfValue);

if (value == 0)
{
    console.log("Value= 0!");
}