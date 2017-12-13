//只有实例成员会被比较。
//静态成员和构造函数不在比较的范围内。
var Animal = /** @class */ (function () {
    function Animal(name, numFeet) {
    }
    return Animal;
}());
var Size = /** @class */ (function () {
    function Size(numFeet) {
    }
    return Size;
}());
var a;
var s;
a = s; //ok
s = a; //ok
var User = /** @class */ (function () {
    function User(id, name) {
        this.id = id;
        this.name = name;
    }
    return User;
}());
var user;
