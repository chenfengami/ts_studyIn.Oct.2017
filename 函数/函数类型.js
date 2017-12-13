function add(x, y) {
    return x + y;
}
var myAdd = function (x, y) {
    return x + y;
};
// 我们可以给每个参数添加类型之后再为函数本身添加返回值类型。 
// ts能够根据返回语句自动推断出返回值类型，因此我们通常省略它。
// 书写完整函数类型
var myAdd_2 = function (x, y) {
    return x + y;
};
