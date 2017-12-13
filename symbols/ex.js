var sym1 = Symbol();
var sym2 = Symbol("key"); //可选的字符串key
var sym3 = Symbol("key");
sym2 == sym3; //false, symbols是唯一的
// 想字符串一样，Symbol也可以用来当做对象属性的key值
var sym = Symbol();
var JsonObj = (_a = {},
    _a[sym] = 'value',
    _a);
console.log(JsonObj[sym]); //'value'
var _a;
