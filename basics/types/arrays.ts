//arryas are is one type of javascript and we can also type arrays of values at typescirpt with TYPE[] or Array<TYPE>

const names: string[] = ["mahdi", "amal", "achraf"];
const ages: number[] = [12, 34, 63, 23];
type Person = { name: string; age: number };
const persons: Person[] = [{ name: "kamal", age: 34 }];

//union type serve that we can add multiple types for a value ;

const arrNumStr: (string | number)[] = [123, "characters"];
// here we extends Person type with intersection "&" and we added id proerty should be string or number with modifier readonly meaning that we can't change it if we want to

type User = Person & { readonly id: string };
type UserWithUserName = { id: number; username: string; age: number };

const users: User[] = [{ id: "3432", name: "name", age: 4343 }];

const newUsers: (User | UserWithUserName)[] = [
  //   { id: 34, username: "name", age: 34 },✅ values == types
  //   { id: " 34", name: "name", age: 34 },✅ values==types
  //   { id:  34, name: "name", age: 34 }, ❌ because id is string when we have name propertey type
  { id: 34, username: "mahdi", age: 343 }, // type UserWithUserName
  { id: "34", name: "mahdi", age: 343 }, // type User
];

// type Narrowing , when we have value hold 2 types and we need to do some operation

function calculateTax(price: number | string, tax: number): number {
  //if we had just return with price *tax will give error that typescript couldn't now what price excatly to do multiplication which is only for number not for strings , we must to do check because it's very smart and yield to us maybe we could have string because we letirally say that at price typing parametere
  // approche 1
  //   if (typeof price == "number") {
  //     return price * tax;
  //   } else {
  //     price = parseFloat(price.replace("$", ""));
  //     return price * tax;
  //   }
  // approche 2
  if (typeof price == "string") {
    price = parseFloat(price.replace("$", ""));
  }
  return price * tax;
}
