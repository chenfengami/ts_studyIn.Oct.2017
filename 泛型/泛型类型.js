// 泛型函数的类型与非泛型函数的类型没什么不同，
// 只是有一个类型参数在最前面。像函数声明一样。
function identity(arg) {
    return arg;
}
var myIdentity = identity;
//我们也可以使用不同的泛型参数名，只要在数量上和使用能对应上就行
var myIdentity_ = identity;
//我们还可以使用带有调用签名的对象字面量来定义泛型函数；
var myIdentity__ = identity;
function identity_1(arg) {
    return arg;
}
var myIdentity_1 = identity_1;
function identity_2(arg) {
    return arg;
}
var myIdentity_2 = identity_2;
//泛型类
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
loggingIdentity(3); //error, number doesn't hava a  .length property.
loggingIdentity({ length: 10, value: 3 });
function getProperty(obj, key) {
    return obj[key];
}
var x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, 'a');
getProperty(x, 'm');
