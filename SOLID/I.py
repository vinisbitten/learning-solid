# Interface Segregation Principle
# In this design, the Car only need to implement the go() method that it needs.
# It doesn’t need to implement the fly() method that it doesn’t use.
# This is a good example of the Interface Segregation Principle.
from abc import ABC, abstractmethod

# Abstract class movable
class Movable(ABC):
    @abstractmethod
    def go(self):
        pass

# Abstract class Flyable inherits from Movable
class Flyable(Movable):
    @abstractmethod
    def fly(self):
        pass

# Class Aircraft inherits from Flyable
class Aircraft(Flyable):
    def go(self):
        print("Taxiing")

    def fly(self):
        print("Flying")

# Class Car inherits from Movable
class Car(Movable):
    def go(self):
        print("Going")