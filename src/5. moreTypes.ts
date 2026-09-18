let response : any = "42";
// type assertion. It is used to tell the compiler that we know the type of a variable better than it does. In this case, we are asserting that `response` is of type `string`, so we can safely access the `length` property without TypeScript throwing an error.
let numericLength: number = (response as string).length;


type Book = {
    name : string
};

let bookString = '{"name": "The Great Gatsby"}';

let bookObject = JSON.parse(bookString) as Book; // type assertion to tell TypeScript that the parsed object is of type Book

console.log(bookObject); // Output: The Great Gatsby   



const inputElement = document.getElementById("username") as HTMLInputElement; // type assertion to tell TypeScript that the element is an HTMLInputElement


let value: any;
value = "Chai";
value = [1,2,3];
value = 2.5;

value.toUpperCase(); // This will throw a runtime error because `value` is not guaranteed to be a string at this point. TypeScript allows this because `value` is of type `any`, which bypasses type checking.


let newValue: unknown;
newValue = "Chai";
newValue = [1,2,3];
newValue = 2.5;
newValue.toUpperCase(); // This will throw a compile-time error because `newValue` is of type `unknown`, which requires type checking before accessing properties or methods. TypeScript enforces this to ensure type safety and prevent potential runtime errors.




try {

} catch (error) {
    if (error instanceof Error) {
        console.log(error.message); // TypeScript knows that `error` is of type `Error` here, so we can safely access the `message` property.
    }
    console.log(error); // TypeScript treats `error` as type `unknown` here, so we cannot safely access any properties without type checking.
}


const data:unknown = "Hello, World!";
const strData: string = data as string; // type assertion to tell TypeScript that `data` is of type `string`


type Role = "admin" | "user" ;

function redirectBasedOnRole(role: Role) : void {
    if(role === "admin") {
        console.log("Redirecting to admin dashboard");
        return;
    }

    if (role === "user") {
        console.log("Redirecting to user dashboard");
        return;
    }

    role; // This line will cause a compile-time error because `role` is of type `Role`, which can only be "admin" or "user". TypeScript knows that all possible values have been handled, so this line is unreachable and will never be executed. This is an example of exhaustive type checking, which helps catch potential bugs at compile time. Type of this is `never` because it represents a value that should never occur.

}



function neverReturn(): never {
    while(true) {
        // This function will never return because it contains an infinite loop. The `never` type indicates that the function will not complete normally and will never return a value. This is useful for functions that throw exceptions or have infinite loops, as it helps TypeScript understand the control flow of the program and catch potential errors at compile time.
    }
}   