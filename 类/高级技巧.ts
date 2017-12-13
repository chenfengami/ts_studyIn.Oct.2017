//构造函数

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return 'Hello, ' + this.greeting;
    }
}

let greeter: Greeter;

greeter = new Greeter('world');
console.log(greeter.greet());


//修改上面的例子

class Greeter_2 {
    static standardGreeting = 'Hello, there';
    greeting: string;
    greet() {
        if (this.greeting) {
            return 'Hello, ' + this.greeting;
        }
        else {
            return Greeter_2.standardGreeting;
        }
    }
}

let greeter_2: Greeter_2; //greeter_2实例的类型是 Greeter_2
greeter_2 = new Greeter_2();
greeter_2.greet();

let greeterMaker: typeof Greeter_2 = Greeter_2;
greeterMaker.standardGreeting = 'Hey there!';

let greeter_3: Greeter_2 = new greeterMaker();
console.log(greeter_3.greet());
