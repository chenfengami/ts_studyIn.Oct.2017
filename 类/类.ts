class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return 'Hello, ' + this.greeting;
    }
}

let greeter = new Greeter('world');
// new Greeter() 类的一个实例。它会调用之前定义的构造函数，创建一个Greeter类型的新对象。并执行构造函数初始化塔它。
greeter.greet();