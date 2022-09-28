let namePerson: string = "mahdi";
let isAlive: boolean = true;
let age: number = 20;
let hasBucket: null = null;
let isWalking: undefined = undefined;
let person: { name: string; age: number } = { name: "mahdi", age: 34 };

// type Alias

function randomCorrdinate({ x, y }: { x: number; y: number }): {
  x: number;
  y: number;
} {
  return { x: Math.random() * x, y: Math.random() * y };
}

function doubleCordinate(point: { x: number; y: number }): {
  x: number;
  y: number;
} {
  return { x: point.x * 2, y: point.y * 2 };
}

const randomCorr: { x: number; y: number } = randomCorrdinate({
  x: 434,
  y: 23424,
});
// we have type alias to not repeat our types {x:number,y:number}

type CorrdinateType = { x: number; y: number };

function randomCorrdinate1({ x, y }: CorrdinateType): CorrdinateType {
  return { x: Math.random() * x, y: Math.random() * y };
}
function doubleCordinate1(point: CorrdinateType): CorrdinateType {
  return { x: point.x * 2, y: point.y * 2 };
}
const randomCorr1: CorrdinateType = randomCorrdinate1({ x: 2, y: 4 });

// this is much cleaner with type aliases
