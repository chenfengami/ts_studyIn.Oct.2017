function buildName_1(firstName: string, ...restOfName: any[]) { //剩余数组
    return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName_1("Joseph", "Samuel", 123);

//省略号也可以在剩余参数的函数类型定义上使用到
let buildNameFun: (fname: string, ...rest: string[]) => string = buildName;