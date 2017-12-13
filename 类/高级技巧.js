//构造函数
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return 'Hello, ' + this.greeting;
    };
    return Greeter;
}());
var greeter;
greeter = new Greeter('world');
console.log(greeter.greet());
//修改上面的例子
var Greeter_2 = /** @class */ (function () {
    function Greeter_2() {
    }
    Greeter_2.prototype.greet = function () {
        if (this.greeting) {
            return 'Hello, ' + this.greeting;
        }
        else {
            return Greeter_2.standardGreeting;
        }
    };
    Greeter_2.standardGreeting = 'Hello, there';
    return Greeter_2;
}());
var greeter_2; //greeter_2实例的类型是 Greeter_2
greeter_2 = new Greeter_2();
greeter_2.greet();
var greeterMaker = Greeter_2;
greeterMaker.standardGreeting = 'Hey there!';
var greeter_3 = new greeterMaker();
console.log(greeter_3.greet());
