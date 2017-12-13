//赋值语句的一边没有指定类型，ts编译器会自动识别出这个类型

// myAdd has the full function type
let myAdd = function (name: string, age: number): string {
    return `My name is ${name}, ${age} years old.`;
}


let myAdd_: (baseValue: number, increment: number) => number = function(x, y){
    return x + y;
}

//这叫做“按上下文归类”，是类型推论的一种。