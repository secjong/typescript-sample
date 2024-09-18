// 문자열만 가지는 배열
let fruits1: string[] = ["Apple", "Banana", "Mango"];
// Or
let fruits2: Array<string> = ["Apple", "Banana", "Mango"];

// 숫자만 가지는 배열
let oneToSeven1: number[] = [1, 2, 3, 4, 5, 6, 7];
// Or
let oneToSeven2: Array<number> = [1, 2, 3, 4, 5, 6, 7];

// 다중타입을 가지는 배열
let array1: (string | number)[] = ["Apple", 1, 2, "Banana", "Mango", 3];
// Or
let array2: Array<string | number> = ["Apple", 1, 2, "Banana", "Mango", 3];

// any 배열
let someArr1: any[] = [0, 1, {}, [], "str", false];
// Or
let someArr2: Array<any> = [0, 1, {}, [], "str", false];

// 인터페이스 배열
interface IUser {
  name: string;
  age: number;
  isValid: boolean;
}

// IUser[] 도 동일
let iUserArr: Array<IUser> = [
  {
    name: "Neo",
    age: 85,
    isValid: true,
  },
  {
    name: "Lewis",
    age: 52,
    isValid: false,
  },
  {
    name: "Evan",
    age: 36,
    isValid: true,
  },
];

// 타입 배열
type TUser = {
  name: string;
  age: number;
  isValid: boolean;
};

// TUser[] 도 동일
let TUserArr: Array<TUser> = [
  {
    name: "Neo",
    age: 85,
    isValid: true,
  },
  {
    name: "Lewis",
    age: 52,
    isValid: false,
  },
  {
    name: "Evan",
    age: 36,
    isValid: true,
  },
];

// 읽기전용 배열
const arrA: readonly number[] = [1, 2, 3, 4];
const arrB: ReadonlyArray<number> = [1, 2, 3, 4];