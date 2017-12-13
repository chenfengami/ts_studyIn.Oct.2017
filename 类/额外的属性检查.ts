interface SquareConfig {
    color?: string;
    width?: number;
}
function createSquare(config: SquareConfig) : { color: string; area: number }{
    //...
}
let mySquare = createSquare({ colour: "red", width: 100 });
// error 'colour' not expected in type 'SquareConfig'

// 绕过这些检查非常简单。最简单的方式就是使用类型断言
let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);



/* 如果 SquareConfig带有需要定义的类型color width后，并且还会带有任意
   数量的其它属性，那么可以这样定义它：↓
*/
interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}
