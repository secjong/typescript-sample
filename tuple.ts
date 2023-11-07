let animal: [string, number];
animal = ["cat", 2];
animal.push(2);

const animal2: readonly [string, number] = ["aaa", 1]; // 읽기전용 튜플
// animal2 = ["bbb", 2]; // 에러