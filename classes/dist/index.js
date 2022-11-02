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
class Phone {
    // type: string = 'sumsang'
    // price: number = 100
    // type: string;
    // price: number;
    // constructor(type: string, price: number) {
    //     this.type = type;
    //     this.price = price;
    // }
    constructor(type, price) {
        this.type = type;
        this.price = price;
    }
}
