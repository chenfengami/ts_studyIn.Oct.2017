//类定义会创建出两个东西： 
// 1、类的实例类型 2、构造函数
class Point {
    x: number;
    y: number;
}
interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = { x: 1, y: 2, z: 3 };