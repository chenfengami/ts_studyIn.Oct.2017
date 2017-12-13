//类的静态成员，这些属性存在于类本身面而不是类的实例上。
//每次想要访问这个属性的时候，都要在前面加上类名。 如同实例上使用this前缀来访问属性一样。
class Grid {
    static origin = { x: 0, y: 0 };
    calculateDistanceFromOrigin(point: { x: number, y: number }) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }

    constructor(public scale: number) { };
}

let grid1 = new Grid(1.0); // 1x scale
let grid2 = new Grid(5.0); // 5xscale

console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
