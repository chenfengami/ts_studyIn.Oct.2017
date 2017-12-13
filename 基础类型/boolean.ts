//布尔
let isDone: boolean = false;
//数字
let number: number = 6;


//字符串
let nameString: string = "bob";
nameString = "smith";

// 模板字符串
let manName: string = 'cf';
let manAge: number = 37;
let sentence: string = `Hello, my name is ${ manName }. I'll be ${ manAge + 1 } years old next month.`;

//数组
let numList: number[] = [1, 2, 3]; // 数字数组
let stringList: string[] = ['cf', 'boy', '23'];
//...泛型
let arrListNum: Array<number> = [1, 2, 3];
let arrListStr: Array<string> = ['cf', 'boy', '23'];

//元祖 Tuple
let x: [string, number]; //[0]类型为string,[1]类型为number
x = ['hello', 10,]; // √
// x = [10, 'hello']; // x
console.log(x[0].substr(1)); // √
// console.log(x[1].substr(1)); // x 'substr' does not exist on type 'number'.
//越界情况下
x[3] = '123'; // true (string || number);
x[3].toString(); //true string || number all exit toSting();
// x[4] = true; // false (string || number) not have boolean

//枚举
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

//any
let notSureType: any = 4;
notSureType = "This is a string";
notSureType = 123; //okay, definitely a boolean
notSureType.toFixed(); //okay, toFixed exists.
let arrAny: any[] = [1, true, 'free'];
arrAny[0] = '1';

//Object
let objType: Object = 4;
objType.toFixed(); // Error Object  Property does not exits on type 'Object'

//Void express not any type that is not return.
function warnUser(): void{
    alert('This is my warning message');
}
let unusable: void = 123; //error typeof void is justy defined 'undefined' or 'null'
let unusable_: void = undefined; //okay
let unusable__: void = null; //okay

// null && undefined ->not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;

// Never
function error(message: string): never{
    throw new Error(message);
}

function fail(){
    return error('Something failed');
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never{
    while(true){
        
    }
}

// 类型断言 类似于类型转换
// 尖括号语法
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
// as语法
let someVlue_: any = 'this is a string';
let strLength_: number = (someValue as string).length;

