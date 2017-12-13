//布尔
var isDone = false;
//数字
var number = 6;
//字符串
var nameString = "bob";
nameString = "smith";
// 模板字符串
var manName = 'cf';
var manAge = 37;
var sentence = "Hello, my name is " + manName + ". I'll be " + (manAge + 1) + " years old next month.";
//数组
var numList = [1, 2, 3]; // 数字数组
var stringList = ['cf', 'boy', '23'];
//...泛型
var arrListNum = [1, 2, 3];
var arrListStr = ['cf', 'boy', '23'];
//元祖 Tuple
var x; //[0]类型为string,[1]类型为number
x = ['hello', 10,]; // √
// x = [10, 'hello']; // x
console.log(x[0].substr(1)); // √
// console.log(x[1].substr(1)); // x 'substr' does not exist on type 'number'.
//越界情况下
x[3] = '123'; // true (string || number);
x[3].toString(); //true string || number all exit toSting();
// x[4] = true; // false (string || number) not have boolean
//枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
//any
var notSureType = 4;
notSureType = "This is a string";
notSureType = 123; //okay, definitely a boolean
notSureType.toFixed(); //okay, toFixed exists.
var arrAny = [1, true, 'free'];
arrAny[0] = '1';
//Object
var objType = 4;
objType.toFixed(); // Error Object  Property does not exits on type 'Object'
//Void express not any type that is not return.
function warnUser() {
    alert('This is my warning message');
}
var unusable = 123; //error typeof void is justy defined 'undefined' or 'null'
var unusable_ = undefined; //okay
var unusable__ = null; //okay
// null && undefined ->not much else we can assign to these variables!
var u = undefined;
var n = null;
// Never
function error(message) {
    throw new Error(message);
}
function fail() {
    return error('Something failed');
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop() {
    while (true) {
    }
}
// 类型断言 类似于类型转换
// 尖括号语法
var someValue = "this is a string";
var strLength = someValue.length;
// as语法
var someVlue_ = 'this is a string';
var strLength_ = someValue.length;
