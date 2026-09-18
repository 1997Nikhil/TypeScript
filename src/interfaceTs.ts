// Interface for defining the structure of a chai order. Same as type alias but with interface keyword. Interfaces are more flexible and can be extended or implemented by classes, making them suitable for defining contracts in object-oriented programming. Type aliases are more versatile and can represent a wider range of types, including unions and intersections, making them suitable for complex type definitions.
type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean;
};

function makechai(order : ChaiOrder){
    console.log(order);

}


function serveChai(order: ChaiOrder){
    console.log(order);
}



// type TeaRecipe = {
//     water: number;
//     milk: number;
// }

interface TeaRecipe {   // Interfaces are more flexible and can be extended or implemented by classes, making them suitable for defining contracts in object-oriented programming. Type aliases are more versatile and can represent a wider range of types, including unions and intersections, making them suitable for complex type definitions.
    water: number;
    milk: number;
}

class MasalaChai implements TeaRecipe {
    water= 100;
    milk= 50;
}


// type CupSize = "small" | "medium" | "large"; 

// class Chai implements CupSize {  // This will throw an error because `CupSize` is a type alias for a union of string literals, not a class or interface. In TypeScript, you cannot implement a type alias directly. You can only implement interfaces or extend classes. If you want to enforce that the `Chai` class has a property that matches one of the `CupSize` values, you would need to define a property in the class and ensure it adheres to the `CupSize` type.

// }



interface CupSize {  // Interfaces are more flexible and can be extended or implemented by classes, making them suitable for defining contracts in object-oriented programming. Type aliases are more versatile and can represent a wider range of types, including unions and intersections, making them suitable for complex type definitions.
    size: "small" | "medium" | "large";
}

class Chai implements CupSize {
    size: "small" | "large" = "large";  // This is valid because the `size` property is defined in the `CupSize` interface, and the `Chai` class implements that interface. The property can take on any of the values defined in the union type, and here it is initialized to "large".
}


// type Response = {ok:true} | {ok:false}

// class myRes implements Response {  // This will throw an error because `Response` is a type alias for a union of object types, not a class or interface. In TypeScript, you cannot implement a type alias directly. You can only implement interfaces or extend classes. If you want to enforce that the `myRes` class has properties that match one of the `Response` types, you would need to define those properties in the class and ensure they adhere to the `Response` type.
//     ok: true = true;  // This is valid because the `ok` property is defined in the `Response` type, and the `myRes` class has a property that matches one of the types in the union. However, since `Response` is a union type, you cannot implement it directly. You can only ensure that the properties of the class match one of the types in the union.
// }



type TeaType = "Masala" | "Ginger" | "Elaichi"; // This is a type alias that defines a union of string literal types. The `TeaType` type can only take on one of the specified string values, providing better type safety and preventing invalid inputs. This allows you to enforce specific allowed values for the `TeaType` parameter in functions or variables, ensuring that only valid tea types are used in your code.

function orderChai(t: TeaType) {
    console.log(t);
}



type BaseChai = {teaLeaves: number}
type Extra = {masala:number}

type MasalaChaiNew = BaseChai & Extra;  // This is a type alias that combines the properties of `BaseChai` and `Extra` using an intersection type. The resulting `MasalaChai` type will have both `teaLeaves` and `masala` properties, allowing you to create objects that conform to this combined structure.


const cup : MasalaChaiNew = {
    teaLeaves: 5,
    masala: 2
}


type User = {
    username: string;
    bio?: string;     // The `bio` property is marked as optional using the `?` modifier. This means that when creating an object of type `User`, the `bio` property can be omitted. If it is provided, it must be a string; if it is not provided, the object will still be valid as a `User`. This allows for flexibility in defining user objects, where some users may have a bio while others may not.
}

const u1: User = {
    username: "chaiLover"
}

const u2: User = {
    username: "teaEnthusiast",
    bio: "I love chai!"
}


type Config = {
    readonly appName: string;  // The `appName` property is marked as `readonly`, which means that once it is set, it cannot be changed. This provides immutability for the `appName` property, ensuring that its value remains constant throughout the lifetime of the object. Attempting to modify a `readonly` property will result in a compile-time error, enforcing the intended behavior of keeping the application name fixed.
    version : number;
}

const cfg: Config = {
    appName: "ChaiApp",
    version: 1.0
}

// cfg.appName = "NewChaiApp";  // This will throw a compile-time error because `appName` is marked as `readonly` in the `Config` type. Once it is set, it cannot be changed, ensuring immutability for that property.