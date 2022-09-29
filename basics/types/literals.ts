// literal types , are not just types but value them selves

// type Answer = string;// here we can have

// let answer: string = "hello";
// answer = "hi";
// answer = "ASDFAF";// we can change to any string  as answer and it's true

// let answer: "yes" = "yes";
// let answer: "yes";
// answer="no" we can't do that because the we should follow the type which is the value yes

let answer: "yes" | "no";
answer = "yes"; //✅
// here we can do just to value to the answer label varaible
answer = "no"; //✅
