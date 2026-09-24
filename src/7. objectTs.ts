const chai = {
    name : "chai",
    price : 20,
    isHot : true,
}

// {
//     name : String;
//     price : Number;
//     isHot : Boolean;
// }

let tea : {            // This is an inline type annotation for the `tea` variable. It specifies that `tea` should be an object with three properties: `name`, `price`, and `isHot`. The `name` property is of type `string`, the `price` property is of type `number`, and the `isHot` property is of type `boolean`. This provides type safety, ensuring that any object assigned to `tea` must conform to this structure, preventing runtime errors due to incorrect property types or missing properties.
    name : string;
    price : number;
    isHot : boolean;
}

 
tea = {               // This is an object literal assigned to the `tea` variable. It must conform to the inline type annotation defined for `tea`, which requires it to have `name`, `price`, and `isHot` properties with the specified types. The object provided here has a `name` of "tea", a `price` of 10, and an `isHot` value of true, which matches the expected structure and types, making this assignment valid.
    name : "tea",
    price : 10,
    isHot : true,
}


type Tea = {                // This is a type alias named `Tea` that defines the structure of a tea object. It specifies that any object of type `Tea` must have three properties: `name`, `price`, and `ingredients`. The `name` property is of type `string`, the `price` property is of type `number`, and the `ingredients` property is an array of strings (`string[]`). This type alias can be used to enforce consistent structure for tea objects throughout the codebase, providing better type safety and reducing the likelihood of errors related to object shape.
    name : string;
    price : number;
    ingredients : string[];
} 


const adrakChai : Tea = {       // This is an object literal assigned to the `adrakChai` constant, which is explicitly typed as `Tea`. The object must conform to the structure defined by the `Tea` type alias, which requires it to have `name`, `price`, and `ingredients` properties with the specified types. The provided object has a `name` of "Adrak Chai", a `price` of 25, and an `ingredients` array containing "tea leaves", "ginger", "milk", and "sugar". This assignment is valid because it adheres to the expected structure and types defined by the `Tea` type alias.
    name : "Adrak Chai",
    price : 25,
    ingredients : ["tea leaves", "ginger", "milk", "sugar"]
}



type Cup = {size : String};

let smallCup : Cup = {size : "200ml"};  // This is an object literal assigned to the `smallCup` variable, which is explicitly typed as `Cup`. The object must conform to the structure defined by the `Cup` type alias, which requires it to have a `size` property of type `String`. The provided object has a `size` of "small", which matches the expected type, making this assignment valid.

let bigCup = {size : "400ml", material: "steel"};  // This is an object literal assigned to the `bigCup` variable, which is explicitly typed as `Cup`. The object must conform to the structure defined by the `Cup` type alias, which requires it to have a `size` property of type `String`. The provided object has a `size` of "large", which matches the expected type, making this assignment valid.

smallCup = bigCup;  // This is a valid assignment because both `smallCup` and `bigCup` are of type `Cup`, which requires them to have a `size` property of type `String`. The assignment does not violate the type constraints, as both objects conform to the expected structure defined by the `Cup` type alias.


type Brew = {brewTime : number}

const coffee = {brewTime : 5, beans : "Arabica"};  // This is an object literal assigned to the `coffee` constant. It has two properties: `brewTime`, which is a number, and `beans`, which is a string. The object can be used in contexts where an object with a `brewTime` property is expected, as it satisfies the structure defined by the `brew` type alias.

const chaiBrew: Brew = coffee;  // This is a valid assignment because the `coffee` object has a `brewTime` property of type `number`, which satisfies the structure defined by the `brew` type alias. The assignment does not violate the type constraints, as the `chaiBrew` variable can accept any object that has a `brewTime` property of type `number`, regardless of any additional properties present in the assigned object.


type User = {
    username : string;
    password : string;
}

const u : User = {
    username: "ChaiCode",
    password: "123"
}




type Item = {name : string, quantity: number}
type Address = {street : string, pin : number} 

type order = {
    id : string,
    item: Item[],
    address: Address
}


type Chai = {        
    name : string,
    price : number,
    isHot : boolean
}


const updateChai = (updates : Partial<Chai>) => { 
    console.log("updating chai with", updates)
}


updateChai({price: 25})
updateChai({isHot: false})
updateChai({})


type ChaiOrder = {
    name ?: string;
    quantity ?: number
}

const placeOrder = (order : Required<ChaiOrder>) => {
    console.log(order);
}


placeOrder({})



type ChaiNew = {
    name : string;
    price : number;
    isHot : boolean;
    ingredients : string[];
}


type BasicChaiInfo = Pick<Chai, "name" | "price">

const chaiInfo: BasicChaiInfo = {
    name : "Lemon Tea",
    price : 30
}


type chaiNew = {
    name : string;
    price : number;
    isHot : boolean;
    secretIngredients : string[]
};

type PublicChai = Omit<Chai, "secretIngredients">;