function sayName(greating: string = ''): void {
    const name: string = "mahdi";
    console.log(`${greating} my Name is ${name}`)
}

// sayName(34)
sayName('Hi')
// there is 5 syntaxes to write functions and typescript support that also

//named function , i heared someone say function declaration

function great(pram: string): void {
    console.log(pram)
}
//function experssion
const sayGreat = function (): void {
    console.log('greating')
}

// arrow function
type Greating = (pram: string) => void
const greating: Greating = (pram) => {
    console.log(pram)
}
//short hand arrow function

const shortGreating: Greating = pram => console.log(pram)

//Function Constructor
const greater = new Function('name', 'return "Greater" + name');