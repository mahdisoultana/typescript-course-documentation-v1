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

// class Player {
//     #live = 20;
//     goals = 2;
//     constructor(firstName, lastName) {
//         // this.live = 10;
//         // this.goals = 0;
//         this.firstName = firstName;
//         this.lastName = lastName;
//         // this.mainLive = this.#live;
//     }
//     #getId() {
//         return this.#live;
//     }
//     getLive() {
//         console.log(this.#getId())
//         return this.#live
//     }
//     updateLive(live) {
//         return this.#live=live
//     }
// }


// const mainPlayer = new Player('mahdi', 'soultana')
// mainPlayer.getLive()
// mainPlayer.updateLive(-334)

// console.log(mainPlayer)


// static we can use it in front of propertie or method
//mean that it's not exist on each instance
//it's exist on the Player class it self
//static tell javascript that this property or method exist only in the class
class Player{
    static description='this is static proerty in the class it self'
    #live = 0
    #goals=10
    constructor(name) {
        this.name = name;
    }
    getLive() {
        return this.#live
    }
    get info() {
        return `player ${this.name} his lives ${this.#live} ,his goals ${this.#goals}`
    }
    set goals(newGoals) {

        if (newGoals > 10 || newGoals < 0) {

            throw new Error('no you cant add negative goals or up then 100 goal')
        }
        return  this.#goals=newGoals
    }
    #secret() {
        console.log('this is secret ')
    }

}
const pl1 = new Player('mahdi')
console.log(pl1);
//this is vertual propertie from the class

pl1.goals=4
// pl1.info=3434
console.log(pl1)

//inheritance


class AdminPlayer extends Player{
    isAdmin = true
    constructor(name,power) {
        super(name)
        this.power=power
    }
    //we can overwrite methods
    // getLive() {
    //     return this.power
    // }
}

const admin = new AdminPlayer('mahdi', ['restor', 'start'])
///
console.log(admin)