# This is a bad example of the Interface Segregation Principle.
# In this design the Car class must implement the fly()
# method from the Vehicle class that the Car class doesn’t use.
# Therefore, this design violates the interface segregation principle.
from abc import ABC, abstractmethod

# Abstract class Vehicle
class Vehicle(ABC):
    @abstractmethod
    def go(self):
        pass

    @abstractmethod
    def fly(self):
        pass

# Class Aircraft inherits from Vehicle
class Aircraft(Vehicle):
    def go(self):
        print("Taxiing")

    def fly(self):
        print("Flying")

# Class Car inherits from Vehicle
class Car(Vehicle):
    def go(self):
        print("Going")
    # Car.fly() throws an exception because the Car class can't fly.
    def fly(self):
        raise Exception('The car cannot fly')