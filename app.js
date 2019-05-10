// console.log("It works!");
// tuple
var address = ['thom', 33];
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 10] = "Green";
    Color[Color["Blue"] = 11] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor);
// any
var car = 'Toyota';
// functions
function returnMyName() {
    console.log('thom');
}
function multiply(value1, value2) {
    return value1 * value2;
}
// function type
var myMultiply;
// myMultiply = returnMyName;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(2, 3));
// in function, order of parameters is important
// object: name of parameters is important
var myObject = {
    name: 'thom',
    age: 33
};
// error
// myObject = {
//     a: 'thong',
//     b: 22
// }
// complext object
var complex = {
    data: [10, 2],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [10, 2],
    output: function (all) {
        return this.data;
    }
};
// union type
var myStringOrNumber = 22;
myStringOrNumber = "22";
// check type
var finalVal = "A String";
if (typeof finalVal == "string") {
    console.log('string');
}
// never
function returnError() {
    throw new Error('An Error!');
}
