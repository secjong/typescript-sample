interface MyInterface<T> {
    name: string;
    value: T;
}

const myIData1: MyInterface<number[]> = {
    name: "my data 1",
    value: [1, 1, 1]
};

// 제네릭 타입 제한
interface MyInterfaceConstraints<T extends string[] | number> {
    name: string;
    value: T;
}

const myDataConstraints1: MyInterfaceConstraints<number> = {
    name: "my data constraints 1",
    value: 1
};

const myDataConstraints2: MyInterfaceConstraints<string[]> = {
    name: "my data constraints 2",
    value: ["a", "b", "c"]
};

// const myDataConstraints3: MyInterfaceConstraints<boolean> = { // 에러
//     name: "my data constraints 3",
//     value: true
// };

// 조건부 제네릭
interface ConditionalInterface<T extends boolean> {
    name: string;
    age: T extends true ? string : number;
    isString: T;
}

const conditionalIData1: ConditionalInterface<true> = {
    name: "nnn",
    age: "34",
    isString: true,
};

const conditionalIData2: ConditionalInterface<false> = {
    name: "nnn",
    age: 34,
    isString: false,
};
