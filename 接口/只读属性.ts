interface Point {
    readonly x: number;
    readonly y: number;
}
// 可以通过赋值一个对象字面量来构造一个Point。赋值后，x和y再也不能被改变了。
let p1: Point = { x: 10, y: 20 };
// p1.x = 5; //error!

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
ro[0] = 12; //error
ro.push(5); //error
ro.length = 100; //error
a = ro; //error

//类型断言重写
a = ro as number[];
