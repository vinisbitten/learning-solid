/*
    This is a bad example of the Open/Closed Principle.
    because the code above is not open to an extension,
    meaning for you to add new flavors,
    you would need to directly edit the iceCreamFlavors array.
*/
const iceCreamFlavors = ['chocolate', 'vanilla'];

class makeIceCream {
    constructor(flavor) {
        this.flavor = flavor;
    }

    make() {
        if (iceCreamFlavors.indexOf(this.flavor) > -1) {
            console.log('Great success. You now have ice cream.');
        } else {
            console.log('Epic fail. No ice cream for you.');
        }
    }
}