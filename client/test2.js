// currying
//normal function
const add = (a, b) => a + b;
console.log(add(2, 3)); //5

// curried

const curriedAdd = (a) => (b) => a + b;
console.log(curriedAdd(3)(5)); //8

// curried syntax with function expression
function curriedAdd2(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(curriedAdd2(4)(6)(2)); //12

const totalPrice = (amount, discount) => amount - amount * discount;
console.log(totalPrice(100, 0.3)); //70

// but if we need to count multiple amount price?
const curriedTotalPrice = (discount) => (amount) => amount - amount * discount;
const withDiscount = curriedTotalPrice(0.3);

console.log(withDiscount(100)); //70
console.log(withDiscount(200)); //140
console.log(withDiscount(250)); //175
