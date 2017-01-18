class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return 2 * this.radius;
    }

    set diameter(diameter) {
        this.radius = diameter / 2;
    }

    get area() {
        return Math.PI * this.radius * this.radius;
    }
}

let c = new Circle(1);
console.log(c.diameter);
c.diameter = 4;
console.log(c.diameter);
console.log(c.area);