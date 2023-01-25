/*
    Liskov Substitution Principle
    This way, you can set the color and get the color using either the super or subclasses.
    This is a good example of the Liskov Substitution Principle.
*/
class Shape {
    setColor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
}

class Rectangle extends Shape {
    setWidth(width) {
        this.width = width;
    }
    setHeight(height) {
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}

class Square extends Shape {
    setSide(side) {
        this.side = side;
    }
    getArea() {
        return this.side * this.side;
    }
}

// superclass
let shape = new Shape();
shape.setColor('red');
console.log("Shape color:", shape.getColor()); // red
console.log("Shape has no area method\n");

// subclass
let rectangle = new Rectangle();
rectangle.setColor('red');
rectangle.setWidth(10);
rectangle.setHeight(5);
console.log("Rectangle color:", rectangle.getColor()); // red
console.log("Rectangle area:", rectangle.getArea(),"\n"); // 50

// subclass
let square = new Square();
square.setColor('red');
square.setSide(10);
console.log("Square color:", square.getColor()); // red
console.log("Square area:", square.getArea()); // 100