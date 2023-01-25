/*
    This is a bad example of Dependency Inversion Principle
    because the Store class is dependent on the Paypal/Stripe class
    In this example we made pretty easy to change the payment method
    but the real logics op Paypal/Stripe most definitely will be
    a lot dfferent from each other, this makes the Store class
    hard to maintain and extend.
*/
class Store {
    constructor(user) {
        this.paypal = new Paypal(user)
        //this.stripe = new Stripe(user)
    }

    purchaseBike(quantity) {
        this.paypal.makePayment(200 * quantity * 100)
        //this.stripe.makePayment(200 * quantity * 100)
    }

    purchaseHelmet(quantity) {
        this.paypal.makePayment(15 * quantity * 100)
        //this.stripe.makePayment(15 * quantity * 100)
    }
}

class Stripe {
    constructor(user) {
        this.user = user
    }

    makePayment(amountInCents) {
        // Stripe API logics
        console.log(`${this.user} made payment of $${amountInCents/100} with Stripe`)
    }
}

class Paypal {
    constructor(user) {
        this.user = user
    }

    makePayment(amountInCents) {
        // Paypal API logics
        console.log(`${this.user} made payment of $${amountInCents/100} with Paypal`)
    }
}

const store = new Store("Vini")
store.purchaseBike(2)
store.purchaseHelmet(2)