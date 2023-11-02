# Let's learn TypeScript

### What is TypeScript

###### TypeScript is an object oriented programming language that is built on top of JavaScript with some extra features.

### What is the purpose of using TypeScript?

###### The purpose of using TypeScript is to improve the quality and reliability of JavaScript code. TypeScript adds static typing to JavaScript which allows the compiler to check the types of variables and expressions at compile time. This can help to catch errors early, before they cause problems in the runtime environment.

#### How to install in our local machine

```
npm install -g typescript
```

###### Run this command to install TypeScript in you local machine and get start to write code in TypeScript.

### What's wrong with JS so that we want to use TS?

###### It's so simple. Here are the issues we face while we code in JS.

#### 1. Dynamically Typed Language.

###### It means JS add types of variables and expressions itself in the compile time. In JS we can't define the data type for variables and expressions. This is a major issue while working in a large application.

###### On the other hand, TS is a static typed language that is built on top of JS. In TS we have to define the types of variables and expressions. After defining the types we will never assign any other data types value to that variable.

#### 2. Difficult to maintain large codebase.

###### It's very difficult to maintain large codebase in JS. In large applications it's always better to maintain a structure. Using JS we can't maintain the structure.

###### In TS we can easily maintain a large codebase because in TS we always follow a structure. In TS we always predefine the types of variables and expressions so that further we won't get any type related confusion.

#### 3. Hard to find bugs.

###### In JavaScript we only get bugs in the runtime environment which is not appropriate. It will consume much time to test our code and find bugs in our code. We will only get bugs when we run our application.

###### In TypeScript we will get the errors in the development environment. TS compiler gives error at the compile time so that we can be more productive.

#### 4. Catch errors only in Runtime.

###### JavaScript only gives us errors in the runtime. We will get the errors only when we run our code. It's quite time consuming and doesn't give a nice developer experience when working in large application.

###### On the other hand, TypeScript gives errors in the development environment. We will get the errors in the development environment and we even don't have to run the application. It gives a nice developer experience and increase our productivity and also take less time to debug.

#

### Data types in TypeScript

There are different types of data types are in TypeScript. Here are the types below.

#### Primitive Data Types:

##### 1. Number: `###### A number can be an integer, a floating-point number, or a NaN (Not a Number)`

##### 2. String: `A string is a sequence of characters.`

##### 3. Boolean: `A boolean can be either true or false.`

##### 4. Null: `Null represents the absence of a value.`

##### 5. Undefined: `Undefined represents a value that has not yet been assigned.`

##### 6. Symbol: `A symbol is a unique value that is used to identify objects. Symbols are often used to represent private properties or methods.`

#### Compound Data Types:

##### 1. Object: ` An object is a collection of named properties, each of which can have a value of any type. Objects are often used to represent real-world entities, such as users, products, or orders.`

##### 2. Array: ` An array is an ordered collection of values, all of which must be of the same type. Arrays are often used to represent lists of items, such as a list of products or a list of users.`

##### 3. Tuple: ` A tuple is a fixed-length collection of values, each of which can have a different type. Tuples are often used to represent data structures that have a specific format, such as a point in coordinate space or a date and time.`

##### 4. Enum: ` An enum is a set of named constants. Enums are often used to represent a set of possible values for a property, such as the possible states of a traffic light or the possible sizes of a shirt.`

##### 5. Union: ` A union represents a value that can be of any of two or more types. Unions are often used to represent data that can take on a variety of different forms, such as a value that can be either a string or a number.`

##### 6. Intersection: ` An intersection represents a value that must be of all of two or more types. Intersections are often used to represent data that must meet multiple criteria, such as a value that must be both a string and a number.ed to represent private properties or methods.`

#### Special data types:

##### 1. Void: ` Void represents the absence of a value. Void is often used as the return type of a function that does not return anything.`

##### 2. Never: ` Never represents a value that never occurs. Never is often used as the return type of a function that always throws an exception or that never returns.`

#
