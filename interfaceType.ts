// 확장
interface PeopleInterface {
  name: string;
  age: number;
}

interface StudentInterface extends PeopleInterface {
  school: string;
}

type PeopleType = {
  name: string;
  age: number;
};

type StudentType = PeopleType & {
  school: string;
};

// type만 가능함(computed value)
type nameFields = "firstName" | "lastName";
type NameType = {
  [key in nameFields]: string;
};

const myName: NameType = {
  firstName: "sejong",
  lastName: "chae",
};

// Readonly Utility. 모든 필드가 readonly면 이렇게 쓰면됨
interface IReadonly {
  name: string;
  age: number;
}
let sampleUser: Readonly<IReadonly> = {
  name: "Neo",
  age: 36,
};
// sampleUser.age = 85; // Error
// sampleUser.name = 'Evan'; // Error

// 함수타입(호출 시그니처)을 인터페이스로 지정
interface IIsTest {
  (name: string): boolean; // Call signature
}

// 추상함수 프로퍼티를 가지는 인터페이스. 아래 세가지 방식 모두 가능
interface FuncProperty {
  func1(arg: number): number;
  func2: (arg: number) => number;
  func3: { (arg: number): number };
}

// const getUser: IIsTest = function(name){
//   let result: boolean = false;
//   if (name === "test") {
//     result = true;
//   }
//   return result;
// }

// 클래스에서 인터페이스 구현
interface ICat {
  name: string;
}

interface ICatConstructor {
  new (name: string): ICat;
}

class Cat implements ICat {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
}

function makeCat(c: ICatConstructor, n: string) {
  return new c(n);
}

const kitten = makeCat(Cat, "Lucy");
console.log(kitten);

// keyof 를 사용한 유니온 타입
interface ICountries {
  KR: "대한민국";
  US: "미국";
  CP: "중국";
}
let country1: keyof ICountries; // 'KR' | 'US' | 'CP'
country1 = "KR"; // ok
// country = 'RU'; // Error - TS2322: Type '"RU"' is not assignable to type '"KR" | "US" | "CP"'.

let country2: ICountries[keyof ICountries]; // ICountries['KR' | 'US' | 'CP']
country2 = "대한민국";
// country2 = '러시아'; // Error - TS2322: Type '"러시아"' is not assignable to type '"대한민국" | "미국" | "중국"'.
