// class Player{
//     public readonly first: string
//     public last: string
//     //this is in runtime
//     // #score = 0
//     //this is in typescript
//     private score =0
//     constructor(first:string, last:string) {
//         this.first = first
//         this.last = last
//     }
//     secretMethod():string {
//         console.log('SECRET')
//         return 'hehe'
//     }
//     // private secretMethod():void {
//     //     console.log('SECRET')
//     // }
// }
//parameter shorthand
// class Player {
//     // private _score: number = 0;
//     constructor(public first: string, public last: string, private _score: number) { }
//     //setters and getters in TS
//     get fullName(): string {
//         return `${this.first} ${this.last}`
//     }
//     set score(newScore: number) {
//         if (newScore < 0) {
//             throw new Error("score cannot be negative");

//         }
//         this._score = newScore;
//     }
// }
// // ===
// // class PlayerCopy {
// //     public first: string;
// //     public last: string;
// //     constructor(first: string, last: string) {
// //         this.first = first;
// //         this.last = last;
// //     }
// // }
// const elton = new Player('elton', 'nos', 0)
// //we can't change it  that because we have readonly
// // elton.first=989
// // elton.score
// // elton.secretMethod()
// console.log(elton)


//private vs public vs protected

// public it's propertie accessibale everywhere in the class or children extends class or at class instances
// private modifier make propertie accessibale only in the class where it's define
//protected modifier make properties acccessible in the class where it's defined also in children extends class inhertance
// class User {
//     protected _score: number = 0;
//     constructor(public name: string, private id: string) { }
//     set score(pram: number) {
//         this._score = pram
//     }
//     get score() {
//         return this._score
//     }
// }
// class Admin extends User {
//     public isAdmin: boolean = true;
//     get adminScore() {
//         return this._score + 10
//     }
// }
// const admin = new Admin('mahdi', "2423424")

// console.log(admin.adminScore);


//interface
// interface describe types shape of an object and could also a shape for a class
interface PhoneType {
    type: string;
    price: number;
}

class Phone implements PhoneType {
    // type: string = 'sumsang'
    // price: number = 100
    // type: string;
    // price: number;
    // constructor(type: string, price: number) {
    //     this.type = type;
    //     this.price = price;
    // }
    constructor(public type: string, public price: number) { }
}