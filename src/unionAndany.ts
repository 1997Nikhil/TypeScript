// union types

let subs: Number | String = 10;

let apiRequestStatus: "success" | "failure" | 'pending' = "success";

let airlineSeat : "aisle" | "window" | "middle" = "window";

const orders = ['12', '20', '28', '42'];


// any type
// avoid using 'any' when possible
// let currentOrder;

// unknown type
// unknown is safer than any because it forces you to do type checking before using the value
let currentOrder: string | undefined;

for (let order of orders) {
    if(order === '28') {
        currentOrder = order;
        break;
    }
}


console.log(currentOrder); // currentOrder is of type string | undefined