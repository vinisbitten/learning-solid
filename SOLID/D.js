/*
    Dependency Inversion Principle
    High level modules should not depend on low level modules.
    Both should depend on abstractions.
    This is a good example of the Interface Segregation Principle.
*/
class Store {
  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor
  }

  purchaseBike(quantity) {
      this.paymentProcessor.pay(200 * quantity)
  }

  purchaseHelmet(quantity) {
      this.paymentProcessor.pay(15 * quantity)
  }
}

class StripePaymentProcessor {
  constructor(user) {
    this.user = user
    this.stripe = new Stripe(user)
  }

  pay(amountInDollars) {
    this.stripe.makePayment(amountInDollars * 100)
  }
}

class PaypalPaymentProcessor {
  constructor(user) {
    this.user = user
    this.stripe = new Paypal(user)
  }

  pay(amountInDollars) {
    this.stripe.makePayment(amountInDollars * 100)
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

// const store = new Store(new PaypalPaymentProcessor("Vini"))
const store = new Store(new StripePaymentProcessor("Vini"))
store.purchaseBike(2)
store.purchaseHelmet(2)