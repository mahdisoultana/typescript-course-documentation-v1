//classes is sntax suggar above function call that retrun and object with linked to the prototype property that exist on every function definition

//we make a class to consturct an object with specific shape properties and values


// class Player {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;

//     }
// }

// const mainPlayer = new Player('mahdi', 'soultana')
// console.log(mainPlayer)

//classFeild
//is a nice builting synatx that make writing local varaible very easly

class Player {
    live = 20;
    goals = 2;
    constructor(firstName, lastName) {
        // this.live = 10;
        // this.goals = 0;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
const mainPlayer = new Player('mahdi', 'soultana')
console.log(mainPlayer)