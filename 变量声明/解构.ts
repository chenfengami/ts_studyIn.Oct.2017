let input = [1, 2];
let [first, second] = input;
console.log(first);

//作用于函数参数
function f([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}
f([1, 2]);

//数组里使用 ...语法创建剩余变量：
let [first_, ...rest] = [1, 2, 3, 4];
console.log(first_); //[1]
console.log(rest); // [2,3,4]


let [, second_, , fourth] = [1, 2, 3, 4];

//对象解构
let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
let { a, b } = o;

({ a, b } = { a: "baz", b: 101 });
let { c, ...passthrough } = o;
let total = passthrough.b + passthrough.c.length;

//属性重命名
let { a: newName1, b: newName2 } = o;
let { a, b }: {a: string, b: number} = o;

function keepWholeObject(wholeObject: { a: string, b?: number }) {
    let { a, b = 1001 } = wholeObject;
    // a = wholeObject.a;
    // _b = wholeObject.b;
    // b = void 0 ? 1001 : _b
}

//展开
let first2 = [1, 2];
let second2 = [3, 4];
let bothPlus = [0, ...first2, ...second2, 5];

let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" };

