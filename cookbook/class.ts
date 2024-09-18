class codes {
    static nm: string = "sejong"; // 클래스에서 직접 접근 가능
    private age: number = 34; // private 필드
    #location: string = "seoul"; // private 필드

    get getAge() {
        return this.age;
    }
    set setAge(age) {
        this.age = age;
    }

    get getLocation() {
        return this.#location;
    }
    set setLocation(location) {
        this.#location = location;
    }
}

console.log(codes.nm);
// console.log(codes.age);
// console.log(codes.location);

const codeInstance = new codes();
// console.log(codeInstance.age);
// console.log(codeInstance.location);