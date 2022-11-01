"use strict";
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
class Player {
    // private _score: number = 0;
    constructor(first, last, _score) {
        this.first = first;
        this.last = last;
        this._score = _score;
    }
    //setters and getters in TS
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("score cannot be negative");
        }
        this._score = newScore;
    }
}
// ===
// class PlayerCopy {
//     public first: string;
//     public last: string;
//     constructor(first: string, last: string) {
//         this.first = first;
//         this.last = last;
//     }
// }
const elton = new Player('elton', 'nos', 0);
//we can't change it  that because we have readonly
// elton.first=989
// elton.score
// elton.secretMethod()
console.log(elton);
