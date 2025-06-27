import { produce } from "immer";

const employee = {
  name: "Mir",
  address: {
    country: "Bangladesh",
    city: "Dhaka",
  },
};

/* const employee2 = {
  ...employee,
  name: "Mezba",
}; */

// shallow copy, here the address of the first employee will also be mutated, which we don't want.
// employee2.address.city = "Chittagong";

// temporary solution
/* const employee2 = {
  ...employee,
  name: "Mezba",
  address: { ...employee.address, city: "Chittagong" },
}; */

// console.log(employee2);

// structured cloning-  Modern browsers only
// const employee2 = structuredClone(employee);
// employee2.name = "Mezba";
// employee2.address.city = "Chittagong";
// console.log(employee2);
// console.log(employee);

// there is another solution called immer
// install immer:
// npm install immer

const employee2 = produce(employee, (draft) => {
  draft.name = "Mezba";
  draft.address.city = "Chittagong";
});

console.log(employee);
console.log(employee2);
