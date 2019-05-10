// console.log("It works!");

// tuple
let address: [string, number] = ['thom', 33];

// enum
enum Color {
    Gray,
    Green = 10,
    Blue
}
let myColor: Color = Color.Blue
console.log(myColor);

// any
let car: any = 'Toyota';

// functions
function returnMyName(): void {
    console.log('thom');
}

function multiply(value1: number, value2: number): number {
    return value1 * value2;
}

// function type
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = returnMyName;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(2,3));
// in function, order of parameters is important

// object: name of parameters is important
let myObject: {name: string, age: number} = {
    name: 'thom',
    age: 33
}
// error
// myObject = {
//     a: 'thong',
//     b: 22
// }

// complext object
let complex: {data: number[], output: (all: boolean) => number[]} = {
    data: [10,2],

    output: function(all: boolean): number[] {
        return this.data;
    }
}

type Complex = {data: number[], output: (all: boolean) => number[]};
let complex2: Complex = {
    data: [10,2],

    output: function(all: boolean): number[] {
        return this.data;
    }
};

// union type
let myStringOrNumber: number | string = 22;
myStringOrNumber = "22"

// check type
let finalVal = "A String";
if (typeof finalVal == "string") {
    console.log('string');
}

// never
function returnError():never {
    throw new Error('An Error!');
}