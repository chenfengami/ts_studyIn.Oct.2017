interface SearchFunc {
    (source: string, subString: string): boolean;
}
// 函数类型接口 参数 source->指定为string类型，subString为string类型。函数返回值必须是boolean类型
let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}