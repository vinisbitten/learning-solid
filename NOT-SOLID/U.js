/*
    This is a bad example of the Liskov Substitution Principle.
    The LSP states that objects of your subclasses should be able to replace objects of your superclass without breaking the application.
    In this example, the Square class inherits the properties of the Rectangle class.
    However, the getArea() method of the Square class returns the wrong value.
*/

// suppose you have a rectangle class to calculate the area of a rectangle and perform other operations like set color.
class Rectangle {
    setWidth(width) {
        this.width = width;
    }

    setHeight(height) {
        this.height = height;
    }

    setColor(color) {
        // ...
    }

    getArea() {
        return this.width * this.height;
    }
}

/*
    Knowing fully well that all squares are rectangles, you can inherit the properties of the rectangle.
    Since the width and height has to be the same, then you can adjust it.
*/
class Square extends Rectangle {
    setWidth(width) {
        this.width = width;
        this.height = width;
    }
    setHeight(height) {
        this.width = height;
        this.height = height;
    }
}

/*
    According to the LSP, you want the objects of your subclasses to behave the same way as the objects of your superclass.
    Meaning if you replace the Rectangle with Square, everything should still work well
*/

// So this should work fine
let rectangle = new Rectangle();
rectangle.setWidth(10);
rectangle.setHeight(5);
console.log("Rectangle area:", rectangle.getArea()); // 50

// And this also should work fine
let square = new Square();
square.setWidth(10);
square.setHeight(5);

// but this should be 100
console.log("Square area:", square.getArea()); // 25

// there should be a general class for all shapes that will hold all generic methods that you want the objects of your subclasses to have access to. Then for individual methods, you create an individual class for rectangle and square.