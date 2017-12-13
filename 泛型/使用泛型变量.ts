function loggingIdentity<T>(arg: T): T {
    console.log(T.length); //error, if typeof T is number。 number not have length
    return arg;
}

function loggingIdentity_<T>(arg: T[]): T[] {
    console.log(arg.length); //okay, Array has property of length
    return arg;
}

//我们也可以这样实现上面的例子：
function loggingIdentity__<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);
    return arg;
}