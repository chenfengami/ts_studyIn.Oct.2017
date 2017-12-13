// function identity(arg: any): any{
//     return arg;
// }
//any类型在返回的时候不知道返回的类型是什么。比如说arg的类型是number，返回的值可以是任何类型的数据。


//使用类型变量，它是一种特殊的变量，只用于表示类型而不是值。

function identity<T>(arg: T): T {
    return arg;
}
// 类型变量T用来捕获用户传入的类型。之后再次使用T做返回值类型。
// 这样我们就可以知道参数类型与返回值类型是相同的了。



//我们定义泛型函数后，可以用两种方法使用。

//1:传入所有参数。包括类型参数 【不常用】
let output_1 = identity<string>('MyString');

//2:类型推论,编译器会根据传入的参数自动帮助我们确定T的类型  【比较常用】
let output_2 = identity('MyString');
