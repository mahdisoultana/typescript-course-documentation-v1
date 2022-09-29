// tuples are exclusive types to typescript , we can define a fixed length for an array

// we know

const names: string[] = ["name1", "name2", "name3"];
const ages: number[] = [34, 23, 52];

names.push("name4");
ages.push(12);

//let try to make array has fixed length like rgb colors array [r,g,b]

const color: [number, number, number] = [23, 144, 0];

// color.pop() ❌
// color.push('sdfsdf') ❌❌here is limitation of tuples , we can add and pop values from the array after initialisation
