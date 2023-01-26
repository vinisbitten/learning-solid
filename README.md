
<div align="center">
<img src="src/solid-banner.png" alt="solid" id="solid-banner" width="300"/>
</div>

SOLID is an  acronym that stands for **five key object-oriented design principles**  (OOD) created by Robert C. Martin (also known as Uncle Bob). Adopting these practices can also contribute to avoiding code smells, refactoring code, and Agile or Adaptive software development.
In this repository are some **examples** of code that does not respect these principles and how it's implementation should be done.

<br>
<div align="center">

| examples              |      SOLID      |      NOT SOLID      |
| :-------------------- | :-------------: | :-----------------: |
| Single Responsability | [S](SOLID/S.js) | [F](NOT-SOLID/F.js) |
| Open Closed           | [O](SOLID/O.js) | [L](NOT-SOLID/L.js) |
| Liskov Substitution   | [L](SOLID/L.js) | [U](NOT-SOLID/U.js) |
| Interface Segregation | [I](SOLID/I.py) | [I](NOT-SOLID/I.py) |
| Dependency Inversion  | [D](SOLID/D.js) | [D](NOT-SOLID/D.js) |

</div>
<h2 id="p01">Single Responsability Principle</h2>

States that a class should only have one reason to change. This means that a class should have only one job and do one thing.

<h2 id="p02">Open Closed Principle</h2>

Objects or entities should be open for extension but closed for modification. This means that a class should be extendable without modifying the class itself.
It is open for extension: This means you can extend what the module can do.
It is closed for modification: This means you cannot change the source code, even though you can extend the behavior of a module or entity.

<h2 id="p03">Liskov Substitution</h2>

In 1987, the Liskov Substitution Principle (LSP) was introduced by Barbara Liskov in her conference keynote “Data abstraction”.
The principle defines that in an inheritance, objects of a superclass (or parent class) should be substitutable with objects of its subclasses (or child class) without breaking the application or causing any error.

<h2 id="p04">Interface Segregation</h2>

A client should never be forced to implement an interface that it doesn’t use, or clients shouldn’t be forced to depend on methods they do not use.

<h2 id="p05">Dependency Inversion</h2>

States that high level modules should not depend on low level modules, both should depend on abstractions, your classes should depend upon interfaces or abstract classes instead of concrete classes and functions. This makes your classes open to extension, following the open-closed principle.
