// This function demonstrates type narrowing in TypeScript. It takes a parameter `kind` that can be either a string or a number. Inside the function, we check the type of `kind` using the `typeof` operator. If `kind` is a string, we return a message indicating that the user ordered a cup of chai with the specified flavor. If `kind` is a number, we return a message indicating the number of cups of chai ordered. This allows us to handle different types of input appropriately and provide meaningful output based on the type of the argument passed to the function.

function getChai(kind: string | number) {
    if(typeof kind === "string") {
        return `You ordered a cup of ${kind}`;
    }
    return `You ordered ${kind} cups of chai`;
}

// This function demonstrates the use of optional parameters in TypeScript. The `msg` parameter is optional, indicated by the `?` symbol. If a message is provided, the function returns a message indicating that the specified type of chai has been served. If no message is provided, it defaults to serving "masala chai". This allows for flexibility in how the function can be called, accommodating both cases where a specific message is desired and where a default message suffices.
function serveChai(msg?: string) {
    if(msg) {
        return `${msg} served!`;
    }
    return `Serving default masala chai!`;
}


// This function demonstrates the use of literal types in TypeScript. The `size` parameter can only take on specific string values ("small", "medium", "large") or a number. Inside the function, we check the value of `size` and return a message indicating the size of chai ordered. This allows us to enforce specific allowed values for the `size` parameter, providing better type safety and preventing invalid inputs.
function orderChai(size: "small" | "medium" | "large" | number) {
    if (size === "small") {
        return "You ordered a small cup of chai";
    }
    if (size === "medium" || size === "large") {
        return `You ordered a ${size} cup of chai`;
    }
    return `You ordered ${size} cups of chai`;
}


class KulhadChai {
    serve(){
        return "Serving chai in a kulhad!";
    }
}

class Cutting {
    serve(){
        return "Serving chai in a cutting!";
    }
}

// This function demonstrates the use of type narrowing with classes in TypeScript. The `serve` function takes a parameter `chai` that can be either an instance of the `KulhadChai` class or the `Cutting` class. Inside the function, we check if `chai` is an instance of `KulhadChai` using the `instanceof` operator. If it is, we call the `serve` method of the `KulhadChai` class and return its result. This allows us to handle different types of chai objects appropriately based on their class type.
function serve(chai : KulhadChai | Cutting) {
    if(chai instanceof KulhadChai) {
        return chai.serve();
    }
}


type ChaiOrder = {
    type : string,
    sugar : number  
}

// This function demonstrates the use of type predicates in TypeScript. The `isChaiOrder` function takes a parameter `obj` of type `any` and checks if it conforms to the `ChaiOrder` type. It returns a boolean indicating whether `obj` is a valid `ChaiOrder`. This allows us to perform runtime type checking and ensure that the object passed to the function has the expected structure, providing better type safety and preventing potential runtime errors.
function isChaiOrder(obj:any) : obj is ChaiOrder {
    return(
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}


// This function demonstrates the use of type narrowing with type predicates in TypeScript. The `serveOrder` function takes a parameter `item` that can be either a `ChaiOrder` object or a string. Inside the function, we use the `isChaiOrder` type predicate to check if `item` is a valid `ChaiOrder`. If it is, we return a message indicating the type of chai and the amount of sugar. If it is not, we assume it is a string and return a message indicating that we are serving the specified type of chai. This allows us to handle different types of input appropriately and provide meaningful output based on the type of the argument passed to the function.
function serveOrder(item:ChaiOrder | string) {
    if(isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar} sugar!`;
    }
    return `Serving ${item} chai!`;
}



// This function demonstrates the use of discriminated unions in TypeScript. The `serveChaiType` function takes a parameter `chai` that can be one of three specific types: `MasalaChai`, `GingerChai`, or `ElaichiChai`. Each type has a unique `type` property that acts as a discriminator. Inside the function, we use a switch statement to check the value of the `type` property and return a message indicating the specific type of chai being served along with its associated property (spice level, amount, or aroma). This allows us to handle different types of chai objects appropriately based on their discriminated union type.
type MasalaChai = { type: "masala"; spicelevel: number };
type GingerChai = { type: "ginger"; amount: number };
type ElaichiChai = { type: "elaichi"; aroma: number };


type Chai = MasalaChai | GingerChai | ElaichiChai;


// This function demonstrates the use of discriminated unions in TypeScript. The `MakeChai` function takes a parameter `order` that can be one of three specific types: `MasalaChai`, `GingerChai`, or `ElaichiChai`. Each type has a unique `type` property that acts as a discriminator. Inside the function, we use a switch statement to check the value of the `type` property and return a message indicating the specific type of chai being made along with its associated property (spice level, amount, or aroma). This allows us to handle different types of chai orders appropriately based on their discriminated union type.
function MakeChai(order: Chai) {
    switch (order.type) {
        case "masala":
            return `Making masala chai with spice level ${order.spicelevel}`;
            break;
        case "ginger":
            return `Making ginger chai with amount ${order.amount}`;
            break;
        case "elaichi":
            return `Making elaichi chai with aroma ${order.aroma}`;
            break;
    }
}



function brew(order: MasalaChai | GingerChai | ElaichiChai) {
    if("spicelevel" in order) {
        //
    }
}

// This function demonstrates the use of type predicates in TypeScript. The `isStringArray` function takes a parameter `arr` of type `unknown` and checks if it is an array of strings. It returns a boolean indicating whether `arr` is a valid string array. This allows us to perform runtime type checking and ensure that the value passed to the function has the expected structure, providing better type safety and preventing potential runtime errors.
function isStringArray(arr: unknown) : arr is string[] {

}