let unk: unknown;
// const n = unk + 3; // 불가능
if (typeof unk === "number") { // ==, ===, ||, &&, ?, ! 로 조건절에 비교연산을 한 후 사용해야 함
    const n = unk + 3;
}
