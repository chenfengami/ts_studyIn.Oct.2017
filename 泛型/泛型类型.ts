// 泛型函数的类型与非泛型函数的类型没什么不同，
// 只是有一个类型参数在最前面。像函数声明一样。

function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: <T>(arg: T) => T = identity;

//我们也可以使用不同的泛型参数名，只要在数量上和使用能对应上就行
let myIdentity_: <R>(arg: R) => R = identity;
//我们还可以使用带有调用签名的对象字面量来定义泛型函数；
let myIdentity__: { <T>(arg: T): T } = identity;


//泛型接口
interface GenericIdentityFn {
    <T>(arg: T): T;
}
function identity_1<T>(arg: T): T {
    return arg;
}
let myIdentity_1: GenericIdentityFn = identity_1;


//泛型参数当成整个接口的一个参数。
interface GenericIdentityFn_1<T> {
    (arg: T): T;
}

function identity_2<T>(arg: T): T {
    return arg;
}

let myIdentity_2: GenericIdentityFn_1<number> = identity_2;


//泛型类
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
}


//泛型约束

//创建一个包含.length属性的接口，使用整个接口和extends关键字实现约束。

interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}
loggingIdentity(3); //error, number doesn't hava a  .length property.
loggingIdentity({ length: 10, value: 3 });

function getProperty(obj: T, key: K) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, 'a');
getProperty(x, 'm');
