let sym1 = Symbol();

let sym2 = Symbol("key"); //可选的字符串key
let sym3 = Symbol("key");
sym2 == sym3; //false, symbols是唯一的


// 想字符串一样，Symbol也可以用来当做对象属性的key值

let sym = Symbol();

let JsonObj = {
    [sym]: 'value'
};
console.log(JsonObj[sym]); //'value'