abstract class Animal {
    abstract makeSound(): void;
    move(): void {
        console.log('roaming the earch...');
    }
}
// abstract关键字是用于定义抽象类和抽象方法


abstract class Department {
    constructor(public name: string) {

    }

    printName(): void {
        console.log('Department name: ' + this.name);
    }

    abstract printMeeting(): void; //抽象方法 必须在派生类中实现
}

class AccountingDepartment extends Department {
    constructor() {
        super('Accounting and Auditing');
    }

    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am.');
    }

    generateReports(): void {
        console.log('Generating accounting reports...');
    }
}

let department: Department; //ok to create a reference to an abstract type

department = new Department(); //抽象类不能被实例化
department = new AccountingDepartment(); //ok to create and assgin a non-abstract subclass
department.printMeeting();
department.printName();
department.generateReports(); //error no exits on Department

