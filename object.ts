let a: {
  readonly b: number;
  c?: string; // optional
  [key: number]: boolean | string; // boolean 이나 string 값을 갖는 number 타입의 프로퍼티면 무엇이든 가능(인덱스 시그니처. index signature)
} = {
    b: 1,
    999: true,
    1000: "thousand"
};

// a.b = 2; // error