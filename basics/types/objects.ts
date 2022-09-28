type Song = {
  title: string;
  artist: string;
  streamNum: number;
  credit: { producer: string; writer: string };
};

const mysong: Song = {
  title: "best playlist 2020",
  artist: "all artist of 2020",
  streamNum: 43534,
  credit: { producer: "artistic", writer: "all writer songs" },
};

function payoutSong(song: Song): number {
  return song.streamNum * 0.003;
}
function printSinger(song: Song): void {
  console.log(`${song.artist} - ${song.title}`);
}

let payoutMySong: number = payoutSong(mysong);

console.log(payoutMySong);
printSinger(mysong);

// readonly modifier is for primitve type to not assign the value again !

type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 234234,
  username: "mahdi",
};
// typescript error
// user.id = 34345;

// intersection types

// intersection type for combining multiple types with &

type Person = { name: string; age: number };
type Greeting = { morning: string; night: string };

type PersonGreeting = Person & Greeting;

const userGreeting: PersonGreeting = {
  name: "mahdi",
  age: 34,
  night: "good night",
  morning: "good morning",
  // notValid: "adfasdfa",  this property not exist on type PersonGreeting
};

// we can extened a type from other types and make it custom type
type UserGreetingName = Person & Greeting & { sayHello: () => void };

const userGreetingHello: UserGreetingName = {
  name: "ahmed",
  age: 234,
  night: "hello nihgt",
  morning: "morning hello",
  sayHello: () => {
    console.log("ehllo ", this.mame);
  },
};
