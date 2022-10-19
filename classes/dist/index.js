"use strict";
class Player {
    constructor(first, last) {
        //this is in runtime
        // #score = 0
        //this is in typescript
        this.score = 0;
        this.first = first;
        this.last = last;
    }
    secretMethod() {
        console.log('SECRET');
        return 'hehe';
    }
}
const elton = new Player('elton', 'nos');
//we can't change it  that because we have readonly
// elton.first=989
// elton.score
elton.secretMethod();
console.log(elton);
