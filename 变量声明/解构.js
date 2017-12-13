var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var input = [1, 2];
var first = input[0], second = input[1];
console.log(first);
//作用于函数参数
function f(_a) {
    var first = _a[0], second = _a[1];
    console.log(first);
    console.log(second);
}
f([1, 2]);
//数组里使用 ...语法创建剩余变量：
var _a = [1, 2, 3, 4], first_ = _a[0], rest = _a.slice(1);
console.log(first_); //[1]
console.log(rest); // [2,3,4]
var _b = [1, 2, 3, 4], second_ = _b[1], fourth = _b[3];
//对象解构
var o = {
    a: "foo",
    b: 12,
    c: "bar"
};
var a = o.a, b = o.b;
(_c = { a: "baz", b: 101 }, a = _c.a, b = _c.b);
var c = o.c, passthrough = __rest(o, ["c"]);
var total = passthrough.b + passthrough.c.length;
//属性重命名
var newName1 = o.a, newName2 = o.b;
var a = o.a, b = o.b;
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
}
//展开
var first2 = [1, 2];
var second2 = [3, 4];
var bothPlus = [0].concat(first2, second2, [5]);
var _c;
