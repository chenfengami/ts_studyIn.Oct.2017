interface Named {
    name: string;
}

class Person {
    name: string;
}

let p: Named;

p = new Person();

//兼容属性

interface Named_1 {
    name: string;
}

let x: Named_1;
let y = { name: "Amy", location: 'Shenzhen' };
x = y; //okay,because y exits name with string name;
function greet(n: Named) {
    alert('Hello, ' + n.name);
}
greet(y); // OK

