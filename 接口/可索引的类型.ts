interface StringArray {
    [index: number]: string;
}
//interface表示 用number类型索引，得到的值是string类型
let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

/////
class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}
// 错误：使用'string'索引，有时会得到Animal!
interface NotOkay {
    [x: number]: Animal;
    [x: string]: Dog;
}

interface NumberDictionary {
    [index: string]: number;
    length: number;
    name: string; //error,'name'的类型与索引类型返回值的类型不匹配
}

//最后，你可以将索引签名设置为只读，这样就防止了给索引赋值：
interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let myArray: ReadonlyStringArray = ['Alice', 'Bob'];
myArray[2] = 'Mallory'; //error because index: number just readonly,not allow to write;
