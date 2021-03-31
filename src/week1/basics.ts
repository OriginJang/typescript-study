const isShow: boolean = false;

const foo: number = 10;

const bar: string = "test";

const list: number[] = [1, 2, 3, 4];
// const gList: Array<number> = [1, 2, 3, 4, "string"];

// let tuple: [number, string] = [1, 2];
// tuple = [1, "string"];

// Enum
enum Color {
  Red = 1,
  Green,
  Blue,
}

const green: Color = Color.Green;
const red: number = Color.Red;
// const Blue: string = Color.Red;
console.log(Color[2]); // Green

// Any
const anyType: any = 10;

// Void
const voidType: void = undefined;
const func: () => void = () => {
  console.log();
};
// const voidNull: void = null;

// Undefined / Null
const undefinedType: undefined = undefined;
const nullType: null = null;

// Never
type neverFuncType = () => never;
const neverFunc: neverFuncType = () => {
  throw new Error("error!");
};
// const voidFunc: neverFuncType = () => {
//   console.log("Hello");
// };
// const intersectionFunc: () => number & string = () => {
//   throw new Error("error!");
//   return 1;
// };

// Object
let obj: object;
obj = { foo: 1, bar: 2 };
// obj = 10;
// obj = "a";
// obj = null;

// Type assertion
const anyValue: any = "To fix your permissions you can do so by disabling";
const strLen = (anyValue as string).length;
const matchedStrList: RegExpMatchArray | null = (<string>anyValue).match(/you/);
