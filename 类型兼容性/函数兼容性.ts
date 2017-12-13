let x = (a: number) => 0;

let y = (b: number, s: string) => 0;

y = x;

x = y; //error

//处理返回值类型，创建两个仅是返回值类型不同的函数：

let fnX = () => ({ name: 'Alice' });
let fnY = () => ({ name: 'Alice', location: 'Seattle' });

fnX = fnY; //ok
fny = fnx; //error, because fnY() lacks a location property.

function invokeLater(args: any[], callback: (...args: any[]) => void) {
    /* ... Invoke callback with 'args' ... */
}

// Unsound - invokeLater "might" provide any number of arguments
invokeLater([1, 2], (x, y) => console.log(x + ', ' + y));

// Confusing (x and y are actually required) and undiscoverable
invokeLater([1, 2], (x?, y?) => console.log(x + ', ' + y));