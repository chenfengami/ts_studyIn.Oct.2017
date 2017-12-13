function add(x: number, y: number): number {
    return x + y;
}

let myAdd = function (x: number, y: number): number {
    return x + y;
}
// 我们可以给每个参数添加类型之后再为函数本身添加返回值类型。 
// ts能够根据返回语句自动推断出返回值类型，因此我们通常省略它。

// 书写完整函数类型

let myAdd_2: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
}