/*
    This is a bad example of the Single Responsibility Principle.
    The class ValidatePerson has two responsibilities:
    1. Validate the person’s name and age
    2. Display the person’s name and age
    The class should have only one responsibility and do one thing.
*/
class ValidatePerson {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    ValidateName(name) {
        if (name.length > 3) {
            return true;
        } else {
            return false;
        }
    }

    ValidateAge(age) {
        if (age > 18) {
            return true;
        } else {
            return false;
        }
    }
    // Display() method method goes against the SRP because the goal is that a class should have only one job and do one thing.
    Display() {
        if (this.ValidateName(this.name) && this.ValidateAge(this.age)) {
            console.log(`Name: ${this.name} and Age: ${this.age}`);
        } else {
            console.log('Invalid');
        }
    }
}