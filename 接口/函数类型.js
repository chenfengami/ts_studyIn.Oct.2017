// 函数类型接口 参数 source->指定为string类型，subString为string类型。函数返回值必须是boolean类型
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
