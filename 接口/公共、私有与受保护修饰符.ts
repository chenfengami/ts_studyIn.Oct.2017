class Animal {
    public name: string;
    public constructor(theName: string) {
        this.name = theName;
    }
    public move(distanceInMeters: number) {
        console.log(`${this.name} moved to ${distanceInMeters}m.`);
    }
}



//理解private
class Animal_1 {
    private name: string;
    constructor(theName: string) {
        this.name = theName;
    };
}

new Animal_1('cat').name; // name is private

//protected
class Person {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    };
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name); // error


//readonly修饰符
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor(theName: string) {
        this.name = theName;
    }
}

let dad = new Octopus("xx");

dad.name = '123'; //error! name is readonly.


//参数属性  
//参数属性可以方便地让我们在一个地方定义并初始化一个成员。
class Plant {
    constructor(private name: string) {
    }
    move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

//存取器
class Employee_1 {
    fullName: string;
}

let employee_1 = new Employee_1();
employee_1.fullName = "Bob Smith";
if (employee_1.fullName) {
    console.log(employee_1.fullName);
}

//上述例子我们可以随意的设置fullName,这是非常方便的，但是也可能带来麻烦。
let passcode = 'secret passcode';

class Employee_2 {
    private _fullName: string;

    get fullName(): string{
        return this._fullName;
    }

    set fullName(newName: string){
        if(passcode && passcode == 'secret passcode'){
            this._fullName = newName;
        }else{
            console.log("error:");
        }
    }
}

let employee_2 = new Employee_2();
employee_2.fullName = "Bob Smith";
if(employee_2.fullName){
    alert(employee_2.fullName);
}
