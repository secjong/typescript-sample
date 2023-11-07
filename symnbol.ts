const sym1: unique symbol = Symbol("a");
let sym2: symbol = Symbol("a"); // 같은 key로 심볼을 만들어도 해시값은 달라서 다른 심볼이 됨. 자기 자신과만 같음.
sym2 = Symbol("a");