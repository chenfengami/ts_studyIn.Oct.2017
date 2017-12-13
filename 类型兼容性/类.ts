//只有实例成员会被比较。
//静态成员和构造函数不在比较的范围内。

class Animal {
    feet: number;
    constructor(name: string, numFeet: number) {

    }
}

class Size {
    feet: number;
    constructor(numFeet: number) {

    }
}

let a: Animal;
let s: Size;

a = s; //ok
s = a; //ok

